import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../../scripts/scripts.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // Load footer fragment using loadFragment (same as header)
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // Build footer DOM by extracting content from fragment sections
  // This approach (like header.js) leaves instrumented sections behind in the fragment
  const footer = document.createElement('div');

  if (fragment) {
    // Get all sections from the fragment
    const sections = fragment.querySelectorAll(':scope > div');

    sections.forEach((section) => {
      // Create a new section div (uninstrumented)
      const newSection = document.createElement('div');
      // Copy class names to preserve styling
      newSection.className = section.className;

      // Extract and move all child content from the original section
      // This leaves the instrumented section element behind in the fragment
      Array.from(section.children).forEach((child) => {
        newSection.appendChild(child.cloneNode(true));
      });

      footer.appendChild(newSection);
    });
  }

  block.textContent = '';
  block.append(footer);

  // Open accordion details on desktop
  const details = block.querySelectorAll('footer .section.accordion-container:first-of-type details');
  if (window.innerWidth > 768) {
    details.forEach((detail) => {
      detail.open = true;
    });
  }
}
