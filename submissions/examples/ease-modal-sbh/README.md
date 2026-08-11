# ease-modal

A centered modal dialog built on the native `<dialog>` element, with a blurred/dimmed `::backdrop` and a scale + fade entrance animation. Closes via backdrop click, Escape key, or close button — all native `<dialog>` behavior.

## What does this do?

- Uses the native `<dialog>` element opened via `.showModal()` / closed via `.close()`. That gives you, for free: top-layer rendering (always above page content, no z-index wars), focus trapping, the Escape key closing, and `:focus-visible` handling.
- Styles `::backdrop` with a dim overlay plus `backdrop-filter: blur()` so the page behind frosts over.
- Animates the content in with a scale + fade + slight upward nudge, using the modern `@starting-style` + `allow-discrete` technique so the **exit** transition also runs (otherwise `display:none` skips transitions).
- Backdrop click closes: handled natively by `<dialog>` — clicking `::backdrop` fires a `cancel`/close, so no extra JS is needed (browsers close on backdrop click when using `.showModal()`).

## How is it used?

1. Link the stylesheet.
2. Put a `<dialog class="modal">` in the page and open it with `.showModal()`.

```html
<link rel="stylesheet" href="style.css" />

<dialog class="modal" id="myModal">
  <div class="modal-content" role="document">
    <header class="modal-head">
      <h2 class="modal-title">Confirm Action</h2>
      <button class="modal-close" type="button" aria-label="Close"
              onclick="document.getElementById('myModal').close()">&times;</button>
    </header>
    <div class="modal-body">
      <p>Are you sure you want to continue?</p>
    </div>
    <footer class="modal-foot">
      <button class="btn" type="button"
              onclick="document.getElementById('myModal').close()">Cancel</button>
      <button class="btn btn--primary">Confirm</button>
    </footer>
  </div>
</dialog>

<button onclick="document.getElementById('myModal').showModal()">Open Modal</button>
```

## Why is this useful?

- **Native accessibility for free** — `<dialog>` gives focus trapping, Escape-to-close, and top-layer stacking without any JS library. EaseMotion focuses purely on the animation polish (`modal`, `modal-content`).
- **Real exit animation** — `@starting-style` + `allow-discrete` (the modern CSS approach) lets the close transition actually run, instead of the dialog vanishing instantly.
- **Backdrop blur** — `::backdrop` dims *and* frosts the page behind, a common modern app affordance.
- **Accessible** — semantic `<dialog>`, `role="document"` on the content, `aria-label` on the close button, visible focus rings; full `prefers-reduced-motion` support disables transitions.
- **Reusable** — configurable via CSS custom properties (`--md-maxw`, `--md-radius`, `--bd-dim`, `--bd-blur`, `--md-dur`, `--md-from-scale`, etc.).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Three modals: confirm, info, and a form (`method="dialog"`).
- `style.css` — dialog + backdrop styling, scale/fade entrance + exit via `@starting-style`, close button, demo buttons + form fields, reduced-motion rules.
- `README.md` — this documentation.

## Browser support note

`@starting-style` and `allow-discrete` (for exit transitions) are supported in current Chromium and Firefox. Browsers without them still get the entrance animation on open and full native `<dialog>` behavior — only the *closing* animation degrades to an instant close.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
