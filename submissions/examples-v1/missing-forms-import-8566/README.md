# Missing forms.css Import — Issue #8566

`easemotion/all.css` (modular bundle) omits the `forms.css` import that exists in the main `easemotion.css` entry point.

## The Bug

**`easemotion.css` line 44** (has it):
```css
@import "./components/forms.css";
```

**`easemotion/all.css`** (missing):
```css
/* No import for forms.css */
```

Users loading the framework via `easemotion/all.css` get all components (buttons, cards, navbar, chip, footer, sidebar, tabs, badges, loaders, tooltips, modals) but no form styles.

## Suggested Fix

Add to `easemotion/all.css` after the modals import:

```css
@import "../components/forms.css";
```

## Files

- `style.css` — form component styles demonstrating what's missing
- `demo.html` — form demo with inputs, selects, textareas, checkboxes, radios, validation states
- `README.md` — this file
