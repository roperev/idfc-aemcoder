export default function decorate(block) {
  // Get the main container div
  const container = block.querySelector(':scope > div');

  if (!container) return;

  // Add semantic class to container
  container.classList.add('banner-content');

  // Get all child divs
  const children = Array.from(container.children);

  // Banner Heading
  if (children[0]) {
    children[0].classList.add('banner-heading');
    const headingText = children[0].querySelector('p');
    if (headingText) headingText.classList.add('banner-heading-text');
  }

  // CTA 1
  if (children[1]) {
    children[1].classList.add('banner-cta-1', 'banner-cta');
    const ctaHeading = children[1].querySelector('p:first-of-type');
    const ctaLink = children[1].querySelector('p:last-of-type a');
    const ctaHr = children[1].querySelectorAll('hr');
    if (ctaHeading) ctaHeading.classList.add('cta-heading');
    if (ctaLink) ctaLink.classList.add('cta-button', 'cta-button-outlined');
    ctaHr.forEach((hr) => hr.classList.add('cta-separator'));
  }

  // CTA 2
  if (children[2]) {
    children[2].classList.add('banner-cta-2', 'banner-cta');
    const ctaHeading = children[2].querySelector('p:first-of-type');
    const ctaLink = children[2].querySelector('p:last-of-type a');
    const ctaHr = children[2].querySelectorAll('hr');
    if (ctaHeading) ctaHeading.classList.add('cta-heading');
    if (ctaLink) ctaLink.classList.add('cta-button', 'cta-button-filled');
    ctaHr.forEach((hr) => hr.classList.add('cta-separator'));
  }

  // Bottom Text
  if (children[3]) {
    children[3].classList.add('banner-bottom-text');
    const bottomText = children[3].querySelector('p');
    if (bottomText) bottomText.classList.add('banner-bottom-text-content');
  }

  // Desktop Image
  if (children[4]) {
    children[4].classList.add('banner-image-desktop', 'banner-image');
    const picture = children[4].querySelector('picture');
    const img = children[4].querySelector('img');
    if (picture) picture.classList.add('banner-picture');
    if (img) {
      img.classList.add('banner-img');
      img.loading = 'eager';
    }
  }

  // Mobile Image
  if (children[5]) {
    children[5].classList.add('banner-image-mobile', 'banner-image');
    const picture = children[5].querySelector('picture');
    const img = children[5].querySelector('img');
    if (picture) picture.classList.add('banner-picture');
    if (img) {
      img.classList.add('banner-img');
      img.loading = 'lazy';
    }
  }
}
