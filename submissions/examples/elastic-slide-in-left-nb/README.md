# Elastic Slide-In — Left Origin

A premium CSS animation showcase demonstrating a high-energy elastic slide-in effect. An element enters rapidly from far off-screen left at `translateX(-200%)`, overshoots past its target, and settles elastically into its final position.

---

## What Does This Do?

This example demonstrates an **elastic overshoot entrance animation** where an element:

1. Starts **far off-screen to the left** at `translateX(-200%)`
2. Accelerates rapidly inward, reaching a peak at `translateX(8%)` — overshooting beyond its final resting place
3. Pulls back slightly to `translateX(-3%)`, then settles at `translateX(0)`
4. Creates the visual impression of an object with physical momentum that stretches past its target before snapping into place

The four keyframe positions simulate elastic physics using only CSS, with the overshoot and pullback creating a dynamic, energetic feel far beyond a standard slide-in.

## How Is It Used?

Open `demo.html` directly in any modern browser. The page loads with:

- A **hero section** showing a live preview of the elastic slide-in (auto-plays after a 1-second delay)
- A **main demo card** that replays the animation on click or hover, with motion stats
- A **motion breakdown** section with three cards explaining initial position, overshoot phase, and settling phase
- A **timing section** with a visual chart mapping each keyframe percentage to its `translateX` value and easing explanation
- A **use cases** section illustrating real-world applications (notifications, dashboard widgets, hero content, promotional banners)
- A **code explanation** section showing the `@keyframes` definition and elastic easing curve

No build tools, servers, or JavaScript are required. The animation is pure CSS.

### File Structure

```
submissions/examples/elastic-slide-in-left-nb/
├── demo.html          # Main showcase page
├── style.css          # All styles and animations
└── README.md          # This file
```

## Why Is It Useful?

High-energy elastic entrances create memorable first impressions and draw attention to important UI elements. This example teaches developers:

1. **How overshoot motion works** — Pushing past the target and pulling back creates a sense of physical momentum
2. **How to use translateX with multiple keyframes** — Four well-placed keyframe stops produce a complex elastic effect without JavaScript
3. **How to combine keyframes with elastic easing** — The `cubic-bezier(0.25, 0.5, 0.35, 1.5)` curve (y-value exceeds 1.0) amplifies the overshoot feel on top of the multi-step keyframes

### Animation Overview

| Keyframe | translateX | Phase | Purpose |
|---|---|---|---|
| 0% | `-200%` | Hidden start | Position far off-screen left |
| 70% | `8%` | Overshoot | Beyond final position for momentum illusion |
| 85% | `-3%` | Pull back | Corrective backward motion before settling |
| 100% | `0` | Settled | Final resting position |

### Overshoot Explanation

The overshoot — `translateX(8%)` at 70% — is the core mechanism that distinguishes this animation from a standard slide-in. Without it, the element would simply travel from `-200%` to `0` in a straight line. The overshoot:

- Creates the illusion that the element has physical mass and momentum
- Makes the entrance feel energetic and dynamic
- Provides a visual cue that the element has "arrived" by briefly crossing its destination and correcting itself

The amount of overshoot (8%) is carefully chosen: too little feels negligible, too much feels cartoonish. At 8% the effect reads as energetic but professional.

### Elastic Easing Explanation

The animation uses `cubic-bezier(0.25, 0.5, 0.35, 1.5)` as its easing function. The critical detail is that the **second control point's y-value exceeds 1.0**. This causes the animation to move past its destination mid-timeline and then pull back — amplifying the elastic character defined in the keyframes.

Compare this with a standard `ease-out` curve (y-values clamped to `[0, 1]`), which would simply slow down as the element approaches its destination without any overshoot.

### Responsive Behaviour

- The layout uses `clamp()` for fluid typography and spacing across viewports
- The breakdown grid collapses to a single column on tablets (≤900px)
- Use cases grid adapts from 4 columns to 2 columns on tablets, and stacks vertically on mobile (≤550px)
- Demo stats display as a 4-column grid, collapsing to 2 columns on narrower screens
- Hero preview scales down proportionally on mobile
- Timing chart bars stack vertically on mobile for readability
- All animations work across viewport sizes without modification — the `translateX` values are percentage-based, so they scale naturally
- No JavaScript or external dependencies are required

### Technical Requirements

- Pure CSS — no JavaScript required
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Open `demo.html` directly in a browser — no server needed
- Valid CSS syntax with `@keyframes`, `translateX(-200%)`, overshoot (`8%`), pullback (`-3%`), and final settle (`0`)