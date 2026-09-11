# ease-matrix-rain — Digital Rain Background Utility

**Fixes:** Issue #11900

## Overview

A pure CSS background animation that creates the iconic "Matrix digital rain" effect. It uses pseudo-elements stacked vertically with `writing-mode`, falling via a `translateY` animation, and fading out using a linear gradient mask.

## Usage

For the best effect, use this on a relatively large container (like a hero section or a full-screen background).

```html
<!-- Default Green Matrix Rain -->
<section class="ease-matrix-rain">
  <h1>Hack The Planet</h1>
</section>

<!-- Fast Blue Variant -->
<div class="card ease-matrix-rain ease-matrix-rain-blue ease-matrix-rain-fast">
  <h3>Secure Data Access</h3>
</div>
```

## Variants

| Class                    | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `.ease-matrix-rain`      | Default green falling characters (4s/6s dual layers) |
| `.ease-matrix-rain-fast` | Faster falling speeds (2s/3s)                        |
| `.ease-matrix-rain-blue` | Blue color scheme                                    |
| `.ease-matrix-rain-red`  | Red/Crimson color scheme                             |

## Customization

You can fully customize the colors, speeds, and font using CSS variables on your container:

```css
.my-custom-rain {
  --ease-matrix-color: #ff00ff; /* Pink text */
  --ease-matrix-bg: #1a001a; /* Dark pink background */
  --ease-matrix-speed-1: 3s; /* Foreground speed */
  --ease-matrix-speed-2: 5s; /* Background speed */
  --ease-matrix-font: "Fira Code", monospace;
}
```

## Technical Implementation

- **Repeating Characters:** Long strings of binary/hex characters are embedded in the `content` property of `::before` and `::after`.
- **Columns:** The text is rotated vertically using `writing-mode: vertical-rl` and `text-orientation: upright`, making the characters stack into columns.
- **Parallax Speeds:** The `::before` layer is larger and falls faster. The `::after` layer is smaller, dimmer, offset slightly, and falls slower, creating an illusion of 3D depth and randomness.
- **Fade Out:** `mask-image: linear-gradient()` ensures the bottom of the "rain" fades smoothly into the background color instead of ending abruptly.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-matrix-rain::before,
  .ease-matrix-rain::after {
    animation: none !important;
    display: none !important;
  }
}
```

The animation and the text pseudo-elements are completely hidden for users who prefer reduced motion, falling back to the solid dark background to avoid distraction.

## Acceptance Criteria

- [x] Pseudo-elements with repeating character content
- [x] `translateY` animation from top to bottom
- [x] Random speeds per column (simulated via overlapping layers with different durations)
- [x] Green color scheme with fade-out
- [x] `prefers-reduced-motion` fallback included
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
