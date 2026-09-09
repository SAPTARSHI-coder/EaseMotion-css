# Documentation: Neon Pulse Glow SCSS Animation (#81669)

Comprehensive documentation guide, keyframe definitions, utility class usage examples, and accessibility notes for the EaseMotion core animation library (`#81669`).

## 🚀 Overview & Features

- **Neon Pulse Glow Animation:** Introduces `@keyframes ease-neon-pulse-glow` and utility class `.ease-anim-neon-pulse-glow` for vibrant, pulsating neon glow effects.
- **Configurable Timing:** Supports custom CSS variables `--ease-duration` and `--ease-timing`.
- **Hardware Acceleration:** Engineered using `transform`, `opacity`, and CSS filters to guarantee silky-smooth 60 FPS performance.
- **Accessibility:** Fully honors `prefers-reduced-motion: reduce` by disabling animations for users with vestibular sensitivities.

## 🛠️ Usage Example

```html
<div class="ease-anim-neon-pulse-glow">
  <h2>Glowing Neon Card</h2>
</div>
