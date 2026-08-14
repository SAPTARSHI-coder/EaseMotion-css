# CSS Shimmer-Sweep Badge for Gaming Hub Layouts (#56500)

A lightweight, pure CSS **Shimmer-Sweep Badge** component designed specifically for dark-themed Gaming Hubs, Esports Tournament Lobbies, and Cyber UI Dashboards.

## Features

- **Pure CSS / HTML**: No JavaScript required. Powered entirely by CSS keyframe animations, custom properties, and pseudo-elements (`::after`).
- **Shimmer-Sweep Physics**:
  - **Holographic Beam (`@keyframes ease-gh-shimmer-sweep`)**: An absolutely positioned pseudo-element with an angled linear gradient sweeps across the badge surface, simulating high-tech energy recharge or legendary rarity.
  - **Interactive Speed Boost**: Upon hover or keyboard focus, the shimmer sweep accelerates and elevates its neon border glow.
- **Gaming Hub Aesthetic**: Sleek dark-mode styling (`#07090e`), high-contrast neon variants (Gold, Cyan, Purple, Crimson), and backdrop blur glassmorphism.
- **Staggered Rhythm**: Includes utility classes like `.delay-1` and `.delay-2` for asynchronous beam sweeping across multiple badges.
- **Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support that disables the sweeping animation while preserving high-contrast static visibility.

## Custom Properties

Modify shimmer timing and glow colors directly in `:root`:

```css
:root {
  --badge-shimmer-duration: 2.8s;
  --badge-shimmer-angle: 110deg;
  --badge-shimmer-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --badge-glow-gold: rgba(245, 158, 11, 0.65);
}
```

## How It Works

1. The `.ease-badge-shimmer-sweep` container sets `overflow: hidden` and relative positioning.
2. The `::after` pseudo-element translates across from `-150%` to `150%` using `@keyframes ease-gh-shimmer-sweep`.
3. Seamlessly integrates with standard EaseMotion CSS design tokens (`var(--ease-space-6)`, `var(--ease-radius-xl)`, etc.).

## Usage Instructions

1. Open `demo.html` in your web browser to view the live gaming lobby card.
2. Hover your mouse or use keyboard `Tab` navigation to focus on the badges and trigger the accelerated shimmer sweep.
3. Enable OS-level "Reduce motion" settings to verify accessible fallback behavior.
