# CSS Error Page Card

A sleek, animated 500 server error card designed to provide a polished user experience even when things go wrong.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript.
- **Micro-Interactions**: Hovering over the card triggers a sophisticated CSS `clip-path` glitch effect on the "500" error code using `::before` and `::after` pseudo-elements. The "Try Again" button gently elevates (`translateY`), and its internal refresh icon spins 180 degrees via a `cubic-bezier` transition.
- **Dynamic Content Support**: The glitch effect utilizes the `attr(data-text)` CSS function, meaning you can easily swap the error code to "404" or "403" in the HTML and the animation will automatically adapt to the new text.
- **Accessible**: Functions as a semantic `<main>` element with `aria-labelledby` and `aria-describedby` linking directly to the error message. Respects user preferences by gracefully disabling the glitch, slide, and spin animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your application's error handling layout or generic 500 page route.

```html
<main class="error-card">
  <!-- Use data-text for the glitch effect -->
  <h1 class="error-code" data-text="500">500</h1>
  <h2 class="error-title">Internal Server Error</h2>
  <!-- ... -->
</main>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--card-bg`: Background color of the card (default: `#ffffff`)
- `--error-color`: Color for the warning icon (default: `#ef4444`)
- `--error-light`: Background for the warning icon (default: `#fee2e2`)
- `--btn-bg`: Background color for the retry button (default: `#1e293b`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge). The `clip-path` property used for the glitch effect is fully supported across all major engines.
