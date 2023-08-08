
//search metadata type object for the metadata type risk value. Move this to data. 

//the number values equate to risk level, so 1 is low, 2 is medium, 3 is high. This helps you do comparative calculation for the highest risk metadata type.
let metadataRiskValues = {
    field: 2,
    apex_class: 3,
    flow: 3,
    report: 1
};

function calculateTechnicalRisk(metadataRiskValue,numberOfDependencies) { //takes 2 integers as values
    //error handling

    if (!metadataRiskValue || !numberOfDependencies) {
        console.log("Cannot calculate technical risk for this metadata, values could not be found.");
    };

    let risk = Math.max(metadataRiskValue,numberOfDependencies);

    if (risk == 1) {
        console.log("Technical risk is low")
    }
    if (risk == 2) {
        console.log("Technical risk is medium")
    }
    if (risk == 3) {
        console.log("Technical risk is high")
    }
}

module.exports = calculateTechnicalRisk;