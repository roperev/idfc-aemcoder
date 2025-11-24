import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../../scripts/scripts.js';

/**
 * Recursively removes all data-aue-* attributes from an element and its descendants
 * @param {Element} element The element to strip attributes from
 */
function stripAueAttributes(element) {
  // Remove data-aue-* attributes from this element
  [...element.attributes]
    .filter((attr) => attr.name.startsWith('data-aue-'))
    .forEach((attr) => element.removeAttribute(attr.name));

  // Recursively strip from all children
  Array.from(element.children).forEach((child) => stripAueAttributes(child));
}

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');

  if (fragment) {
    // Strip data-aue-* attributes from fragment to prevent footer content
    // from appearing in Universal Editor content tree
    stripAueAttributes(fragment);

    // Append all sections from fragment
    while (fragment.firstElementChild) {
      footer.append(fragment.firstElementChild);
    }
  }

  block.append(footer);

  // Open accordion details on desktop
  const details = block.querySelectorAll('footer .section.accordion-container:first-of-type details');
  if (window.innerWidth > 768) {
    details.forEach((detail) => {
      detail.open = true;
    });
  }
}
