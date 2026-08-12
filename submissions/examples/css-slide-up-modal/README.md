# CSS Slide-Up Modal

A pure CSS modal styled as a game details panel, sliding up over a dimmed backdrop. No JavaScript, no dependencies.

## How it works

A single hidden checkbox drives the whole modal. A `<label>` outside the overlay opens it; two more labels inside — the backdrop itself, and a close button — close it, since clicking a label tied to the same checkbox simply unchecks it.

The overlay is `position: fixed` across the viewport and starts fully transparent with `visibility: hidden`, so it doesn't intercept clicks while closed. When the checkbox is checked, it fades in and the modal card itself slides up from `translateY(40px)` to its resting position.

The `visibility` property is toggled with a delayed transition (`transition: visibility 0s linear var(--ease-modal-duration)`) so the overlay only becomes non-interactive again after the closing fade finishes, avoiding a flash where it's invisible but still clickable.

## Files

- `demo.html` – an open-modal trigger and a "Ember Rush" game details modal
- `style.css` – all styling, custom properties, and the overlay/slide-up logic
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-modal-duration` – 0.35s
- `--ease-modal-easing` – cubic-bezier(0.16, 1, 0.3, 1)
- `--ease-modal-radius` – 14px
- `--ease-modal-bg` – modal card background
- `--ease-modal-border` – border color
- `--ease-modal-text` – title text color
- `--ease-modal-muted-text` – body text color
- `--ease-modal-accent` – button and meta text color
- `--ease-modal-backdrop-color` – overlay dimming color/opacity

Example override:

```css
:root {
  --ease-modal-accent: #22c55e;
  --ease-modal-backdrop-color: rgba(0, 0, 0, 0.8);
}
```

## Notes

- `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` are set on the modal for screen reader support
- Closes via clicking the backdrop, the close (×) button, or the confirm button — all just labels tied to the same checkbox
- Fully responsive; the modal width uses `min(90vw, 420px)` so it never overflows small screens
- Respects `prefers-reduced-motion` — the modal simply appears/disappears instantly with no slide or fade