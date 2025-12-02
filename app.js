const express = require('express')
const morgan = require('morgan')
const  AuthHeaderCheck = require( './middlewares/auth')
const fs = require('node:fs');
const path = require('node:path');
// app initialization
const app = express();
// use only JSON
app.use(express.json());
// middlewares
app.use(morgan) // logging first
app.use(AuthHeaderCheck)

let AppealsRouter = require('./routes/appealsRoutes')
let BansRouter = require('./routes/bansRoutes')
let CacheRouter = require('./routes/cacheRoutes')
let ACLRouter = require('./routes/ACLRoutes')
let BansCountRouter = require('./routes/bansCountRoutes')


app.use('/appeals', AppealsRouter)
app.use('/bans', BansRouter)
app.use('/cache', CacheRouter)
app.use('/acl', ACLRouter)
app.use('/bc', BansCountRouter)

module.exports = app