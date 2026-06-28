# EURO-04 — Filter trains by status

**Area:** Backend  
**File to edit:** `src/index.ts`  
**Difficulty:** Intermediate

---

## Background

The timetable already lets passengers filter by destination. We want to add a second
filter so they can also filter by status — for example, to see only delayed trains.

---

## What to do

There are two parts to this ticket: the backend and the frontend.

### Part 1 — Backend (`src/index.ts`)

Find the `// TODO: EURO-04` comment inside the `app.get('/api/trains', ...)` route.

Add code to read `req.query.status` and, if it is set, filter the `result` array to
only include trains where `train.status` matches.

Look at how destination filtering works just above — your status filter should follow
exactly the same pattern.

### Part 2 — Frontend (`public/index.html` and `public/app.js`)

Once the backend filter works, expose it in the UI:

1. **`index.html`** — add a second `<select>` dropdown next to the destination one,
   with options for each status value (`On Time`, `Delayed`, `Cancelled`) plus an
   "All statuses" default option.

2. **`app.js`** — update the `loadTrains` function to also read the new dropdown's
   value and append it to the URL, e.g. `/api/trains?status=Delayed`.

> **Tip:** if both filters are active at the same time the URL might look like
> `/api/trains?destination=Paris&status=On+Time`. The `&` joins two query parameters.

---

## Acceptance criteria

- [ ] Selecting "Delayed" from the status dropdown shows only delayed trains.
- [ ] Selecting "Cancelled" shows only cancelled trains.
- [ ] Both filters can be used at the same time (e.g. delayed Brussels trains only).
- [ ] Selecting "All statuses" removes the status filter and shows everything.
