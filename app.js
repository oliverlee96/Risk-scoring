const http = require('http');

const express = require('express');

const app = express();

const calculateTechnicalRisk = require('./Algorithms/technicalRiskCalculation');

console.log(calculateTechnicalRisk(3,2));

app.get('/', (req, res) => res.send('Hello'));
app.listen(3000, () => console.log('Server running on port 3000'));