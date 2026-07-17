# ease-modal — Pure CSS Scale-Hover Modal

A fully responsive, keyboard-accessible modal dialog built with **zero JavaScript**. The trigger button grows on hover, and the modal panel animates in with a springy scale + fade transition. Every timing, easing, and scale value is exposed as a CSS custom property.

## Files

- `demo.html` — self-contained live example
- `style.css` — the component (drop-in, no dependencies)
- `README.md` — this file

## How it works

The component uses the **checkbox hack**: a visually hidden `<input type="checkbox">` holds the open/closed state, and CSS's `:checked` + general sibling (`~`) combinator reveals the overlay. No `<script>` tag, no build step.

```html
<input type="checkbox" id="ease-modal-1" class="ease-modal-toggle" />
<label for="ease-modal-1" class="ease-modal-trigger">Open Modal</label>

<div class="ease-modal-overlay">
  <label for="ease-modal-1" class="ease-modal-backdrop" aria-hidden="true"></label>
  <div class="ease-modal-panel" role="dialog" aria-modal="true" aria-labelledby="ease-modal-1-title">
    <div class="ease-modal-header">
      <h2 id="ease-modal-1-title" class="ease-modal-title">Title</h2>
      <label for="ease-modal-1" class="ease-modal-close" aria-label="Close modal">✕</label>
    </div>
    <p class="ease-modal-body">Content goes here.</p>
    <div class="ease-modal-actions">
      <label for="ease-modal-1" class="ease-modal-btn ease-modal-btn-ghost">Cancel</label>
      <label for="ease-modal-1" class="ease-modal-btn ease-modal-btn-primary">Confirm</label>
    </div>
  </div>
</div>
```

**Why the backdrop is a separate `<label>` and not a wrapping one:** if the overlay label wrapped the panel, a click anywhere inside the panel would bubble up and close the modal. Instead, `.ease-modal-backdrop` is an absolutely-positioned label sitting *behind* the panel (`z-index: 0` vs `1`) — a sibling, not an ancestor — so panel clicks never trigger a close.

## Customization

Override any of these in `:root` (or scoped to a wrapper) to retheme:

```css
:root {
  --ease-modal-timing: 320ms;
  --ease-modal-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* springy pop */
  --ease-modal-scale-from: 0.85;
  --ease-modal-trigger-hover-scale: 1.06;
  --ease-modal-radius: 1rem;
  --ease-modal-max-width: 480px;
  --ease-modal-bg: #ffffff;
  --ease-modal-color: #16181d;
  --ease-modal-overlay-bg: rgba(15, 17, 22, 0.55);
  --ease-modal-accent: #6c5ce7;
}
```

Example — slower, flatter, brand-colored:

```css
:root {
  --ease-modal-timing: 500ms;
  --ease-modal-easing: ease-out;
  --ease-modal-accent: #f97316;
}
```

## Accessibility

- **Keyboard open:** the checkbox itself is the real accessible control — `Tab` focuses it, `Space` toggles it, in every browser, with no ARIA workarounds needed.
- **Focus indication:** `.ease-modal-toggle:focus-visible + .ease-modal-trigger` draws a visible outline on the styled button when the underlying checkbox is keyboard-focused.
- **Screen readers:** the panel carries `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` pointing at its heading.
- **Reduced motion:** all transitions collapse to ~0 under `prefers-reduced-motion: reduce`.
- **Closing:** mouse/touch users can close via the backdrop, the ✕, or Cancel/Confirm — all are `<label>`s bound to the same checkbox.

**Known limitation (by design, honestly disclosed):** browsers don't standardize keyboard activation (Enter/Space) on bare `<label>` elements, so the ✕/backdrop/Cancel controls are mouse/touch affordances. Keyboard-only users can always close by shifting focus back to the toggle (`Shift+Tab`) and pressing `Space`. If you want `Escape`-to-close and auto-focus-on-open, it's a well-understood **optional** 3-line enhancement — the framework stays JS-free by default:

```html
<script>
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.ease-modal-toggle:checked')
        .forEach((cb) => (cb.checked = false));
    }
  });
</script>
```

## Responsive behavior

Below `480px` the panel becomes a full-width bottom sheet (slides up instead of scaling in place), which feels more natural on small touch screens than a centered scale on tiny viewports.

## Browser support

Works in all evergreen browsers. Uses `:has()`-free selectors only (general sibling combinator + `:checked`), `backdrop-filter` (gracefully ignored where unsupported — the overlay still darkens), and `prefers-reduced-motion` / `prefers-color-scheme` media queries.