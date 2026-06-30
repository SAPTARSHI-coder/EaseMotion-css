# Morphing Shape Button

Pure CSS shape-morphing button collection. Three button variants that smoothly transition between shapes on hover — no JavaScript required.

## Features

- **3 morphing variants:**
  - **Circle → Pill** — FAB-style circular button expands to a pill, revealing a text label. The `+` icon rotates 135° on hover.
  - **Square → Rounded Rectangle** — Sharp square morphs to a rounded rectangle with slide-in text and an arrow icon that shifts right.
  - **Pill → Arrow** — Pill-shaped button contracts to a circle, hiding the text label and revealing an arrow icon.
- **Smooth `cubic-bezier(0.34, 1.56, 0.64, 1)` easing** on border-radius and width/height transitions
- **Icon animations** — rotate, translate, fade
- **Hover expands width** to reveal hidden text labels (variants 1 & 2)
- **Responsive** sizing adapts on small screens
- **Pure CSS, zero JavaScript**
- **`prefers-reduced-motion`** support — disables all transitions and preserves original shapes

## Files

| File        | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| `demo.html` | Three demo sections, each with a morphing button                |
| `style.css` | All styles, transitions, animations, responsive, reduced-motion |
| `README.md` | This documentation                                              |

## Usage

```html
<button class="morph-btn circle-pill">
  <span class="btn-icon">+</span>
  <span class="btn-label">Create</span>
</button>
```

## How It Works

Each button uses CSS `transition` on `border-radius`, `width`, and `height` properties with a spring-like `cubic-bezier` easing. Text labels use `opacity` and `width` transitions to fade in/out on hover. Icons use `transform` for rotation or translation effects.

## Keyframe Reference

No `@keyframes` are used — all animations are driven by CSS transitions.

Fixes #19287
