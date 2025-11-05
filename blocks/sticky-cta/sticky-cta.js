export default function decorate(block) {
  // Get the main container div
  const container = block.querySelector(':scope > div');

  if (!container) return;

  // Add semantic class to container
  container.classList.add('sticky-cta-content');

  // Get all child divs
  const children = Array.from(container.children);

  // CTA URL
  if (children[0]) {
    const ctaLink = children[0].querySelector('a');
    if (ctaLink) {
      ctaLink.classList.add('sticky-cta-link');
    }
  }

  // CTA Text
  if (children[1]) {
    children[1].classList.add('sticky-cta-text');
    const textContent = children[1].querySelector('p');
    if (textContent) textContent.classList.add('sticky-cta-text-content');
  }

  // CTA ID
  if (children[2]) {
    const ctaId = children[2].textContent.trim();
    if (ctaId) {
      block.setAttribute('data-cta-id', ctaId);
    }
    children[2].style.display = 'none'; // Hide the ID field from display
  }

  // CTA Mobile Text
  if (children[3]) {
    children[3].classList.add('sticky-cta-mobile-text');
    const mobileTextContent = children[3].querySelector('p');
    if (mobileTextContent) mobileTextContent.classList.add('sticky-cta-mobile-text-content');
  }

  // CTA Subtitle
  if (children[4]) {
    children[4].classList.add('sticky-cta-subtitle');
    const subtitleContent = children[4].querySelector('p');
    if (subtitleContent) subtitleContent.classList.add('sticky-cta-subtitle-content');
  }
}
