# CSS Morph-Glow Badge for Gaming Hub Layouts (#56512)

A lightweight, pure CSS **Morph-Glow Badge** component designed specifically for dark-themed Gaming Hubs, Esports Tournament Lobbies, and Cyber UI Dashboards.

## Features

- **Pure CSS / HTML**: Zero JavaScript required. Powered entirely by CSS keyframe animations, custom properties, and pseudo-classes (`:hover`, `:focus-visible`).
- **Morph-Glow Physics**:
  - **Organic Shape Morphing (`@keyframes ease-gh-morph`)**: The badge's `border-radius` fluidly oscillates between classic rounded pills and asymmetrical geometric squircles, simulating an unstable plasma energy core.
  - **Dynamic Glow Pulsing (`@keyframes ease-gh-glow-pulse`)**: The neon drop-shadow continuously breathes in spread and intensity.
  - **Interactive Lock**: Upon hover or keyboard focus, the badge snaps into a stable squircle state, pauses morphing, and intensifies its plasma aura.
- **Gaming Hub Aesthetic**: Sleek dark-mode styling (`#07090e`), high-contrast neon variants (Plasma Pink, Cyan, Emerald, Purple), and backdrop blur glassmorphism.
- **Staggered Rhythm**: Includes utility classes like `.delay-1` and `.delay-2` for asynchronous morphing across multiple badges.
- **Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support that disables shape morphing and glowing pulses while preserving static high-contrast visibility.

## Custom Properties

Modify morphing timing and glow colors directly in `:root`:

```css
:root {
  --badge-morph-duration: 4s;
  --badge-glow-duration: 3s;
  --badge-morph-ease: ease-in-out;
  --badge-glow-plasma: rgba(255, 0, 127, 0.65);
}
```

## How It Works

1. The `.ease-badge-morph-glow` class applies composite keyframes targeting `border-radius` and `filter`.
2. On `:hover` and `:focus-visible`, it locks `border-radius: 8px` and pauses the animation for stable interaction.
3. Seamlessly integrates with standard EaseMotion CSS design tokens (`var(--ease-space-6)`, `var(--ease-radius-xl)`, etc.).

## Usage Instructions

1. Open `demo.html` in your web browser to view the live gaming lobby card.
2. Observe the continuous shape morphing and glowing aura on the status badges.
3. Hover your cursor to test the interactive stabilization snap.
4. Enable OS-level "Reduce motion" settings to verify accessible fallback behavior.
