//event listener to collect form input data and post it to the backend
import { riskMapping } from './calculations.js'

document.addEventListener('DOMContentLoaded', () => {

  // Sidebar Toggle Functionality
  const sidebar = document.getElementById('sidebar');
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const closeSidebarBtn = document.getElementById('close-sidebar-btn');
  const mainContent = document.querySelector('.main-content');

  // Function to close sidebar
  const closeSidebar = () => {
    sidebar.classList.remove('open');
    mainContent.classList.remove('shifted');
  };

  // Function to open sidebar
  const openSidebar = () => {
    sidebar.classList.add('open');
    mainContent.classList.add('shifted');
  };

  // Learn More button click
  learnMoreBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('open');
    
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Close button click
  closeSidebarBtn.addEventListener('click', closeSidebar);

  // Close sidebar when clicking outside
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !learnMoreBtn.contains(event.target)) {
      closeSidebar();
    }
  });

  // Hide risk outcome box by default
  const riskOutcomeBox = document.getElementById('risk-level-outcome-box');
  riskOutcomeBox.style.display = 'none';

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

      // Show the risk outcome box with the result
      riskOutcomeBox.style.display = 'block';
    });

  });