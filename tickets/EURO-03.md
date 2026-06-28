# EURO-03 — Sort trains by departure time

**Area:** Backend  
**File to edit:** `src/index.ts`  
**Difficulty:** Intermediate

---

## Background

The trains in our dataset are not in chronological order — the first train listed is
not the first departure of the day. Passengers expect to see the earliest trains at
the top of the board.

---

## What to do

Find the commented-out `.sort()` block in `src/index.ts` (look for `// TODO: EURO-03`).

Uncomment it and fill in the two missing return values so that trains are ordered
from earliest to latest departure.

### How `.sort()` works

`.sort()` takes a function that compares two items — called `a` and `b`.
The function must return:
- a **negative number** if `a` should come first
- a **positive number** if `b` should come first
- `0` if they are equal

```ts
result.sort((a, b) => {
  if (a.departure < b.departure) return ???; // a is earlier, so a comes first
  if (a.departure > b.departure) return ???; // b is earlier, so b comes first
  return 0;
});
```

### Hint

Departure times are stored as strings in `"HH:MM"` format with leading zeros
(e.g. `"06:31"`, `"14:28"`). Because of the leading zeros, comparing them
as strings works just like comparing numbers — `"06:31"` is less than `"14:28"`.

---

## Acceptance criteria

- [ ] When the page loads, trains are displayed in ascending departure time order.
- [ ] The earliest train appears at the top of the table.
- [ ] Filtering by destination still works and results remain sorted.
