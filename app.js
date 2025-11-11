const express = require('express')
const morgan = require('morgan')
const  AuthHeaderCheck = require('./middlewares/appeal')
const fs = require('node:fs');
const path = require('node:path');
// app initialization
const app = express();
// use only json
app.use(express.json());
// middlewares
app.use(morgan) // logging first
app.use(AuthHeaderCheck)

let routes = require('./routes/appealsRoutes')
//app.use('/appeal')

module.exports = app