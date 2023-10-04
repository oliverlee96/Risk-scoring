const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');
const { calculateIndividualRisk, calculateOverallRisk } = require('./public/calculations');

//Parses the JSON requests
app.use(bodyParser.json());

//Serves the static files from the public folder
app.use(express.static('public'));

app.post('/calculate', (req,res) => {
    const data = req.body;

    const individualRisks = calculateIndividualRisk(data);
    const overallRisk = calculateOverallRisk(individualRisks);

    console.log(overallRisk);
    res.json({ overallRisk });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});