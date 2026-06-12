# Issue #5717: forms.css missing from easemotion/all.css

## Description
`easemotion/all.css` is the modular bundle that imports all components, but it omits `@import "../components/forms.css"`. All other components (buttons, cards, navbar, masonry, chip, footer, sidebar, scroll-progress, tabs, badges, loaders, tooltips, modals) are imported.

## Root Cause
When `all.css` was created, the `forms.css` import was simply missed. `easemotion.css` (the main entry point) correctly imports forms at line 44.

## Proposed Fix
In `easemotion/all.css`, add:
```css
@import "../components/forms.css";
```

## Files
- `style.css` — the missing import line
- `demo.html` — shows a basic form using ease-input classes
