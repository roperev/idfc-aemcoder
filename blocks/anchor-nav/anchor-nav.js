/**
 * Anchor Navigation - Desktop-only sticky navigation bar
 * Links to sections on the same page
 */

/**
 * Build navigation from block content
 */
function buildNavigation(navItems, headerHeight) {
  const nav = document.createElement('nav');
  nav.classList.add('anchor-nav-container');

  const navList = document.createElement('ul');
  navList.classList.add('anchor-nav-list');

  const fragment = document.createDocumentFragment();

  navItems.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('anchor-nav-item');

    const link = item.link.cloneNode(true);
    link.classList.add('anchor-nav-link');
    link.setAttribute('data-text', link.textContent.trim());

    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          const yOffset = -(headerHeight + 60);
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });

    li.appendChild(link);
    fragment.appendChild(li);
  });

  navList.appendChild(fragment);
  nav.appendChild(navList);
  return nav;
}

/**
 * Parse block content to extract navigation items
 */
function parseBlockContent(block) {
  const navItems = [];
  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row) => {
    // New structure: div > div > p.button-container > a.button
    const link = row.querySelector('a.button');
    if (link) {
      navItems.push({ link });
    }
  });

  return navItems;
}

/**
 * Setup sticky behavior - switch to fixed positioning when scrolled to top
 */
function setupStickyBehavior(wrapper, headerHeight) {
  let originalOffsetTop = wrapper.getBoundingClientRect().top + window.scrollY;
  let ticking = false;

  const updateSticky = () => {
    const { scrollY } = window;

    if (!wrapper.classList.contains('stuck')) {
      originalOffsetTop = wrapper.getBoundingClientRect().top + window.scrollY;
    }

    const shouldStick = scrollY > (originalOffsetTop - headerHeight);

    wrapper.classList.toggle('stuck', shouldStick);
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateSticky);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}

export default function decorate(block) {
  const navItems = parseBlockContent(block);

  if (navItems.length === 0) {
    block.style.display = 'none';
    return;
  }

  const headerHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
    10,
  ) || 64;

  const nav = buildNavigation(navItems, headerHeight);

  block.innerHTML = '';
  block.appendChild(nav);

  const wrapper = block.closest('.anchor-nav-wrapper');
  if (wrapper) {
    const cleanup = setupStickyBehavior(wrapper, headerHeight);
    block.dataset.cleanup = 'registered';
    block.cleanupFunction = cleanup;
  }
}
