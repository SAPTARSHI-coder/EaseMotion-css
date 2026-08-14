# Color Mode Toggle example

A three-way light/dark/system colour mode switch. **'System' clears the stored override entirely** (`removeAttribute` + `localStorage.removeItem`) rather than resolving and storing a fixed value, so `prefers-color-scheme` keeps tracking OS changes live afterward.

## What it does
- Light/Dark set `data-color-mode` on `<html>` and persist it in `localStorage`.
- System removes the override so the OS preference governs live.

## Files
- `demo.html` — copy-paste markup
- `style.css` — styles + `prefers-color-scheme: light` support
- `toggle.js` — small enhancement script (progressive; degrades gracefully without JS)
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="color-mode-toggle-advk" role="group" aria-label="Color mode">
  <button type="button" class="color-mode-toggle-advk__btn" data-mode="light" aria-pressed="false">Light</button>
  <button type="button" class="color-mode-toggle-advk__btn" data-mode="dark" aria-pressed="false">Dark</button>
  <button type="button" class="color-mode-toggle-advk__btn" data-mode="system" aria-pressed="true">System</button>
</div>
<script src="./toggle.js" defer></script>
```

## Accessibility
- `role="group"` + `aria-label` on the container.
- `aria-pressed` on each button reflecting the active mode.
- `:focus-visible` outlines for keyboard users.

## No-JS degradation
Without `toggle.js`, the toggle is inert but the page still renders using `prefers-color-scheme`.

Closes #75549
