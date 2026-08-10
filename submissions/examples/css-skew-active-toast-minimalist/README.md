# CSS Skew-Active Toast

A purely CSS-driven toast notification tailored for minimalist tech layouts. It features a modern dark theme, smooth slide-in animations with a subtle skew effect, and interactive hover states that bring the component to life.

## Features

- **Pure CSS**: No JavaScript required for animations or states.
- **Skew-Active Animation**: A unique entrance animation combining `translate`, `skew`, and `opacity`.
- **Interactive Hover States**: Subtle scaling and an accent color border line reveal on hover.
- **Accessibility**: Includes `prefers-reduced-motion` support for a simpler, fade-in experience.
- **Responsive**: Adapts perfectly to mobile and desktop screens.

## Usage

```html
<div class="toast-container">
  <div class="toast-minimalist">
    <div class="toast-icon">
      <!-- Your Icon SVG Here -->
    </div>
    <div class="toast-content">
      <span class="toast-title">System Status</span>
      <span class="toast-message">Deployment completed successfully.</span>
    </div>
    <button class="toast-close" aria-label="Close toast">
      <!-- Close Icon SVG Here -->
    </button>
  </div>
</div>
```

## Why is it useful?

This component perfectly embodies the EaseMotion philosophy by delivering a high-quality, lightweight, and engaging interaction using only standard CSS properties. It provides a polished and premium feel for tech-focused applications without the overhead of heavy JavaScript libraries.
