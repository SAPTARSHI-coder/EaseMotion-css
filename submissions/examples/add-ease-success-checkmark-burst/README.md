# Success Checkmark Burst (add-ease-success-checkmark-burst)

A premium success checkmark animation that draws itself dynamically combined with an expanding ripple ring and a celebratory particle burst. Designed for high-impact success moments such as transaction completion, task resolution, or achievement unlocks.

## What does this do?

This combination animation coordinates three distinct visual phases:
1. **Circle outline drawing**: An SVG circle path draws its stroke in a smooth motion.
2. **Success fill & Checkmark drawing**: The circle fills with success green, and the white checkmark path draws itself from left to right.
3. **Celebratory Ripple & Particle Burst**: A subtle wave ripple expands outwards, while colorful particles (mix of circles and squares/confetti) explode radially from the center of the checkmark, decelerating and shrinking as they fade out.

## How is it used?

Include the stylesheet in your project, then structure your markup as follows:

```html
<div class="ease-checkmark-wrapper ease-animate">
  <!-- Checkmark SVG -->
  <svg class="ease-checkmark-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
    <circle class="ease-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
    <path class="ease-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
  </svg>
  
  <!-- Outer expansion ripple -->
  <div class="ease-checkmark-ripple"></div>

  <!-- Celebratory particles -->
  <div class="ease-burst-container">
    <div class="particle" style="--angle: 0deg; --distance: 70px; --color: #4ade80; --size: 6px;"></div>
    <div class="particle" style="--angle: 45deg; --distance: 80px; --color: #60a5fa; --size: 8px;"></div>
    <div class="particle" style="--angle: 90deg; --distance: 65px; --color: #f43f5e; --size: 5px;"></div>
    <div class="particle" style="--angle: 135deg; --distance: 75px; --color: #fbbf24; --size: 7px;"></div>
    <div class="particle" style="--angle: 180deg; --distance: 90px; --color: #c084fc; --size: 6px;"></div>
    <div class="particle" style="--angle: 225deg; --distance: 70px; --color: #2dd4bf; --size: 8px;"></div>
    <div class="particle" style="--angle: 270deg; --distance: 85px; --color: #fbbf24; --size: 5px;"></div>
    <div class="particle" style="--angle: 315deg; --distance: 60px; --color: #f43f5e; --size: 7px;"></div>
  </div>
</div>
```

To run or replay the animation, simply toggle/add the `.ease-animate` class on the `.ease-checkmark-wrapper` element.

## Customizability

You can fully customize the radial burst via inline style properties on each particle:

- `--angle`: The direction the particle travels (e.g. `45deg`, `180deg`).
- `--distance`: How far outward the particle explodes (e.g. `70px`, `100px`).
- `--color`: The background color of the particle (e.g. Hex code, HSL, RGB).
- `--size`: Sizing of the particle (e.g. `5px`, `8px`).
- `--radius`: Shape contour. Use `50%` for circles, `0%` for squares, and values in between for rounded squares/leaves.

## Animation Specs & Timings

- **Duration**: `1.8s` (active movement completes within `1.1s`, followed by a brief fade).
- **Circle Draw**: `0.6s` (`cubic-bezier(0.25, 1, 0.5, 1)`)
- **Circle Fill**: `0.4s` (starts at `0.4s`)
- **Checkmark Draw**: `0.35s` (starts at `0.6s`)
- **Checkmark Scale Pop**: `0.3s` (starts at `0.8s`)
- **Ripple & Particle Burst**: `0.8s` - `1.0s` (starts at `0.8s` with heavy physics deceleration `cubic-bezier(0.1, 0.8, 0.3, 1)`)

## Design Tokens Used
This example links directly to the EaseMotion CSS core theme variables, integrating the following tokens:
- `--ease-color-success`: Green success color.
- `--ease-color-bg` & `--ease-color-surface`: Adaptable backgrounds.
- `--ease-ease-bounce`: Custom spring/bounce easing curve.
- `--ease-speed-medium`: Transition timing basis.

## Accessibility (a11y)
- Supports the `prefers-reduced-motion: reduce` media query. When motion is reduced:
  - The checkmark SVG instantly renders in its completed, fully drawn state.
  - The particle burst, scaling pop, and ripple ring are bypassed completely to prevent layout noise.

## Performance
- Confetti explosion and ripple calculations utilize GPU-accelerated CSS properties (`transform` and `opacity` only).
- Bypasses layout thrashing and paints efficiently to guarantee a smooth 60fps experience.
