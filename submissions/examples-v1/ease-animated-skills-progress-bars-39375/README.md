# Ease Animated Skills Progress Bars

## Description
A set of horizontal skill/proficiency bars that animate from 0 to their target width when scrolled into view, with a glowing shimmer sweep and staggered delay per bar. Commonly used in portfolio/resume pages.

## How it works
The fill animation is pure CSS — each `.skill-fill` transitions `transform: scaleX()` from `0` to a target value (set per-bar via the `--fill-scale` custom property), with a glow (`box-shadow`) and a shimmer highlight that sweeps across it. A small script (`skills-reveal.js`) uses `IntersectionObserver` to add an `.is-visible` class to the `.skills-container` once it scrolls into view, which triggers the CSS transition. JS only toggles visibility state — all animation, glow, easing, and stagger timing is CSS-driven.

## Usage
```html
<link rel="stylesheet" href="style.css" />

<div class="skills-container">
  <div class="skill-bar">
    <span class="skill-label">HTML/CSS</span>
    <div class="skill-track">
      <div class="skill-fill" style="--fill-scale: 0.9"></div>
    </div>
    <span class="skill-percent">90%</span>
  </div>
  <!-- more .skill-bar entries -->
</div>

<script src="skills-reveal.js"></script>
```
Set `--fill-scale` to a decimal between `0` and `1` (e.g. `0.9` for 90%) on each `.skill-fill`, and update the `.skill-percent` label text to match.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--skill-duration` | `1.1s` | Fill animation duration |
| `--skill-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--skill-stagger` | `0.15s` | Delay increment between each bar |
| `--skill-fill-start` | `#38bdf8` | Fill gradient start color |
| `--skill-fill-end` | `#a78bfa` | Fill gradient end color |
| `--skill-glow` | `rgba(56, 189, 248, 0.5)` | Glow shadow color |
| `--skill-track-bg` | `#2d3348` | Empty track background |
| `--skill-height` | `12px` | Bar thickness |

## Accessibility & Motion
Uses `transform: scaleX()` rather than animating `width` directly, which is GPU-accelerated and avoids layout thrashing. Respects `prefers-reduced-motion` by disabling transitions/animations (bars still reach full width with a static glow, just instantly).

## Files
- `demo.html` — live example with scroll-to-reveal spacer
- `style.css` — component styles
- `skills-reveal.js` — minimal IntersectionObserver script for scroll reveal
- `README.md` — this file