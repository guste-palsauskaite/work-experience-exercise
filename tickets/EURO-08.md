# EURO-08 — Show a departure summary

**Area:** Frontend — JavaScript  
**Files to edit:** `public/index.html`, `public/app.js`  
**Difficulty:** Intermediate

---

## Background

Passengers glancing at the board want a quick overview before scanning the full
timetable. We want to add a summary line above the table that shows how many trains
are on time, delayed, or cancelled.

For example:

> **8 trains** — 5 on time · 2 delayed · 1 cancelled

---

## What to do

### Part 1 — Add a placeholder to the HTML

Open `public/index.html` and add the following line between the filter bar and the
table (look for the `<!-- TODO: EURO-08 -->` comment):

```html
<p id="summary"></p>
```

This creates an empty paragraph. Your JavaScript will fill it in.

### Part 2 — Count the trains with a for loop

Open `public/app.js` and find the `// TODO: EURO-08` comment inside `loadTrains`.

Add a **for loop** that goes through every train and counts how many fall into each
status. Then write the result into the `summary` element.

Here is the skeleton — fill in the `???` parts:

```js
let onTime    = 0;
let delayed   = 0;
let cancelled = 0;

for (let i = 0; i < trains.length; i++) {
  const train = trains[i];

  if (train.status === 'On Time') {
    onTime = ???;       // increase onTime by 1
  } else if (???) {
    delayed = delayed + 1;
  } else if (???) {
    cancelled = cancelled + 1;
  }
}

const summary = document.getElementById('summary');
summary.textContent = `${trains.length} trains — ${onTime} on time · ${delayed} delayed · ${cancelled} cancelled`;
```

### How a for loop works

```js
for (let i = 0; i < trains.length; i++) {
  // this block runs once for every train
  // i starts at 0 and increases by 1 each time
  // trains[i] gives you the train at position i
}
```

- `let i = 0` — start counting from zero
- `i < trains.length` — keep going while there are more trains
- `i++` — move to the next train (short for `i = i + 1`)

---

## Acceptance criteria

- [ ] A summary line appears above the timetable when the page loads.
- [ ] The counts are correct (check a few manually against the table).
- [ ] When a destination filter is applied, the summary updates to reflect the
      filtered results — not the total number of trains.
