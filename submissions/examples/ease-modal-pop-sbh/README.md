# ease-modal-pop

A modal dialog that pops in with a subtle scale-up (and slight overshoot) while the backdrop fades and blurs in. Pure CSS — open/close is driven by a hidden checkbox, so no JavaScript is required for the animation.

## What does this do?

Adds a **modal-pop**: a centered frosted-glass dialog. Toggling a hidden checkbox (via the "Open modal" label) scales the dialog up (`scale(0.85) → 1` with an overshoot easing) and fades it in, while a dimmed, lightly blurred backdrop fades in behind it. Closing reverses both. The backdrop and any action buttons are all `<label for="modal-toggle">`, so they close the modal with no JS.

## How is it used?

1. Place a hidden `<input type="checkbox" class="modal-toggle">`, an `.opener` label, a `.backdrop` label, and the `.modal` as siblings (the CSS uses the `~` sibling combinator).
2. The close button and action buttons are also labels pointing at the checkbox.

```html
<link rel="stylesheet" href="style.css" />

<input type="checkbox" id="modal-toggle" class="modal-toggle" aria-hidden="true" />
<label for="modal-toggle" class="opener" tabindex="0">Open modal</label>
<label for="modal-toggle" class="backdrop" aria-hidden="true"></label>
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal__head">
    <h2 class="modal__title" id="modal-title">Title</h2>
    <label for="modal-toggle" class="modal__close" tabindex="0" aria-label="Close dialog">&times;</label>
  </div>
  <div class="modal__body"><p>…</p></div>
  <div class="modal__actions">
    <label for="modal-toggle" class="modal__btn modal__btn--ghost" tabindex="0">Cancel</label>
    <label for="modal-toggle" class="modal__btn modal__btn--primary" tabindex="0">Confirm</label>
  </div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the dialog's `transform: translate(-50%,-50%) scale(0.85) → scale(1)` with an overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) paired with an `opacity` fade, while the backdrop fades via `opacity` + `visibility` (deferred on close so it doesn't trap clicks while hiding). All via `transform`/`opacity`.
- **Glassmorphism aesthetic** — the dialog is a frosted panel via `backdrop-filter: blur()`; the backdrop adds a light blur over the page.
- **Accessible** — `role="dialog"` + `aria-modal="true"` + `aria-labelledby` on the modal; the trigger, close, and action buttons are focusable labels with `:focus-visible` rings. Full `prefers-reduced-motion` support (modal and backdrop snap without transition).
- **Reusable** — configurable via CSS custom properties (`--modal-duration`, `--modal-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks, and no JS required for the animation).
- `style.css` — glassmorphism modal, scale-up + backdrop-fade via checkbox state, focus-visible states, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
