# CSS Bounce-Pulse Badge for Gaming Hub Layouts (#56508)

A lightweight, pure CSS **Bounce-Pulse Badge** component designed specifically for dark-themed Gaming Hubs, Esports Tournament Lobbies, and Cyber UI Dashboards.

## Features

- **Pure CSS / HTML**: Zero JavaScript required. The interaction is powered entirely by CSS keyframe animations, custom properties, and pseudo-elements.
- **Dual Physics Animation**:
  - **Elastic Bounce (`@keyframes ease-gh-bounce`)**: A tactile spring hop simulating physical momentum when active.
  - **Sonar Pulse Ring (`@keyframes ease-gh-pulse-ring`)**: An expanding glowing border ring radiating outward like a radar beacon.
- **Gaming Hub Aesthetic**: Sleek dark-mode styling (`#07090e`), neon color variants (Cyan, Purple, Emerald), and backdrop blur glassmorphism.
- **Staggered Rhythm**: Includes utility classes like `.delay-1` for asynchronous pulsing across multiple badges.
- **Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support that gracefully disables motion while preserving high-contrast visibility.

## Custom Properties

Modify timing and glow colors directly in `:root`:

```css
:root {
  --badge-bounce-duration: 2s;
  --badge-pulse-duration: 1.8s;
  --badge-bounce-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --badge-glow-cyan: rgba(0, 240, 255, 0.6);
}
```

## How It Works

1. The `.ease-badge-bounce-pulse` selector applies a vertical squash-and-stretch bounce transition.
2. The `::after` pseudo-element mirrors the badge border and expands outward using `scale()` and `opacity`.
3. Seamlessly integrates with standard EaseMotion CSS tokens for spacing, radii, and typography.

## Usage Instructions

1. Open `demo.html` in your web browser to inspect the gaming lobby card.
2. Observe the tactile bounce and radar ring pulse animations on the server status badges.
3. Enable OS-level "Reduce motion" settings to verify accessible fallback behavior.
