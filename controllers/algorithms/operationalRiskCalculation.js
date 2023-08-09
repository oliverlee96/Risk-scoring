const operationalRiskClassifications = [
    "Lowest", "Low", "Medium", "High", "Highest"
]

function calculateOperationalRisk(operationalRisk) {
    return operationalRiskClassifications.indexOf(operationalRisk);
}

console.log(calculateOperationalRisk("Low"));

module.exports = calculateOperationalRisk;