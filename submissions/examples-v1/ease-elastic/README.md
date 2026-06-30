# ease-elastic

> Elastic/spring overshoot animations for EaseMotion CSS

## What it does

Applies a spring-like overshoot effect to hover and click interactions
using cubic-bezier transforms. Pure CSS, zero JavaScript.

## Usage

    <button class="ease-elastic">Hover me</button>

    <!-- Intensity variants -->
    <button class="ease-elastic-light">Light spring</button>
    <button class="ease-elastic-heavy">Heavy spring</button>

    <!-- Rotation variant -->
    <span class="ease-elastic-rotate">⭐</span>

    <!-- Pop-in on load -->
    <div class="ease-elastic-pop">🎉</div>

## Class Reference

| Class               | Description                                              |
| ------------------- | -------------------------------------------------------- |
| ease-elastic        | Default spring overshoot on hover, snappy press on click |
| ease-elastic-light  | Subtle overshoot, gentler spring                         |
| ease-elastic-heavy  | Dramatic overshoot, bouncier spring                      |
| ease-elastic-rotate | Spring rotation + scale on hover                         |
| ease-elastic-pop    | Elastic pop-in entrance animation                        |

## Accessibility

All variants respect `prefers-reduced-motion`. When enabled, transforms
and animations are disabled and elements render in their final state.

## CSS Variables used

None required -- all values are self-contained cubic-bezier curves,
compatible with the existing EaseMotion design tokens.

## Browser support

| Feature                  | Chrome | Edge | Firefox | Safari |
| ------------------------ | ------ | ---- | ------- | ------ |
| cubic-bezier transitions | yes    | yes  | yes     | yes    |
| CSS keyframe animations  | yes    | yes  | yes     | yes    |
| prefers-reduced-motion   | yes    | yes  | yes     | yes    |

Submitted under MIT License · EaseMotion CSS · 2026
