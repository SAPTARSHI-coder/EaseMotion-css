# Animated Striped Progress Bar Component Sandbox

## Overview
A CSS-driven animated striped progress bar component that demonstrates continuous diagonal stripe motion combined with a smooth width transition on the fill element. The bar animates from 0% to 75% on page load and supports replay via a reset button.

## 📁 Sandbox Configuration Files
* `demo.html` — Standalone presentation with Inter font, heading, progress bar display with percentage label, and a reset/replay button.
* `style.css` — Scoped custom properties, gradient stripe background on the fill element, `@keyframes pbsa-stripes` for continuous stripe animation, and a smooth `width` transition on the progress value.

## 🚀 Key Layout Mechanics
1. **Custom Properties Driven:** All visual knobs (`--pbsa-height`, `--pbsa-bar-color`, `--pbsa-bg-color`, `--pbsa-stripe-color`, `--pbsa-duration`) are exposed as `:root` variables for easy theming.
2. **Continuous Stripe Animation:** The fill uses a `linear-gradient` with diagonal transparent/colored bands and a `background-position` keyframe loop that shifts infinitely at `--pbsa-duration` speed.
3. **Smooth Width Transition:** The `width` property on `.pbsa-progress-bar-fill` is driven by the `--pbsa-progress` CSS custom property and transitions with an easing curve for a polished feel.
