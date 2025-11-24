import { getMetadata, decorateBlock, loadBlock } from '../../scripts/aem.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer fragment directly from .plain.html (without decoration)
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';

  block.textContent = '';
  const footer = document.createElement('div');

  // Fetch the plain HTML directly to avoid Universal Editor instrumentation
  if (footerPath && footerPath.startsWith('/')) {
    const path = footerPath.replace(/(\.plain)?\.html/, '');
    const resp = await fetch(`${path}.plain.html`);

    if (resp.ok) {
      const html = await resp.text();

      // Create a temporary container to parse the HTML
      const temp = document.createElement('div');
      temp.innerHTML = html;

      // Extract sections and their content (no data-aue-* attributes in plain HTML)
      const sections = temp.querySelectorAll(':scope > div');
      sections.forEach((section) => {
        const newSection = document.createElement('div');
        newSection.className = section.className;
        newSection.innerHTML = section.innerHTML;

        // Decorate any blocks within this section
        const blocks = newSection.querySelectorAll('.accordion');
        blocks.forEach((blockEl) => {
          decorateBlock(blockEl);
          loadBlock(blockEl);
        });

        footer.append(newSection);
      });
    }
  }

  block.append(footer);

  const details = block.querySelectorAll('footer .section.accordion-container:first-of-type details');
  if (window.innerWidth > 768) {
    details.forEach((detail) => {
      detail.open = true;
    });
  }
}
