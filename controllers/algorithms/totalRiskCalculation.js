const calculateOperationalRisk = require("./operationalRiskCalculation");
const calculateRegulatoryRisk = require("./regulatoryRiskCalculation");
const calculateTechnicalRisk = require("./technicalRiskCalculation");

module.import = calculateOperationalRisk, calculateRegulatoryRisk, calculateTechnicalRisk

const technical = calculateTechnicalRisk();
const organisational = calculateOperationalRisk();
const regulatory = calculateRegulatoryRisk();

//storing the risk levels
const risk = ["Lowest", "Low", "Medium", "High", "Highest"]

//takes the 3 values for different risk types and returns the highest value as a number between 1 and 5
function calculateTotalMetadataRisk(technical, organisational, regulatory) {
    let totalRisk = Math.max(technical, organisational, regulatory);
    return totalRisk;
}
//converts the risk calculation number to the string value
function convertTotalRisk(totalRisk) {
    console.log(risk[totalRisk-1]);
}

//example data, todo: pull this in from the functions that calculate the values
let technicalRisk = 2; 
let organisationalRisk = 4; 
let regulatoryRisk = 1; 

let totalRisk = calculateTotalMetadataRisk(technicalRisk, organisationalRisk, regulatoryRisk);
convertTotalRisk(totalRisk);

module.exports = calculateTotalMetadataRisk, convertTotalRisk;