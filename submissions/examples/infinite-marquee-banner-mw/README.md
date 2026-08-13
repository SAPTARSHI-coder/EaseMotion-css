# Infinite Marquee Feature Showcase Banner for SaaS Landing Pages

> A pure CSS infinite dual-direction marquee banner component for SaaS landing pages, featuring gradient edge fade masks, pause-on-hover, hardware-accelerated GPU animation, and accessible reduced-motion support.

## Features

- **Dual-Track Infinite Scroll** — Two rows of integration cards scroll in opposite directions (`marqueeLeft` and `marqueeRight`) using `@keyframes` + `translate3d` for buttery 60fps GPU-accelerated performance.
- **Seamless Loop** — Content is duplicated in a second `aria-hidden` `.marquee-group`, and keyframes translate exactly `-50%` so the loop resets invisibly at the midpoint — zero visible jump or stutter.
- **CSS Gradient Edge Fade Masks** — The `.marquee-container` uses `mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)` for smooth left and right fade-out without extra DOM overlay elements.
- **Pause on Hover** — Hovering any card or track sets `animation-play-state: paused` via CSS, instantly freezing the marquee with no layout shift.
- **Interactive Speed Slider** — A range input updates the `--marquee-duration` CSS custom property in real time, controlling scroll speed without restarting the animation.
- **Reverse Direction Control** — A toggle button swaps the `animation-name` values for both tracks, reversing flow while preserving animation state.
- **`prefers-reduced-motion` Compliant** — Automatically pauses all marquee animations for users who have enabled reduced motion in their OS preferences.

---

## Directory Structure

```
submissions/examples/infinite-marquee-banner-mw/
├── index.html    — Semantic HTML marquee layout with dual card tracks and control toolbar
├── style.css    — Pure CSS @keyframes, mask-image fade edges, hover pause, and brand icon tints
├── script.js    — Minimal JS for speed slider, global pause toggle, and direction reversal
└── README.md    — Component documentation
```

---

## How the Seamless Loop Works

```
┌─────────────────────────────────────────────────────┐
│  [Group A: 6 cards] [Group B: 6 cards — duplicate]  │
└─────────────────────────────────────────────────────┘
         ↑ Total track width = 2× card group width
         ↑ @keyframes translates 0% → -50% (exactly one group width)
         ↑ Loop resets invisibly back to 0% — seamless!
```

The key is that `@keyframes marqueeLeft` translates only `-50%` — exactly the width of one content group — so when it loops back to `0%`, the visual position appears identical.

---

## CSS Custom Properties

| Variable | Default | Purpose |
|---|---|---|
| `--marquee-duration` | `28s` | Total animation duration for one full scroll cycle |
| `--marquee-gap` | `1.25rem` | Gap between individual marquee cards |

### Speed Examples
```css
/* Faster — social proof sections */
--marquee-duration: 15s;

/* Slower — logo grids with more content */
--marquee-duration: 45s;
```

---

## Usage

```html
<div class="marquee-container">
  <div class="marquee-track track-left">
    <!-- Group A (primary) -->
    <div class="marquee-group">
      <article class="marquee-card"> ... </article>
    </div>
    <!-- Group B (duplicate, aria-hidden) -->
    <div class="marquee-group" aria-hidden="true">
      <article class="marquee-card"> ... </article>
    </div>
  </div>
</div>
```

Add `track-right` for the reverse direction row:
```html
<div class="marquee-track track-right"> ... </div>
```

---

## Acceptance Criteria Checklist ✅

- [x] Isolated inside `submissions/examples/infinite-marquee-banner-mw/`.
- [x] Marquee loops infinitely without visible jump or stutter at reset point.
- [x] Left and right edges fade out smoothly using CSS gradient `mask-image`.
- [x] Hovering mouse over any marquee card pauses the animation smoothly.
- [x] Hardware-accelerated GPU execution (`translate3d`) for 60fps performance.
- [x] `prefers-reduced-motion: reduce` pauses scrolling for motion-sensitive users.

---

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
