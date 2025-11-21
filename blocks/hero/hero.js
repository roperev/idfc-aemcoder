import { decorateButtons } from '../../scripts/aem.js';

export default function decorate(block) {
  // Move the picture element to be positioned absolutely on the right
  const picture = block.querySelector('picture');
  if (picture) {
    // Remove the picture from its parent div
    const pictureParent = picture.parentElement;
    pictureParent.remove();

    // Append it directly to the hero block for absolute positioning
    block.appendChild(picture);
  }

  // Group button labels with their buttons
  const contentDivs = Array.from(block.querySelectorAll('div > div'));
  const contentDiv = contentDivs.find((div) => div.children.length > 0);

  if (contentDiv) {
    // Use existing decorateButtons function to handle button decoration
    decorateButtons(contentDiv);

    const allParagraphs = Array.from(contentDiv.querySelectorAll('p'));
    const heading = contentDiv.querySelector('h1, h2');

    // Find button containers (already decorated by decorateButtons)
    const buttonPairs = [];
    const processedIndices = new Set();

    allParagraphs.forEach((p, index) => {
      if (p.classList.contains('button-container')) {
        // Find the label (previous paragraph without a link)
        let label = null;
        if (index > 0) {
          const prevP = allParagraphs[index - 1];
          if (!prevP.querySelector('a') && !processedIndices.has(index - 1)) {
            label = prevP;
            processedIndices.add(index - 1);
          }
        }

        buttonPairs.push({ label, buttonContainer: p });
        processedIndices.add(index);
      }
    });

    // Find footer paragraphs (not labels, not buttons)
    const footerParagraphs = allParagraphs.filter(
      (p, index) => !processedIndices.has(index),
    );

    if (buttonPairs.length > 0) {
      // Create wrapper for button groups
      const buttonGroupsWrapper = document.createElement('div');
      buttonGroupsWrapper.className = 'button-groups-wrapper';

      // Create button groups for each pair
      buttonPairs.forEach(({ label, buttonContainer }) => {
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';

        if (label) {
          const labelClone = label.cloneNode(true);
          labelClone.removeAttribute('class');
          buttonGroup.appendChild(labelClone);
        }

        buttonGroup.appendChild(buttonContainer.cloneNode(true));
        buttonGroupsWrapper.appendChild(buttonGroup);
      });

      // Clear content and rebuild
      contentDiv.innerHTML = '';
      if (heading) contentDiv.appendChild(heading);
      contentDiv.appendChild(buttonGroupsWrapper);

      // Add footer paragraphs
      footerParagraphs.forEach((p) => {
        contentDiv.appendChild(p.cloneNode(true));
      });
    }
  }
}
