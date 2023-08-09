const dataClassifications = [
    "Public",
    "Internal",
    "Confidential",
    "Restricted",
    "Mission Critical"]

// takes in data privacy value as a string. 

function calculateRegulatoryRisk(dataClassification) {
    if (!dataClassification) {
        return null;
    }
    return dataClassifications.indexOf(dataClassification);
}

module.exports = calculateRegulatoryRisk;