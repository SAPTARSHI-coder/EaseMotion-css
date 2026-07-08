# Rotate Exit — Upper-Left Origin

A premium CSS animation showcase demonstrating how `transform-origin` affects directional exit animations. An element rotates outward toward the upper-left corner using `transform-origin: left top` combined with `rotate(-45deg)` and a smooth opacity fade-out.

---

## What Does This Do?

This example demonstrates a **transform-origin-based exit animation** where an element:

1. Starts fully visible (`opacity: 1`, `rotate(0deg)`)
2. Uses `transform-origin: left top` to set the pivot point at the upper-left corner
3. Animates to its hidden state (`opacity: 0`, `rotate(-45deg)`)
4. Creates the visual effect of the element flinging outward toward the upper-left

The key mechanism is that by placing the rotation pivot at the **left top** corner, the -45-degree rotation swings the element upward and leftward as it fades out, simulating a natural dismissal motion.

## How Is It Used?

Open `demo.html` directly in any modern browser. The page loads with:

- A **hero section** showing a live preview of the exit animation (auto-plays after a short delay)
- A **main demo card** that replays the animation on click or hover, with property stats
- An **animation breakdown** section explaining rotation angle, transform origin, and opacity transition
- A **use cases** section illustrating real-world applications
- A **code explanation** section showing the `@keyframes` definition and applied properties

No build tools, servers, or JavaScript are required. The animation is pure CSS.

### File Structure

```
submissions/examples/rotate-exit-upper-left-nb/
├── demo.html          # Main showcase page
├── style.css          # All styles and animations
└── README.md          # This file
```

## Why Is It Useful?

Understanding `transform-origin` is essential for creating professional, natural-looking exit animations. This example teaches developers:

1. **How exit animations differ from entrance animations** — Origin-based rotation creates directional displacement that makes the exit feel intentional rather than abrupt
2. **Why origin placement changes the perceived motion path** — The same rotation angle produces dramatically different trajectories depending on the pivot point
3. **How to combine rotation with opacity for polished dismissals** — Synchronised fade-out masks the visual discontinuity of the element leaving

### Animation Overview

| Property | Initial Value | Final Value | Purpose |
|---|---|---|---|
| `transform` | `rotate(0deg)` | `rotate(-45deg)` | Counter-clockwise rotation toward upper-left |
| `transform-origin` | `left top` | `left top` | Pivot point at upper-left corner (remains constant) |
| `opacity` | `1` | `0` | Gradual fade-out during rotation |
| `animation` | — | `0.7s cubic-bezier(0.55, 0, 0.45, 1) forwards` | Premium easing with `forwards` fill mode |

### Transform-Origin Explanation

The `transform-origin` property defines the point around which a transformation is applied. By default this is the centre of the element (`50% 50%`). In this demo:

- **`left top`** places the pivot at the element&rsquo;s upper-left corner
- The element rotates around this corner, not its centre
- This causes the visible mass to swing outward toward the upper-left as rotation progresses
- The effect mimics a dismissible card being flicked away toward the corner of the screen

### Exit Rotation Behavior

When `transform-origin: left top` is combined with `rotate(-45deg)` in an exit context:

1. The element&rsquo;s **upper-left corner** stays fixed as the pivot point
2. The **lower-right area** swings upward and leftward due to the counter-clockwise rotation
3. As the animation progresses towards the final keyframe, the element simultaneously rotates and fades
4. The `forwards` fill mode keeps the element in its final hidden state after animation completes

Compare this with `transform-origin: center` (default), where the element would simply spin in place and fade — the directional exit effect would be lost.

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
- Valid CSS syntax with `@keyframes`, `transform-origin: left top`, `transform: rotate(-45deg)`, and opacity transition