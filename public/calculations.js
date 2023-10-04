//The risk mapping objects for calculation of the risk using form input values
const riskMapping = {
    metadataType: {
        "ApexClass": "High",
        "ApexTrigger":"High",
        "Application":"Medium",
        "AssignmentRule": "High",
        "CustomLabel": "Low",
        "CustomMetadata": "Medium",
        "CustomObject": "Medium",
        "CustomTab": "Low",
        "Dashboard": "Low",
        "EmailTemplate": "Low",
        "Field": "Medium",
        "Flow": "High",
        "PageLayout": "Low",
        "PermissionSet": "High",
        "Profile": "High",
        "ProcessBuilder": "High",
        "Queue": "Medium",
        "Report": "Low",
        "SharingRule": "High",
        "ValidationRule": "Medium",
        "Workflow": "High"
      },

    dataPrivacyCategory: {
        "General": "Low",
        "Confidential": "Medium",
        "Restricted": "High",
        "Mission Critical": "High"
    }
};

const riskValues = {
    "Low": 1,
    "Medium": 2,
    "High": 3
};

const risk = {
    1: "Low",
    2: "Medium",
    3: "High"
}

module.exports.calculateIndividualRisk = function(data) {
    let individualRisks = {};

    individualRisks.metadataRisk = riskMapping.metadataType[data.metadataType] || "low";
    individualRisks.dataPrivacyRisk = riskMapping.dataPrivacyCategory[data.dataPrivacyCategory] || "low";

    return individualRisks;
}

module.exports.calculateOverallRisk = function(individualRisks) {
    let maxRisk = 0;

    for (let risk in individualRisks) {
        maxRisk = Math.max(maxRisk, riskValues[individualRisks[risk]]);
    }
    const finalRisk = risk[maxRisk];
    return finalRisk;
}
