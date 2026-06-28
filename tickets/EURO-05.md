# EURO-05 — Replace the logo placeholder

**Area:** Frontend — HTML  
**Files to edit:** `public/index.html`, `public/style.css`  
**Difficulty:** Beginner

---

## Background

The header currently shows a text placeholder (`★ eurostar`) instead of the real
Eurostar logo. We want to replace it with an actual image.

---

## What to do

### Step 1 — Find a logo image URL

Ask a developer to point you to a static image URL for the Eurostar logo, or check
whether there is one in the project's assets.

A URL for an image usually ends in `.png`, `.jpg`, or `.svg`.

### Step 2 — Add the image to the HTML

Open `public/index.html` and find the `// TODO: EURO-05` comment.

You will see a commented-out `<img>` tag. To use it:
1. Replace `PASTE_URL_HERE` with the URL from Step 1.
2. Remove the `<!--` and `-->` around the `<img>` line to uncomment it.
3. Delete the `<span class="logo">★ eurostar</span>` line above it.

An `<img>` tag looks like this:

```html
<img class="logo" src="https://example.com/logo.png" alt="Eurostar logo" />
```

- `src` is where the image comes from.
- `alt` is a text description shown if the image fails to load.

### Step 3 — Adjust the size in CSS

Open `public/style.css` and find the `.logo` rule.

Change the `height` value to make the logo bigger or smaller until it looks right
in the header. You can delete the font-related lines (`font-size`, `font-weight`,
`letter-spacing`, `color`, `white-space`) once you have a real image.

---

## Acceptance criteria

- [ ] The real Eurostar logo appears in the header instead of the `★ eurostar` text.
- [ ] The logo is a reasonable size — not too large, not too small.
- [ ] If the image fails to load, the `alt` text is descriptive.
