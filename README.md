# Frontend Build Spec — AI-Powered E-Governance & Public Service Optimization

> **How to use this file:** Paste this entire document into an AI code generator along with the instruction: *"Read this README.md to understand the project constraints, then generate the code for [specific file/feature]."* Generate one file at a time (e.g., `mockData.js` first, then `index.html`, then `citizen.js`, etc.) for best results.

---

## 1. Project Context (Why this exists)

This platform automates municipal grievance routing. Citizens currently have to guess which department their complaint belongs to, which causes a **42% misallocation rate** in manual routing. An NLP engine (backend, not part of this task) reads a citizen's free-text complaint, categorizes it, assigns urgency, and routes it to the correct department dashboard — no dropdowns, no manual dispatch decisions.

Two accountability problems this UI must visibly address:
- **Silent false-resolution:** officials sometimes mark tickets "Resolved" with no real-world fix. Real operational data (PCMC Smart Sarathi) showed **2% of citizens explicitly reported closures without action**. This is why the "Accountability Loop" feedback prompt is a first-class UI feature, not an afterthought.
- **No proactive updates:** citizens historically have to keep re-checking a token number. The Track Status timeline exists to make progress visible without extra digging.

Longer-term platform features that exist in the full product vision but are **out of scope for this frontend task** (do not build them now, but don't design in a way that blocks adding them later):
- Voice-to-text complaint submission
- WhatsApp virtual assistant / chatbot intake
- Bhashini API regional-language translation
- Real backend, NLP engine, or database

**Current task = UI only, using mock data, wired for an easy backend swap later.**

---

## 2. Current Development Phase

We are **strictly** building the **Frontend UI**. Backend API and database are being built in parallel by someone else. Every component must:
- Use predefined mock JS data arrays (never call a real API).
- Wrap all data access in generic function wrappers so `mockData.js` can later be swapped for real `fetch()` calls against a JWT-authenticated backend without touching UI code.

---

## 3. Tech Stack Requirements

| Layer | Choice | Notes |
|---|---|---|
| HTML | Pure HTML5, multiple pages | `index.html` (citizens), `admin.html` (nodal officers) |
| CSS | Tailwind CSS via CDN | `<script src="https://cdn.tailwindcss.com"></script>` |
| JS | Vanilla JS (ES6+) | No React / Vue / Angular |
| Charts | Chart.js via CDN | Used only on the admin dashboard |
| Icons | Inline SVG (Heroicons-style) | No icon font dependency |

---

## 4. File Architecture

```
/frontend
│── index.html          # Citizen Portal (Lodge & Track tabs)
│── admin.html           # Admin Dashboard (Analytics & Data Table)
│── /js
│   ├── mockData.js      # Hardcoded JSON arrays for UI development
│   ├── citizen.js       # Form handling, UI state, tracking logic
│   └── admin.js         # Chart.js rendering, table population, filters
```

Generate strictly within this structure — no extra pages or folders unless a feature below explicitly needs one.

---

## 5. Design Reference

A Stitch (Google AI UI design tool) reference build exists for this project.
**➡️ Before generating final visual styling, export or screenshot the Stitch reference and share it with the AI agent** so colors, spacing, and component shapes match. Until that's provided, generate with a clean, official/government-appropriate Tailwind palette (blues/greens, high contrast, generous whitespace) as a placeholder, and treat visual polish as easy to restyle later — keep class names and structure simple so a design pass doesn't require restructuring markup.

---

## 6. UI/UX Requirements by Page

### A. Citizen Portal (`index.html`)
Input layer for citizens. Mobile-first, clean, tabbed interface: **Tab 1 – Lodge Complaint**, **Tab 2 – Track Status**.

**Lodge Complaint tab**
- Simulate a JWT session: pre-fill Name, Email, Phone as **disabled** input fields from mock session data.
- Editable fields: Location/Ward (text), Grievance Description (textarea).
- **Critical UI state:** on Submit, the button must enter a loading state — spinner + label **"AI Analyzing & Routing…"** — and be disabled to prevent double submission. (This isn't cosmetic: it's standing in for real NLP processing time.)

**Track Status tab**
- Input field for Ticket ID.
- Vertical timeline: `Submitted → AI Routed → In Progress → Resolved`.
- **Accountability Loop:** if status is `Resolved`, show a feedback prompt asking whether the work was actually completed (Yes/No). This is the UI's answer to the false-resolution problem described above — don't skip it or treat it as optional polish.

### B. Admin Dashboard (`admin.html`)
Output layer for Nodal Officers. Desktop-optimized, data-heavy, analytical layout.

**Analytics section**
- Summary cards: Total Active, Unassigned, Resolved.
- Chart 1: Bar chart — Complaints per Department.
- Chart 2: Doughnut chart — Status distribution.

**Data table section**
- Tabular view of complaints.
- Filters: dropdown for Status, dropdown for Department.
- **Important constraint:** filter `<option>` values must match backend DBMS primary keys exactly, e.g. `<option value="dept_water">Water Supply</option>` — never use display names as values.
- Client-side pagination: 10 rows per page, driven off the mock data array (must keep working once mock data is swapped for a real fetched array).

---

## 7. Mock Data Contract

Use this schema exactly — the backend team is building against it, so field names and value sets must not drift.

```javascript
// js/mockData.js
const MOCK_COMPLAINTS = [
  {
    ticketId: "GRV-2026-1042",
    citizenName: "Aarav Sharma",
    phone: "+91 98765 43210",
    location: "Sector 4, Pimpri",
    description: "Severe pipeline burst near main road.",
    departmentId: "dept_water",
    departmentName: "Water Supply",
    urgency: "High", // "High" | "Medium" | "Low"
    status: "In Progress", // "Submitted" | "In Progress" | "Resolved"
    submittedAt: "2026-08-22T10:30:00Z"
  }
];

const MOCK_DEPARTMENTS = [
  { id: "dept_water", name: "Water Supply" },
  { id: "dept_roads", name: "Roads & Infrastructure" },
  { id: "dept_health", name: "Public Health" }
];
```

Generate at least 15–20 rows of `MOCK_COMPLAINTS` with varied statuses, urgencies, and departments so pagination, filters, and both charts have realistic data to render against — a single-row mock array won't exercise any of the UI states above.

---

## 8. Strict AI Generation Rules

1. **No backend code.** No Node.js, Express, or database queries. 100% DOM, CSS, and browser-side JS.
2. **Modular functions.** Wrap UI updates in clean, named functions (`renderTable(data)`, `updateChart()`, `renderTimeline(ticket)`, etc.) so `mockData` calls can later be swapped for `fetch()` calls without touching rendering logic.
3. **Tailwind best practices.** Accessible contrast, standard readable text sizes, fully responsive (mobile-first on citizen portal, desktop-first on admin dashboard).
4. **Terminology consistency.** Always use `departmentId`/`departmentName`, `status`, `urgency` exactly as defined in the mock data contract — do not invent alternate field names in different files.

---

## 9. Suggested Build Order

1. `js/mockData.js` — data first, everything else renders against it.
2. `index.html` + `js/citizen.js` — Lodge + Track tabs.
3. `admin.html` + `js/admin.js` — charts, table, filters, pagination.
4. Pass a Stitch screenshot/export back through for a visual polish pass.
