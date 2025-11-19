import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
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

  // Only add benefit-cards class if NOT testimonial-card variant
  const isTestimonial = block.classList.contains('testimonial-card');
  ul.querySelectorAll('li').forEach((li, index) => {
    if (!isTestimonial) {
      li.classList.add('benefit-cards');
    } else if (index === 0) {
      // For testimonial cards, change star icons to yellow on first card (purple background)
      const starIcons = li.querySelectorAll('.icon-star img');
      starIcons.forEach((img) => {
        const currentSrc = img.getAttribute('src');
        if (currentSrc && currentSrc.includes('star')) {
          const newSrc = currentSrc.replace(/star(?:-white|-black)?\.svg/, 'star-yellow.svg');
          img.setAttribute('src', newSrc);
          img.setAttribute('data-icon-name', 'star-yellow');
        }
      });
    }
  });

  block.append(ul);

  // === View All / View Less Toggle (Mobile Only) - Only for benefit cards ===
  if (!isTestimonial) {
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
