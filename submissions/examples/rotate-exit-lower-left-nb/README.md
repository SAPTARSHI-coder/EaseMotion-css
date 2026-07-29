# Rotate Exit — Lower-Left Origin

A premium CSS animation showcase demonstrating how `transform-origin` affects directional exit animations. An element rotates outward toward the lower-left corner using `transform-origin: left bottom` combined with `rotate(45deg)` and a smooth opacity fade-out.

---

## What Does This Do?

This example demonstrates a **transform-origin-based exit animation** where an element:

1. Starts fully visible (`opacity: 1`, `rotate(0deg)`)
2. Uses `transform-origin: left bottom` to set the pivot point at the lower-left corner
3. Animates to its hidden state (`opacity: 0`, `rotate(45deg)`)
4. Creates the visual effect of the element dropping away toward the lower-left

The key mechanism is that by placing the rotation pivot at the **left bottom** corner, the 45-degree rotation swings the element downward and leftward as it fades out, simulating a grounded dismissal motion — as if the element is being dropped or slid off the lower-left edge of the screen.

## How Is It Used?

Open `demo.html` directly in any modern browser. The page loads with:

- A **hero section** showing a live preview of the exit animation (auto-plays after a short delay)
- A **main demo card** that replays the animation on click or hover, with property stats
- An **animation breakdown** section explaining rotation angle, transform origin, and opacity transition
- A **use cases** section illustrating real-world applications (notification dismissal, card removal, modal closing, dashboard interactions)
- A **code explanation** section showing the `@keyframes` definition and applied properties

No build tools, servers, or JavaScript are required. The animation is pure CSS.

### File Structure

```
submissions/examples/rotate-exit-lower-left-nb/
├── demo.html          # Main showcase page
├── style.css          # All styles and animations
└── README.md          # This file
```

## Why Is It Useful?

Understanding `transform-origin` is essential for creating professional, natural-looking exit animations. This example teaches developers:

1. **How origin placement affects rotational direction** — A positive rotation angle at `left bottom` drives the element downward, while the same angle at `left top` would drive it upward
2. **Why origin placement changes motion perception** — Lower-left pivots feel "dropping away" or "sliding off", which is more grounded than centre-based rotation
3. **How to combine rotation with fading for polished exits** — Synchronised fade-out masks the visual discontinuity of the element leaving the viewport

### Animation Overview

| Property | Initial Value | Final Value | Purpose |
|---|---|---|---|
| `transform` | `rotate(0deg)` | `rotate(45deg)` | Clockwise rotation toward lower-left |
| `transform-origin` | `left bottom` | `left bottom` | Pivot point at lower-left corner (remains constant) |
| `opacity` | `1` | `0` | Gradual fade-out during rotation |
| `animation` | — | `0.7s cubic-bezier(0.55, 0, 0.45, 1) forwards` | Premium easing with `forwards` fill mode |

### Transform-Origin Explanation

The `transform-origin` property defines the point around which a transformation is applied. By default this is the centre of the element (`50% 50%`). In this demo:

- **`left bottom`** places the pivot at the element&rsquo;s lower-left corner
- The element rotates around this corner, not its centre
- This causes the visible mass to swing outward toward the lower-left as rotation progresses
- The effect mimics a dismissible card being dropped or swept away toward the corner of the screen

### Exit Rotation Behavior

When `transform-origin: left bottom` is combined with `rotate(45deg)` in an exit context:

1. The element&rsquo;s **lower-left corner** stays fixed as the pivot point
2. The **upper-right area** swings downward and leftward due to the clockwise rotation
3. As the animation progresses towards the final keyframe, the element simultaneously rotates clockwise and fades
4. The `forwards` fill mode keeps the element in its final hidden state after animation completes

Compare this with `transform-origin: center` (default), where the element would simply spin in place and fade — the directional exit effect toward the lower-left would be lost.

### Responsive Behaviour

- The layout uses `clamp()` for fluid typography and spacing across viewports
- The breakdown grid collapses to a single column on tablets (≤900px)
- Use cases grid adapts from 4 columns to 2 columns on tablets, and stacks vertically on mobile (≤550px)
- Demo stats display as a 4-column grid, collapsing to 2 columns on narrower screens
- Hero and demo elements scale down proportionally on mobile
- All animations work across viewport sizes without modification
- No JavaScript or external dependencies are required

### Technical Requirements

- Pure CSS — no JavaScript required
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Open `demo.html` directly in a browser — no server needed
- Valid CSS syntax with `@keyframes`, `transform-origin: left bottom`, `transform: rotate(45deg)`, and opacity transition