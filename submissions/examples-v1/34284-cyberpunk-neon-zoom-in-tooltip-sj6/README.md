# Cyberpunk Neon Zoom-In Tooltip

A pure CSS, zero-dependency tooltip that **zooms into focus** like a
holo-projection: it grows from a collapsed point anchored at its trigger,
overshoots slightly on a spring curve, and settles crisp and readable.
Styled for cyberpunk neon dark UIs, revealed by both `:hover` and
`:focus-visible` — no JavaScript anywhere.

Resolves Issue: #34284

## ✨ Features

- **Zoom-In motion with overshoot** — scales from `--cz-tt-scale-from`
  (default `0.4`) to full size on a springy
  `cubic-bezier(0.34, 1.56, 0.64, 1)`; the shrink-away uses a separate,
  faster exit curve so hide never feels laggy.
- **Anchored growth** — `transform-origin` is pinned to the arrow tip, so
  the tooltip visibly "projects" out of its trigger instead of inflating in
  place.
- **Zero JavaScript** — sibling-selector interaction engine
  (`.cz-node-btn:hover + .cz-holo`), CSS transitions only.
- **Keyboard accessible** — real `<button>` triggers with
  `aria-describedby` → `role="tooltip"`, plus a dashed acid-green
  `:focus-visible` ring that never collides with the violet hover glow.
- **Tunable via custom properties** — start scale, duration, and both
  easing curves are exposed on `:root`.
- **Cyberpunk Neon skin** — acid-green / violet / ember palette, HUD corner
  brackets, radial glow washes, and an inner phosphor bloom on the tooltip.
- **Responsive & motion-safe** — node tiles wrap on narrow screens, tooltip
  width caps at `min(230px, 80vw)`, and `prefers-reduced-motion` collapses
  the zoom into an instant reveal.

## 🔧 Custom Properties

| Property             | Default                              | Role                       |
| -------------------- | ------------------------------------ | -------------------------- |
| `--cz-tt-scale-from` | `0.4`                                | Collapsed starting scale   |
| `--cz-tt-duration`   | `280ms`                              | Grow time                  |
| `--cz-tt-ease`       | `cubic-bezier(0.34, 1.56, 0.64, 1)`  | Overshoot spring (show)    |
| `--cz-tt-ease-out`   | `cubic-bezier(0.4, 0, 1, 1)`         | Exit curve (hide)          |

## 🚀 Usage

```html
<span class="cz-node">
  <button class="cz-node-btn" type="button" aria-describedby="my-holo">
    NODE 09-A
  </button>
  <span class="cz-holo" id="my-holo" role="tooltip">
    <span class="cz-holo-head">Header <small>TAG</small></span>
    Body copy zooms into focus above the trigger.
  </span>
</span>
```

## 📂 Files

- `demo.html` — NetWatch security-grid demo with three tooltip nodes.
- `style.css` — theme tokens, zoom interaction engine, responsive + a11y guards.
- `README.md` — this document.
