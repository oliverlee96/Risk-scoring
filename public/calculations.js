//The risk mapping objects for calculation of the risk using form input values
export const riskMapping = {
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

export const riskValues = {
    "Low": 1,
    "Medium": 2,
    "High": 3
};

//So we can convert the number back to a risk level that makes sense to a human on the frontend
const risk = {
    1: "low",
    2: "medium",
    3: "high"
}

//function to calculate the individual risks for each metadata attribute
export function calculateIndividualRisk(data) {
    //stores each risk level so we can then calculate the highest one
    let individualRisks = {};

    individualRisks.metadataRisk = riskMapping.metadataType[data.metadataType] || "Low";
    individualRisks.dataPrivacyRisk = riskMapping.dataPrivacyCategory[data.dataPrivacyCategory] || "Low";
    //TODO: Add the other 2 attribute calculations

    return individualRisks;
}

//function to calculate highest risk value of all the individual risks
//we classify metadata risk according to the highest value
export function calculateOverallRisk(individualRisks) {
    let maxRisk = 0;

    for (let risk in individualRisks) {
        maxRisk = Math.max(maxRisk, riskValues[individualRisks[risk]]);
    }
    const finalRisk = risk[maxRisk];
    return finalRisk;
}