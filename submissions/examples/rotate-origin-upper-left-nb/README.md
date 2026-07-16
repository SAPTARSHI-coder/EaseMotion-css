# Rotate from Upper-Left Origin

A premium CSS animation showcase demonstrating how `transform-origin` affects rotational entrance animations. The element rotates into view from the upper-left area using an origin-based rotation effect with `transform-origin: right bottom` and `rotate(45deg)`.

## What Does This Do?

This example demonstrates a **transform-origin-based entrance animation** where an element:

1. Starts hidden (`opacity: 0`) and rotated 45 degrees (`rotate(45deg)`)
2. Uses `transform-origin: right bottom` to set the pivot point at the lower-right corner
3. Animates to its final visible state (`opacity: 1`, `rotate(0deg)`)
4. Creates the visual effect of the element swinging into view from the upper-left area

The key mechanism is that by placing the rotation pivot at the **right bottom** corner, the initial 45-degree rotation shifts the element's visible mass toward the upper-left. As the animation progresses to 0 degrees, the element settles into its natural position, creating a smooth, lifelike entrance.

## How Is It Used?

Open `demo.html` directly in any modern browser. The page loads with:

- A **hero section** showing a live preview of the animation
- A **main demo card** that animates on page load with detailed stats
- A **comparison section** showing how different `transform-origin` values affect rotation behavior
- An **animation properties panel** explaining each CSS property used
- A **code explanation** section showing the `@keyframes` definition

No build tools, servers, or JavaScript are required. The animation is pure CSS.

### File Structure

```
submissions/examples/rotate-origin-upper-left-nb/
├── demo.html          # Main showcase page
├── style.css          # All styles and animations
└── README.md          # This file
```

## Why Is It Useful?

Understanding `transform-origin` is essential for creating professional, natural-looking animations. This example teaches developers:

1. **How transform-origin works** — The pivot point fundamentally changes the rotation path
2. **Why origin matters** — Different origins create dramatically different visual effects
3. **How to create natural motion** — Origin-based animations feel more organic than center-based rotations

### Animation Overview

| Property | Value | Purpose |
|---|---|---|
| `transform` | `rotate(45deg)` → `rotate(0deg)` | Initial rotation offset that animates to flat |
| `transform-origin` | `right bottom` | Pivot point at lower-right corner |
| `opacity` | `0` → `1` | Fade in during animation |
| `animation` | `0.8s cubic-bezier(0.22, 1, 0.36, 1)` | Premium easing curve for smooth motion |

### Transform-Origin Explanation

The `transform-origin` property defines the point around which a transformation is applied. By default, this is the center of the element (`50% 50%`). In this demo:

- **`right bottom`** places the pivot at the lower-right corner
- The element rotates around this corner, not its center
- This causes the visible portion to swing in from the upper-left
- The effect mimics a door or panel swinging open from its hinge

### Rotation Behavior Explanation

When `transform-origin: right bottom` is combined with `rotate(45deg)`:

1. The element's **lower-right corner** stays fixed as the pivot point
2. The **upper-left area** swings outward due to the rotation
3. As the animation runs to `rotate(0deg)`, the element settles into its final position
4. The opacity transition from 0 to 1 masks the initial offset, creating a smooth reveal

Compare this with `transform-origin: center` (default), where the element would simply spin in place, or `transform-origin: top left`, where the element would swing in from the lower-right.

### Responsive Behavior

- The layout uses `clamp()` for fluid typography and spacing
- The comparison grid stacks vertically on tablets (≤768px)
- Preview and demo elements scale down proportionally on mobile (≤480px)
- All animations work across viewport sizes without modification
- No media queries are needed for the animation itself — only for layout adjustments

### Technical Requirements

- Pure CSS — no JavaScript required
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Open `demo.html` directly in a browser — no server needed
- Valid CSS syntax with `@keyframes`, `transform-origin`, and `transform` properties