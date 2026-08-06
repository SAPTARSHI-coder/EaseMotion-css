# CSS Scale-Hover Badge for Gaming Hub Layouts (#56504)

A lightweight, pure CSS **Scale-Hover Badge** component designed specifically for dark-themed Gaming Hubs, Esports Tournament Lobbies, and Cyber UI Dashboards.

## Features

- **Pure CSS / HTML**: No JavaScript required. Powered entirely by CSS transitions, keyframes, custom properties, and pseudo-classes (`:hover`, `:focus-visible`).
- **Scale-Hover Physics**:
  - **Dynamic Zoom (`scale(var(--badge-scale-target))`)**: Upon hover or keyboard focus, the badge smoothly zooms outward with a tactile spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
  - **Intensified Cyber Glow**: Simultaneously elevates its neon drop-shadow and brightness, making the status badge pop out of the gaming card.
  - **Idle Floating (`@keyframes ease-gh-badge-float`)**: A subtle vertical breathing animation when idle that creates an organic, living interface.
- **Gaming Hub Aesthetic**: Sleek dark-mode styling (`#07090e`), multi-channel neon palettes (Purple, Cyan, Gold, Crimson), and backdrop blur glassmorphism.
- **Staggered Rhythm**: Includes utility classes like `.delay-1` and `.delay-2` for asynchronous floating across multiple badges.
- **Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support that disables idle floating and replaces scale motion with high-contrast color/brightness highlighting.

## Custom Properties

Modify scaling physics and glow colors directly in `:root`:

```css
:root {
  --badge-scale-target: 1.15;
  --badge-transition-duration: 300ms;
  --badge-scale-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --badge-glow-purple: rgba(168, 85, 247, 0.65);
}
```

## How It Works

1. The `.ease-badge-scale-hover` class binds a cubic-bezier transition to `transform`, `box-shadow`, and `filter`.
2. On `:hover` and `:focus-visible`, it scales to `1.15x` and shifts `translateY(-2px)` to simulate lifting toward the player.
3. Seamlessly integrates with standard EaseMotion CSS design tokens (`var(--ease-space-6)`, `var(--ease-radius-xl)`, etc.).

## Usage Instructions

1. Open `demo.html` in your web browser to view the gaming lobby card.
2. Hover your mouse or use keyboard `Tab` navigation to focus on the badges and experience the spring scale transition.
3. Enable OS-level "Reduce motion" settings to verify accessible fallback behavior.
