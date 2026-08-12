# Gap Utilities Showcase

This submission implements a visual demonstration of Grid and Flexbox gap utility sizes ranging from `4px` to `40px` with live dynamic controls.

---

## Technical Details

CSS Flexbox and Grid gap properties allow consistent alignment across horizontal and vertical axes without utilizing margins. 

The gap layouts are declared using:
- Grid: `display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap-size)`
- Flexbox: `display: flex; flex-wrap: wrap; gap: var(--gap-size)`

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click through the selector buttons (Gap-1 to Gap-10) — verify spacing between boxes and tags transitions cleanly.
3. Observe how flex wrap coordinates layout boundaries seamlessly when spacing changes.
