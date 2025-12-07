# TruEstate Retail Analytics Dashboard

## Overview
A full-stack dashboard to analyze 10M+ retail transactions with fast search, filtering, sorting, and server-side pagination. Built for performance and smooth user experience.

## Tech Stack
**Frontend:** Next.js, TypeScript, TailwindCSS  
**Backend:** Node.js, Express.js, MongoDB (Mongoose)

---

## Search
- Keyword search on **customerName** and **phoneNumber**
- Case-insensitive regex matching
- URL-synced `?search=` param
- Optimized using indexed fields

## Filters
Supports:
- Region, Gender, Category, Tags, Payment Method  
- Age Range, Date Range  

Implementation:
- Multi-select filters via `$in`
- Range filters via `$gte / $lte`
- URL-driven filter state (`getAll()`, `append()`)

## Sorting
- Sort by **Date**, **Quantity**, **Customer Name**
- Direction: `asc` or `desc`
- Implemented using dynamic `{$sort: { field: order }}`

## Pagination
- Backend-driven pagination using `skip + limit`
- `$facet` returns:
  - Paginated results
  - Summary stats
  - Total record count
- URL-synced (`?page=`)

---
```markdown
# Setup Guide

## Backend Setup

1. Create `backend/.env`:

```env
PORT=5000
MONGO_URI=<your_mongo_uri>
```

2. Run backend:

```bash
npm run dev:backend
```

3. Backend will run at:

```
http://localhost:5000
```

## Frontend Setup

1. Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

2. Run frontend:

```bash
npm run dev:frontend
```

3. Access UI at:

```
http://localhost:3000
```

## Workspace Scripts

From root directory:

```json
{
  "dev:backend": "npm --workspace backend run dev",
  "dev:frontend": "npm --workspace frontend start",
  "build:frontend": "npm --workspace frontend run build",
  "start:backend": "npm --workspace backend start"
}
```