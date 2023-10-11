import express from 'express';
import bodyParser from 'body-parser';
import { calculateIndividualRisk, calculateOverallRisk } from './public/calculations.js';

const app = express();
const port = 3000;

//Parses the JSON requests
app.use(bodyParser.json());

//Serves the static files from the public folder
app.use(express.static('public'));

app.post('/calculate', (req,res) => {
    const data = req.body;

    const individualRisks = calculateIndividualRisk(data);
    const overallRisk = calculateOverallRisk(individualRisks);

    console.log(overallRisk);
    res.json({ overallRisk, metadataType: data.metadataType });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});