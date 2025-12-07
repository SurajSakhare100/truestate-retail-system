```markdown
# Architecture Overview

## Backend
- **Node.js + Express** with MVC pattern  
- **Routes:** /api/sales  
- **Controller:** Parses URL params  
- **Service:** Builds MongoDB aggregation pipeline  
- **DB:** MongoDB via Mongoose (`Sale` schema)

### Aggregation Pipeline
- `$match` → search + filters  
- `$sort` → dynamic sorting  
- `$skip` + `$limit` → pagination  
- `$facet` → { paginatedResults, totalStats, totalCount }

---

## Frontend
- **Next.js (App Router)** + TypeScript  
- State synced with URL (`router.replace`)  
- API calls through Axios wrapper  
- Components:
  - Dashboard
  - Header (search)
  - FilterBar + FilterDropdowns
  - SummaryCards (stats)
  - SalesTable
  - Pagination

---

## Data Flow

```
User → UI State → URL Params → API Request → MongoDB Aggregation
→ Response → Table + Summary Update
```

---

## Folder Structure

```
backend/
  controllers/
  models/
  routes/
  services/
  server.js

frontend/
  app/
  components/
  services/api.ts

docs/
  architecture.md
```

---

## Module Responsibilities
- **server.js** → server + DB connection  
- **salesRoutes** → routes  
- **salesController** → request handling  
- **salesService** → DB logic  
- **Sale.js** → schema  
- **Dashboard.tsx** → main logic (URL ↔ UI ↔ API)
```