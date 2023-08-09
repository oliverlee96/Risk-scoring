const express = require('express');
const app = express();

const calculateTechnicalRisk = require('./algorithms/technicalRiskCalculation');
const calculateRegulatoryRisk = require('./algorithms/regulatoryRiskCalculation');

app.get('/', (req, res) => res.send(`Let's do some calculations!`));
app.listen(3000, () => console.log('Server running on port 3000'));