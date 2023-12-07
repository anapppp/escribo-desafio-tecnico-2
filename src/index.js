const express = require('express')
const cors = require('cors')
const endPoints = require('./endpoints')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(endPoints)
app.listen(port)