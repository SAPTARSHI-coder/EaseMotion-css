# Shimmer Pulse Modal — Futuristic HUD

A pure CSS animated modal with a shimmer pulse interaction transition, styled for Futuristic HUD interfaces. Zero JavaScript animation overhead — JS is used only to toggle a class for open/close.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<button class="hud-modal-trigger" id="openModal">Open HUD Panel</button>

<div class="hud-modal-overlay" id="modalOverlay">
  <div class="hud-modal" role="dialog" aria-modal="true" aria-labelledby="hudModalTitle" tabindex="-1" id="hudModal">
    <div class="hud-modal__shimmer-edge"></div>
    <div class="hud-modal__header">
      <h2 id="hudModalTitle">System Status</h2>
      <button class="hud-modal__close" id="closeModal" aria-label="Close panel">&times;</button>
    </div>
    <div class="hud-modal__body">
      <p>Your content here.</p>
    </div>
  </div>
</div>
```

Toggle `.is-open` on `.hud-modal-overlay` via JS (see `demo.html` for a minimal open/close/Esc handler).

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--hud-modal-timing` | `0.4s` | Entrance/exit transition duration |
| `--hud-modal-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Entrance/exit easing |
| `--hud-modal-scale-from` | `0.85` | Starting scale for the pulse-in |
| `--hud-modal-shimmer-duration` | `1.6s` | Speed of the shimmer sweep |
| `--hud-accent` / `--hud-accent-soft` | `#00e5ff` / `#7df9ff` | Shimmer/accent colors |

Override any of these on `.hud-modal` or a parent to customize per use case.

## Accessibility

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` on the panel
- Closes on Escape key and backdrop click
- Focus moves to the modal on open and back to the trigger on close
- Respects `prefers-reduced-motion`

## Why does it fit EaseMotion CSS?

The shimmer sweep and pulse-in entrance are implemented entirely with CSS `@keyframes` and transitions, driven by human-readable custom properties. JavaScript is limited to a single class toggle, keeping the animation logic transparent and framework-agnostic — in line with the human-readable, animation-first philosophy.
