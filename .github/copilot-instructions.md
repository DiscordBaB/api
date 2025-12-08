## Overview

This repo is a small Express-based API for the Discord Ban A Bot project. Key facts an AI coding agent should know up front:

- **Entry points**: `app.js` (exports Express app) and `server.js` (starts the server on port 3000).
- **Routing**: All HTTP routes live in `routes/*.js` and are mounted in `app.js`:
  - `/appeals` -> `routes/appealsRoutes.js`
  - `/bans` -> `routes/bansRoutes.js`
  - `/cache` -> `routes/cacheRoutes.js`
  - `/acl` -> `routes/ACLRoutes.js`
  - `/bc` -> `routes/bansCountRoutes.js`
- **Controller pattern**: `controllers/*` contains handlers that call Sequelize models in `models/*`. Example: `controllers/BansController.js` uses `models/BansModel.js`.
- **DB layer**: `databases/db.js` initializes Sequelize using an absolute config JSON at `/home/ken/.dbab-config/dbab.json`. The project uses the MySQL dialect (and `sqlite3` is also present in dependencies).
- **ES modules**: `package.json` sets `"type": "module"`. Use `import`/`export` syntax when editing files.

## Important project conventions

- Middleware populates request-scoped IDs: many controller functions read `req.server_id`, `req.user_id`, and `req.appeal_id`. Inspect `middlewares/auth.js` before changing request parameter handling.
- The app only accepts JSON bodies (`app.use(json())`). Keep request/response shapes JSON-based.
- Sequelize usage is the canonical data access pattern; controllers commonly call `Model.findAll`, `Model.findByPk`, `Model.create`, etc. Note: several controller implementations pass callback-style handlers into Sequelize methods (legacy/incorrect usage). When modifying data-access code, favor the Promise/async `await` pattern used elsewhere and ensure responses are sent consistently.
- Some models are TypeScript files (e.g., `models/userCacheModel.ts`) in an otherwise JS codebase. Do not assume full TypeScript build steps are present — tests and build scripts are not present in `package.json`.

## Developer workflows & run commands

- Install dependencies: `npm install`
- Start server for development: `node server.js` (this calls `app.js`). There is no `npm start` script by default.
- There are no unit tests configured. Use manual runtime checks and `curl`/Postman to exercise endpoints.

## Integration & environment notes

- Database config is read from a fixed path: `/home/ken/.dbab-config/dbab.json`. That file is required for Sequelize initialization. If you cannot use that path in CI or on another machine, adapt `databases/db.js` to load from `process.env` or a relative config file.
- This API is consumed by the bot and the frontend in the workspace. Keep public API routes stable where possible; changes will affect `dbab-bot` and `DBAB-APP`.

## How to add a new route (example)

1. Create `routes/myRoute.js` exporting an Express `Router()` and route handlers.
2. Add a controller in `controllers/myController.js` that exports async functions.
3. Create or reuse a Sequelize model in `models/`.
4. Import and mount the router in `app.js` (follow current pattern).

Example (conceptual):

```js
// app.js
import MyRouter from './routes/myRoute.js'
app.use('/my', MyRouter)
```

## Editing guidance for AI agents

- Preserve ESM `import`/`export` style; do not convert files back to CommonJS.
- Before changing request properties (`req.server_id`, etc.), search `middlewares/` to find the middleware that sets them and update it in lockstep.
- When touching `databases/db.js`, respect the existing use of Sequelize and the absolute config path; document and/or add a fallback using environment variables if necessary.
- Fix Sequelize callback anti-patterns by using `try/catch` with `await` and ensure each controller sends a response for both success and error cases.
- Keep changes minimal and localized: the app is small and lacks automated tests; prefer safe, incremental edits.

## Key files to inspect when making changes

- `app.js` — route mounts, global middleware
- `server.js` — process start
- `config/config.js` — currently reads `/home/ken/.dbab-config/dbab.json`
- `databases/db.js` — Sequelize initialization
- `middlewares/*.js` — auth and logging behavior
- `routes/*.js` and `controllers/*.js` — primary HTTP surface
- `models/*` — Sequelize models (JS + occasional TS)

If any of the above sections are unclear or you want more examples (route, controller, or model snippets), tell me which area to expand and I'll iterate.
