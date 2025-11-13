/**
 * Calculate total height of fixed elements (header + category nav)
 */
function getFixedElementsHeight(headerHeight) {
  let totalHeight = headerHeight - 10;
  const categoryNavWrapper = document.querySelector('.category-nav-wrapper');
  if (categoryNavWrapper?.offsetHeight > 0) {
    totalHeight += categoryNavWrapper.offsetHeight;
  }
  return totalHeight;
}

/**
 * Setup sticky behavior for anchor nav wrapper
 */
function setupStickyBehavior(wrapper, headerHeight) {
  let originalOffsetTop = wrapper.getBoundingClientRect().top + window.scrollY;
  let ticking = false;

  const updateStickyTop = () => {
    wrapper.style.setProperty('--sticky-top', `${getFixedElementsHeight(headerHeight)}px`);
  };

  const updateSticky = () => {
    if (!wrapper.classList.contains('stuck')) {
      originalOffsetTop = wrapper.getBoundingClientRect().top + window.scrollY;
    }
    updateStickyTop();
    const shouldStick = window.scrollY > (originalOffsetTop - getFixedElementsHeight(headerHeight));
    wrapper.classList.toggle('stuck', shouldStick);
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateSticky);
    }
  };

  updateStickyTop();
  window.addEventListener('scroll', onScroll, { passive: true });

  return () => window.removeEventListener('scroll', onScroll);
}

export default function decorate(block) {
  // Add container class for CSS styling
  block.classList.add('anchor-nav-container');

  // Get header height for sticky calculations
  const headerHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
    10,
  ) || 64;

  // Find all links in the block
  const links = block.querySelectorAll('a');

  links.forEach((link) => {
    // Skip if already processed
    if (link.classList.contains('anchor-nav-link')) return;

    // Add base classes
    link.classList.add('anchor-nav-link', 'button');

    // Detect button type from parent elements (decorateButtons runs first)
    if (link.closest('strong')) {
      link.classList.add('primary');
    } else if (link.closest('em')) {
      link.classList.add('secondary');
    }

    // Add data-text for hover prevention
    link.setAttribute('data-text', link.textContent.trim());

    // Add class to row container for CSS styling
    const row = link.closest('div:not(.anchor-nav-container):not(.anchor-nav-wrapper)');
    if (row) {
      row.classList.add('anchor-nav-item');
    }

    // Add click handler for anchor links
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.getElementById(href.substring(1));
        if (target) {
          const yOffset = -(headerHeight + 60);
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });

  // Setup sticky behavior
  const wrapper = block.closest('.anchor-nav-wrapper');
  if (wrapper) {
    const cleanup = setupStickyBehavior(wrapper, headerHeight);
    block.dataset.cleanup = 'registered';
    block.cleanupFunction = cleanup;
  }
}
