import { createOptimizedPicture, loadScript, loadCSS } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Extracts block-level properties from placeholder cards and sets them as data attributes
 * @param {HTMLElement} block The block element
 * @param {HTMLElement} ul The ul containing card items
 */
function extractBlockProperties(block, ul) {
  const propertyFields = ['swipable', 'startingCard'];
  const propertyValues = {};
  const itemsToRemove = [];

  // Check first few li elements for property values
  const items = ul.querySelectorAll('li');
  let propertyIndex = 0;

  // Use for...of to allow early exit when we hit a real card
  // eslint-disable-next-line no-restricted-syntax
  for (const li of items) {
    // Check if li is completely empty (no content or only whitespace)
    const isEmpty = !li.textContent.trim() && !li.querySelector('picture, img');

    if (isEmpty && propertyIndex < propertyFields.length) {
      // Empty li - field value not defined, just remove it and move to next field
      itemsToRemove.push(li);
      propertyIndex += 1;
      // eslint-disable-next-line no-continue
      continue;
    }

    // Check if this li only contains a single text value (boolean or number)
    const paragraphs = li.querySelectorAll('p');
    const hasImage = li.querySelector('picture, img');
    const hasHeading = li.querySelector('h1, h2, h3, h4, h5, h6');

    // If only one paragraph, no images, no headings, might be a property value
    const isPropertyCandidate = paragraphs.length === 1
      && !hasImage
      && !hasHeading
      && propertyIndex < propertyFields.length;

    if (isPropertyCandidate) {
      const text = paragraphs[0].textContent.trim();

      // Check if it's a boolean or number
      if (text === 'true' || text === 'false' || !Number.isNaN(Number(text))) {
        const fieldName = propertyFields[propertyIndex];
        propertyValues[fieldName] = text;
        itemsToRemove.push(li);
        propertyIndex += 1;
      }
    } else {
      // Stop checking once we hit a real card
      break;
    }
  }

  // Set data attributes on block (convert camelCase to kebab-case)
  Object.keys(propertyValues).forEach((key) => {
    const kebabCase = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    block.dataset[key] = propertyValues[key];
    // Also set as kebab-case attribute for consistency
    block.setAttribute(`data-${kebabCase}`, propertyValues[key]);
  });

  // Remove placeholder items
  itemsToRemove.forEach((li) => li.remove());
}

export default async function decorate(block) {
  // Build UL structure
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {
        div.className = 'cards-card-body';
      }
    });
    ul.append(li);
  });

  // Replace images with optimized pictures
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  // Append UL to block
  block.textContent = '';
  ul.classList.add('grid-cards');
  ul.querySelectorAll('li').forEach((li) => li.classList.add('benefit-cards'));
  block.append(ul);

  // Extract block properties from placeholder cards (e.g., swipable, startingCard)
  extractBlockProperties(block, ul);

  // Check if swiper is enabled via data attribute
  const isSwipable = block.dataset.swipable === 'true';
  const startingCard = parseInt(block.dataset.startingCard || '0', 10);

  if (isSwipable) {
    // Load Swiper library
    await loadCSS('/scripts/swiperjs/swiper-bundle.min.css');
    await loadScript('/scripts/swiperjs/swiper-bundle.min.js');

    // Add Swiper classes
    block.classList.add('swiper');
    ul.classList.add('swiper-wrapper');
    ul.classList.remove('grid-cards');
    ul.querySelectorAll('li').forEach((li) => {
      li.classList.add('swiper-slide');
    });

    // Add pagination
    const swiperPagination = document.createElement('div');
    swiperPagination.className = 'swiper-pagination';
    block.appendChild(swiperPagination);

    // Navigation arrows (commented out for now)
    // const swiperButtonPrev = document.createElement('div');
    // swiperButtonPrev.className = 'swiper-button-prev';
    // block.appendChild(swiperButtonPrev);

    // const swiperButtonNext = document.createElement('div');
    // swiperButtonNext.className = 'swiper-button-next';
    // block.appendChild(swiperButtonNext);

    // Initialize Swiper
    // Check if testimonial-card class is present for centered slides
    const isTestimonial = block.classList.contains('testimonial-card');

    // Build Swiper configuration
    const swiperConfig = {
      slidesPerView: 1,
      spaceBetween: 16,
      initialSlide: startingCard,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        600: { // tablet
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: { // desktop
          slidesPerView: 3,
          spaceBetween: 36,
        },
      },
    };

    // Add centeredSlides for testimonial cards
    if (isTestimonial) {
      swiperConfig.centeredSlides = true;
    }

    // eslint-disable-next-line no-undef
    const swiper = new Swiper(block, swiperConfig);

    // Store swiper instance for potential future use
    block.swiperInstance = swiper;
  } else {
    // === View All / View Less Toggle (Mobile Only) ===
    const cards = ul.querySelectorAll('li');
    const maxVisible = 3;

    const isMobile = () => window.innerWidth <= 768;

    const toggleView = (btn, expand) => {
      cards.forEach((card, index) => {
        if (index >= maxVisible) {
          card.style.display = expand ? 'flex' : 'none';
        }
      });
      btn.textContent = expand ? 'View Less' : 'View All';
    };

    const setupToggleButton = () => {
      if (cards.length > maxVisible && isMobile()) {
        // Hide extra cards
        cards.forEach((card, index) => {
          card.style.display = index >= maxVisible ? 'none' : 'flex';
        });

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'View All';
        toggleBtn.className = 'view-toggle';
        block.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', () => {
          const isExpanded = toggleBtn.textContent === 'View Less';
          toggleView(toggleBtn, !isExpanded);
        });
      }
    };

    // Initial setup
    setupToggleButton();

    // Reapply toggle if screen resizes
    window.addEventListener('resize', () => {
      const existingBtn = block.querySelector('.view-toggle');
      if (existingBtn) existingBtn.remove();
      cards.forEach((card) => { card.style.display = 'flex'; });
      setupToggleButton();
    });
  }
}
