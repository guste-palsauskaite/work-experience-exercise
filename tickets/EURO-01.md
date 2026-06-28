# EURO-01 — Add a new train to the timetable

**Area:** Backend  
**File to edit:** `src/index.ts`  
**Difficulty:** Beginner

---

## Background

The timetable currently shows 8 trains. We need to add more departures so that
passengers have a fuller picture of the day's schedule.

---

## What to do

Add at least one new train to the `trains` array in `src/index.ts`.

Look for the comment `// TODO: EURO-01` — that is where your new train should go.

A train object looks like this:

```ts
{
  id: 9,
  departure: '18:01',
  arrival: '21:17',
  destination: 'Paris',
  platform: 2,
  status: 'On Time',
},
```

You can choose any departure and arrival time, destination, platform, and status.
Valid destinations are `'Paris'`, `'Brussels'`, and `'Amsterdam'`.
Valid statuses are `'On Time'`, `'Delayed'`, and `'Cancelled'`.

> **Remember:** each object in the array must be separated by a comma.
> Check the object above yours has a comma at the end.

---

## Acceptance criteria

- [ ] At least one new train appears in the timetable when the page loads.
- [ ] The new train has all five fields: `id`, `departure`, `arrival`, `destination`, `platform`, `status`.
- [ ] The server still starts without errors after your change (`npm run dev`).
