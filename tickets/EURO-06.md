# EURO-06 — Update the page colour scheme

**Area:** Frontend — CSS  
**File to edit:** `public/style.css`  
**Difficulty:** Beginner

---

## Background

The timetable uses Eurostar's navy blue as its main colour. The design team want to
explore some alternatives and have asked us to try a few different colour schemes.

Your job is to update the colours and make the page look great.

---

## What to do

Open `public/style.css` and find the `// TODO: EURO-06` comments. There are two
colour values to change:

### 1. Page background colour

Find the `body` rule and change `background-color`.

```css
body {
  background-color: #f5f5f5; /* ← change this */
}
```

### 2. Header bar colour

Find the `.site-header` rule and change `background-color`.

```css
.site-header {
  background-color: #003087; /* ← change this */
}
```

### Choosing a colour

CSS colours can be written as a **hex code** — a `#` followed by 6 characters,
e.g. `#ff6600` for orange. Search "hex colour picker" in your browser to find a
colour you like and copy its hex code.

Some ideas to try:
- A dark colour for the header and a light colour for the background work well together.
- Make sure the white header text is still readable — very light header colours will
  make it hard to read.

---

## Acceptance criteria

- [ ] The page background is a different colour from the default `#f5f5f5`.
- [ ] The header bar is a different colour from the default `#003087`.
- [ ] White text in the header is still clearly readable against the new header colour.
- [ ] The overall page looks intentional, not accidental.
