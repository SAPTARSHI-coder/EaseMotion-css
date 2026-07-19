# ease-copy-class-button

A small "copy to clipboard" button designed to sit next to a CSS class name on demo/showcase cards — click it to copy the class name and see a brief "Copied!" confirmation toast.

## Preview

- Displays a class name in a monospace pill alongside a small clipboard icon button.
- Clicking the button copies the class name to the clipboard via the Clipboard API (with a `document.execCommand('copy')` fallback for non-secure contexts).
- The icon swaps to a checkmark and a "Copied!" toast fades in above the button for ~1.6s.
- Fully supports light and dark themes via `[data-theme]`.
- Respects `prefers-reduced-motion` by disabling the toast/icon transitions.

## Usage

```html
<div class="ease-copy-class-button" data-class-name="ease-fade-up">
  <code class="ease-copy-class-button__name">ease-fade-up</code>
  <button class="ease-copy-class-button__btn" type="button" aria-label="Copy class name">
    <span class="ease-copy-class-button__icon" aria-hidden="true">📋</span>
  </button>
  <span class="ease-copy-class-button__toast" role="status">Copied!</span>
</div>
```

Wire up the click handler in JavaScript to read `data-class-name` and write it to the clipboard — see `demo.html` for a complete example, including the icon swap and toast timing.

## Files

- `demo.html` — three example cards (each showing a different animation class name) with working copy-to-clipboard behavior and a light/dark theme toggle.
- `style.css` — component styles, using CSS custom properties for full light/dark theme support.
- `README.md` — this file.

## Accessibility

- The button has an explicit `aria-label="Copy class name"` since its only visible content is a decorative icon.
- The toast uses `role="status"` so screen readers announce the "Copied!" confirmation.
- All transitions are disabled under `prefers-reduced-motion: reduce`.

## Origin

Based on the pattern requested in issue #48321 ("Add a Copy Class Name Button to Animation Demo Cards"), built as a standalone example component so it can be added independently of the shared docs gallery.
