

const form = document.querySelector('form');
const metadataTypeInput = document.getElementById('metadata-type');
const dataPrivacyInput = document.getElementById('data-privacy');
const dependenciesInput = document.getElementById('dependencies');
const documentationInput = document.getElementById('documentation');

form.addEventListener('submit',(event)=> {
    event.preventDefault();

    const metadataType = metadataTypeInput.value;
    const dataPrivacy = dataPrivacyInput.value;
    const dependencies = dependenciesInput.value;
    const documentation = documentInput.value;
    
})

calculateTechnicalRisk(1,2);