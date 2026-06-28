# EURO-02 — Calculate journey duration

**Area:** Backend  
**File to edit:** `src/index.ts`  
**Difficulty:** Intermediate

---

## Background

The timetable has a **Duration** column, but it currently shows `N/A` for every train.
There is already a function called `calculateDuration` in the server code — it just
needs you to fill in the missing logic.

---

## What to do

Find the `calculateDuration` function in `src/index.ts` (look for `// TODO: EURO-02`).

The function receives two strings — a departure time like `"06:31"` and an arrival
time like `"09:47"` — and should return how long the journey takes, e.g. `"3h 16m"`.

All the steps are written out as comments inside the function. You need to uncomment
each line and fill in the `???` parts.

### Useful JavaScript facts

| Expression | Result | What it does |
|---|---|---|
| `"06:31".split(':')` | `["06", "31"]` | Splits a string on a character |
| `Number("06")` | `6` | Converts a string to a number |
| `Math.floor(3.75)` | `3` | Rounds a number down |
| `195 % 60` | `15` | Remainder after dividing (195 minutes = 3h **15**m) |
| `` `${h}h ${m}m` `` | `"3h 15m"` | Builds a string with values inside |

### Steps to work out duration

1. `departureTotal` and `arrivalTotal` are already calculated (minutes since midnight).
2. Subtract one from the other to get `differenceInMinutes`.
3. Divide by 60 and round down to get whole `hours`.
4. Use `% 60` to get the leftover `mins`.
5. Return a string like `"3h 16m"`.

---

## Acceptance criteria

- [ ] The Duration column shows a value like `"3h 16m"` instead of `"N/A"` for every train.
- [ ] The durations are correct (you can verify a couple manually).
- [ ] The server still starts without errors.
