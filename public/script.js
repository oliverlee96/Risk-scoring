//event listener to collect form input data and post it to the backend
import { riskMapping } from './calculations.js'

document.addEventListener('DOMContentLoaded', () => {

  // Information Modal Functionality
  const modal = document.getElementById('info-modal');
  const infoBtn = document.getElementById('info-btn');
  const closeBtn = document.querySelector('.close');

  // Open modal
  infoBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Collapsible Info Panel Functionality
  const infoPanelToggle = document.getElementById('info-panel-toggle');
  const infoPanelContent = document.getElementById('info-panel-content');

  infoPanelToggle.addEventListener('click', () => {
    const isCollapsed = infoPanelContent.classList.contains('collapsed');
    
    if (isCollapsed) {
      infoPanelContent.classList.remove('collapsed');
      infoPanelToggle.classList.remove('collapsed');
    } else {
      infoPanelContent.classList.add('collapsed');
      infoPanelToggle.classList.add('collapsed');
    }
  });

  // Initialize panel as collapsed
  infoPanelContent.classList.add('collapsed');
  infoPanelToggle.classList.add('collapsed');

  function populateSelectField(selectElementId, object) {
    const selectElement = document.getElementById(selectElementId);
    for (const key in object) {
        const option = document.createElement("option");
        option.value = key;
        option.text = key;
        console.log(option);
        selectElement.appendChild(option);
    }
  };
  populateSelectField("metadata-type", riskMapping.metadataType)
  populateSelectField("data-privacy",riskMapping.dataPrivacyCategory)

    
  const form = document.getElementById('metadata-form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); //Prevents default behaviour of form submission

      // Gather the data input from the form
      const metadataTypeInput = document.getElementById('metadata-type').value;
      const dataPrivacyCategoryInput = document.getElementById('data-privacy').value;
      const numberOfDependenciesInput = document.getElementById('dependencies').value;
      const documentationInput = document.getElementById('documentation').value;
  
      // Send to server for risk calculation
      const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          metadataType: metadataTypeInput, 
          dataPrivacyCategory: dataPrivacyCategoryInput, 
          numberOfDependencies: numberOfDependenciesInput, 
          documentation: documentationInput
        })
      });
  
      const data = await response.json();

      console.log(data);

      const riskLevelSpan = document.getElementById('riskLevelSpan');
      const metadataTypeSpan = document.getElementById('metadataTypeSpan');

      const riskLevel = data.overallRisk;
      const metadataType = data.metadataType;

      riskLevelSpan.textContent = riskLevel;
      metadataTypeSpan.textContent = metadataType;
    });

  });