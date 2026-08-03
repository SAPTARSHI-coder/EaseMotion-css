# CSS 3D-Flip Modal — Gaming Hub Layout

A pure HTML5 + CSS modal for gaming hub / game-library layouts. Clicking a
game launches a modal containing a 3D card that flips on its Y-axis to
reveal stats on the back. Opening/closing the modal and flipping the card
are both handled entirely with the **checkbox hack** — there is no
JavaScript anywhere in this submission.

Addresses **Issue #56430**.

---

## Features

- **True 3D flip animation** — built with `perspective`,
  `transform-style: preserve-3d`, and `backface-visibility: hidden`, so
  the card rotates believably in 3D space rather than faking it with
  opacity crossfades.
- **Zero JavaScript** — modal open/close and card flip state are both
  driven by hidden `<input type="checkbox">` elements paired with
  `<label>` triggers, using sibling (`~`) and descendant CSS selectors.
- **EaseMotion CSS utility classes** — uses `.em-fade-in-down` for the
  header's entrance animation. Defined as a self-contained fallback in
  `style.css` (see the "EaseMotion CSS utilities" section) so the demo
  works standalone; swap in the compiled `dist/ease-motion.css` core
  stylesheet when merging into the main repo and the same class names
  keep working with the shared utilities instead.
- **Layered transitions** — the overlay fades in, the card scene pops in
  with a scale transition, and the flip itself eases with a dedicated
  duration/easing token, so opening a modal feels like a single
  choreographed motion rather than several disconnected effects.
- **Keyboard & backdrop dismissal** — every modal has an explicit close
  button on both card faces, plus a clickable backdrop `<label>`.
- **Fully responsive** — the flip card scene resizes fluidly for
  desktop, tablet (≤720px), and mobile (≤480px) viewports.
- **`prefers-reduced-motion` support** — all transitions on the overlay,
  card scale, hover states, and the flip rotation itself are removed for
  users who request reduced motion; the modal and flip remain fully
  functional, just instant instead of animated.
- **Semantic markup** — `role="dialog"` and `aria-modal="true"` on each
  overlay, `aria-labelledby` pointing at the visible title, and
  `aria-label`s on icon-only close buttons.
- **Does not touch existing project files** — this is a fully
  self-contained folder under `submissions/examples/`; nothing outside
  it is modified.

---

## Folder structure

```
submissions/examples/css-3d-flip-modal-gaming-hub/
├── demo.html     # Semantic markup, 3 example game modals
├── style.css     # All layout, 3D transform, animation, and responsive styles
└── README.md     # This file
```

---

## Usage

1. Open `demo.html` directly in any modern browser — no build step,
   server, or JavaScript runtime required.
2. Click any "View Details" launcher card to open its modal.
3. Inside the modal, click **Flip for Stats** to rotate the card and
   reveal the back face, or **Back to Cover** to flip it back.
4. Close a modal via the **×** button on either face, or by clicking
   the dimmed backdrop.
5. To reuse this component elsewhere, copy the CSS custom properties
   from `:root`, the `.modal-state` / `.flip-state` / `.modal-overlay` /
   `.modal-scene` / `.flip-card` rule blocks, and the corresponding
   markup pattern (checkbox → label → overlay → flip card) from
   `demo.html`.

---

## Customization

| What to change                | Where                                                                |
|--------------------------------|-----------------------------------------------------------------------|
| Color palette                  | CSS custom properties in the `:root` block at the top of `style.css`   |
| Flip direction (Y vs X axis)   | `.flip-state:checked ~ .modal-scene .flip-card { transform }` and the matching `rotateY` on `.flip-card__face--back` (change to `rotateX` for a vertical flip) |
| Flip speed / easing            | `--em-duration-slow` and `--em-ease-standard` tokens                  |
| Modal size                     | `.modal-scene { width; height }` and its two responsive breakpoints   |
| Card front artwork              | `.flip-card__face--*` background-image gradients, or swap for `background-image: url(...)` |
| Stats shown on the back face   | `.flip-card__stats` list items in `demo.html`                         |
| Number of modals / games       | Duplicate a full `modal-state` + launcher `label` + `modal-overlay` block in `demo.html`, giving each set of IDs a unique suffix |

---

## Browser support

Uses only standard, widely supported CSS: custom properties,
`perspective`/`transform-style: preserve-3d`/`backface-visibility`,
`transition`/`@keyframes`, the `:checked` pseudo-class with sibling
combinators, and the `prefers-reduced-motion` media feature. Works in
all current versions of Chrome, Firefox, Safari, and Edge. Older
browsers without 3D transform support will simply show both faces
overlapping without the rotation — the modal's open/close and content
remain fully accessible either way.

---

## Accessibility

- Each modal overlay uses `role="dialog"` and `aria-modal="true"`, with
  `aria-labelledby` pointing at that modal's visible `<h2>` title.
- Icon-only close controls include `aria-label="Close dialog"`.
- All interactive triggers are real `<label>` elements tied to real
  `<input type="checkbox">` state, so they are reachable and operable
  via keyboard and screen readers without any custom scripting.
- `prefers-reduced-motion: reduce` removes all eased transitions
  (overlay fade, scale pop-in, hover lifts, and the 3D rotation) so the
  component still functions correctly, just without animated movement.