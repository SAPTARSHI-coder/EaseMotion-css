# Expanding Search Bar

## What it does

This component provides an animated expanding search bar UI with compact icon state, smooth hover and focus expansion, and multiple theme variants. It is designed for modern SaaS dashboards with glassmorphism-inspired styling and responsive layout.

## How to use it

1. Open `demo.html` directly in a browser.
2. Ensure `style.css` is in the same folder.
3. Use the `search-card` and `search-control` markup to add an expanding search bar.

Example:

```html
<link rel="stylesheet" href="style.css">
<div class="search-card search-dark">
  <label class="search-control" for="search-dark">
    <span class="search-icon">🔎</span>
    <input id="search-dark" type="search" placeholder="Search analytics, widgets, data..." aria-label="Search in dark theme">
  </label>
</div>
```

## Why it fits EaseMotion CSS

This submission is pure HTML and CSS, with no JavaScript or external libraries. It delivers a self-contained, responsive search input component with polished motion, accessible focus states, and a modern SaaS dashboard aesthetic, aligning with EaseMotion CSS principles for reusable component patterns.
