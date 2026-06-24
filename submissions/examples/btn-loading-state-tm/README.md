# Button Loading State

## What does this do?
Proposes adding `.ease-btn-loading` and `.ease-btn-spinner` to `components/buttons.css`. The loading variant shows an inline CSS spinner inside the button and disables pointer events so the button cannot be clicked again while an async action (API call, form submit) is in progress.

## How is it used?
Add `.ease-btn-loading` to any `.ease-btn` variant:

```html
<button class="ease-btn ease-btn-primary ease-btn-loading" aria-label="Saving">
  <span class="ease-btn-spinner" aria-hidden="true"></span>
  Saving...
</button>
```

The `.ease-btn-spinner` is a border-based spinner with no external SVG or CDN dependency. The `aria-live="polite"` attribute on the button announces state changes to screen readers.

## Why is this useful?
Improves UX for async operations by giving immediate visual feedback that a button action is in progress. Prevents double-submits and improves perceived responsiveness. This is a standard UI pattern expected in modern web apps.

## Tech Stack
- Pure CSS spinner using `border` and `border-radius`
- No external dependencies (CDN-free spinner)
- Accessible: uses `aria-label` and `aria-live`

## Browser Support
All browsers that support CSS `animation` and `border-radius` (IE10+, all modern browsers).

## Contribution Notes
- Add to `components/buttons.css` under `@layer easemotion-components`
- Spinner uses `currentColor` so it adapts to button text color
- `pointer-events: none` on `.ease-btn-loading` prevents accidental re-clicks
