# Cyberpunk Neon 3D Perspective Tilt Modal

## Description
A pure CSS modal with a cyberpunk/neon aesthetic and a 3D perspective tilt entrance animation. Opens/closes entirely via a hidden checkbox and the `:checked` pseudo-class — zero JavaScript.

## Features
- 3D `rotateX` tilt + scale entrance, powered by CSS `perspective` and `transform-style: preserve-3d`
- Neon glow styling (text-shadow, box-shadow, gradient border)
- Fully keyboard accessible: `<label>` triggers are focusable and toggle via Enter/Space since they're bound to the checkbox
- Customizable via CSS custom properties (timing, easing, tilt angle, scale, colors)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-modal">
  <input type="checkbox" id="modal1" class="modal-toggle" />
  <label for="modal1" class="modal-open-btn">Open Terminal</label>

  <div class="modal-overlay">
    <div class="modal-box" role="dialog" aria-modal="true">
      <h2 class="modal-title">Title</h2>
      <p class="modal-body">Content goes here.</p>
      <label for="modal1" class="modal-close-btn">Close</label>
    </div>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--modal-duration` | `0.5s` | Animation duration |
| `--modal-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing function |
| `--modal-tilt-angle` | `18deg` | Starting 3D tilt rotation |
| `--modal-scale-start` | `0.85` | Starting scale before entrance |
| `--modal-neon` | `#00f0ff` | Primary neon accent color |
| `--modal-neon-secondary` | `#ff00c8` | Secondary neon accent color |
| `--modal-bg` | `#0a0a12` | Base background tone |
| `--modal-overlay` | `rgba(5,5,15,0.75)` | Backdrop overlay color |

## Why zero JavaScript?
The modal's open/closed state lives entirely in a hidden `<input type="checkbox">`. Both the trigger and close button are `<label>` elements pointing at the same checkbox `id`, so clicking either toggles the state via native HTML behavior — no event listeners needed.

## Files
- `demo.html` — live working example
- `style.css` — component styles
- `README.md` — this file