# Wobble Stopwatch — Finance Dashboard

A finance dashboard-inspired stopwatch component with wobble animation, built with EaseMotion CSS.

## Overview

This component features a circular stopwatch with a gentle wobble animation, progress ring, blinking separator, and stat cards with staggered wobble effects. The dark theme follows a finance dashboard aesthetic with green accent colors.

## Features

- **Wobble animation**: The stopwatch ring and stat cards gently wobble using the `ease-wobble` keyframe
- **Progress ring**: SVG-based circular progress indicator with animated stroke
- **Blinking separator**: Colon blinks with a CSS step animation mimicking a real timer
- **Finance dashboard theme**: Dark background with green (#3fb950) accent color
- **Pure CSS animations**: All visual effects are CSS-only, no JavaScript required
- **Responsive**: Adapts to smaller screens with reduced ring size
- **Accessibility**: Focus-visible outlines on controls, `role="timer"` and `aria-live` for screen readers
- **Reduced motion**: Respects `prefers-reduced-motion` preference

## Usage

1. Include EaseMotion CSS in your project
2. Add the HTML structure from `demo.html`
3. Include the styles from `style.css`
4. Add JavaScript to make the buttons functional (start/pause/reset)

## EaseMotion Integration

- Uses `--ease-*` CSS custom properties for design tokens
- `--ease-radius-*` for border radius tokens
- `--ease-font-*` for typography tokens
- Custom `@keyframes ease-wobble` follows EaseMotion naming convention
- `--wobble-delay` custom property for staggered stat card animation

## Animations

| Animation | Description | Duration |
|-----------|-------------|----------|
| `ease-wobble` | Gentle rotational wobble | 2-3s |
| `ease-progress-fill` | SVG stroke progress | 60s |
| `ease-blink` | Colon blink | 1s |

## Browser Support

Works in all modern browsers that support CSS custom properties, keyframe animations, and SVG.
