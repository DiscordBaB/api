import express, { json } from 'express';
import logger from './middlewares/morgan.cjs';
import AuthHeaderCheck from './middlewares/auth.js';
import fs from 'node:fs';
import path from 'node:path';
// app initialization
const app = express();
// use only JSON
app.use(json());
// middlewares
app.use(logger())
app.use(AuthHeaderCheck)

import AppealsRouter from './routes/appealsRoutes.js';
import BansRouter from './routes/bansRoutes.js';
import CacheRouter from './routes/cacheRoutes.js';
import ACLRouter from './routes/ACLRoutes.js';
import BansCountRouter from './routes/bansCountRoutes.js';


app.use('/appeals', AppealsRouter)
app.use('/bans', BansRouter)
app.use('/cache', CacheRouter)
app.use('/acl', ACLRouter)
app.use('/bc', BansCountRouter)

export default app