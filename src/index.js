const express = require('express');
const endPoints = require('./endpoints');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(endPoints);
app.listen(port);