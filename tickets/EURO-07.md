# EURO-07 — Style the train status badges

**Area:** Frontend — CSS  
**File to edit:** `public/style.css`  
**Difficulty:** Beginner–Intermediate

---

## Background

Each train row shows a coloured badge for its status: green for On Time, orange for
Delayed, and red for Cancelled. The design team want these badges to be more
distinctive, and also want cancelled rows to stand out more clearly in the table.

---

## What to do

Open `public/style.css` and find the status badge rules (look for `// TODO: EURO-07`).

### Part 1 — Restyle the "Delayed" badge

Find `.status-delayed` and change the colours so a delayed train is more noticeable.
You can change both `background-color` (the badge background) and `color` (the text).

```css
.status-delayed {
  background-color: #fff3cd; /* ← try something different */
  color: #856404;            /* ← and this */
}
```

### Part 2 — Make cancelled rows stand out

Find the `.row-cancelled` rule. It is currently empty. Add at least one style that
makes the whole row of a cancelled train look visually distinct.

Some ideas:
- `opacity: 0.5;` — makes the row look faded
- `text-decoration: line-through;` — draws a line through the text
- `background-color: #fdecea;` — gives the row a red tint

You can combine more than one.

### CSS colour reminder

`background-color` sets the fill colour of an element.  
`color` sets the text colour.  
Both accept hex codes (e.g. `#ff0000`) or colour names (e.g. `red`).

---

## Acceptance criteria

- [ ] The "Delayed" badge looks noticeably different from the default orange.
- [ ] Cancelled train rows are visually distinct from on-time rows without being unreadable.
- [ ] "On Time" and "Cancelled" badge colours are unchanged.
