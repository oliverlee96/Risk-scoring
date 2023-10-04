import { calculateIndividualRisk, calculateOverallRisk } from "./calculations.js";

document.addEventListener('DOMContentLoaded', () => {
    
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

      // const individualRisks = calculateIndividualRisk(data);
      // const overallRisk = calculateOverallRisk(individualRisks);

      // console.log("risk is" + overallRisk);
      
    //   document.getElementById('result').textContent = `Risk Level: ${data.result}`;
    });

  });

  