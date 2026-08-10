# CSS Shimmer-Sweep Modal for Cyberpunk Neon Layouts

A pure HTML5 & CSS3 **Shimmer-Sweep Modal** component engineered for futuristic Cyberpunk Neon user interfaces and web layouts. It features high-speed luminous shimmer beam sweep keyframes, pure CSS `:target` state activation, neon cyan and purple glassmorphism modal dialogs, and interactive trigger buttons.

## Features

- **Pure HTML5 & CSS3**: Powered by CSS `:target` triggers with zero JavaScript dependency.
- **Luminous Shimmer-Sweep Animation**: Continuous keyframe beam sweep (`@keyframes shimmerSweep`) across modal surfaces and border edges.
- **Cyberpunk Neon Visuals**: Futuristic quantum telemetry overlays, dark glassmorphism backdrops, and glowing cyan/purple indicators.
- **Interactive Shimmer Buttons**: Micro-shimmer light sweep triggers on hover and keyboard focus.
- **Accessible & Motion Safe**: Complete `:focus-visible` outline rings and `@media (prefers-reduced-motion: reduce)` support.

## Folder Structure

```text
64715-css-shimmer-sweep-modal-cyberpunk-neon-layouts/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Click any of the trigger buttons to open the shimmer-sweep modal dialog via URL target anchor (`#modal-vault` / `#modal-beacon`).
3. Click the backdrop, close button (`×`), or action buttons (`LOCK VAULT` / `MUTE BEACON`) to close the modal.
4. Easily customize sweep speed, beam gradients, and neon color palettes via CSS custom properties.

## CSS Custom Properties

```css
:root {
  --neon-cyan: #00f3ff;
  --neon-purple: #b400ff;
  --neon-pink: #ff007f;
  --bg-dark: #060712;
  --surface-card: rgba(14, 16, 30, 0.9);
  --border-cyan: rgba(0, 243, 255, 0.35);
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --shadow-cyan: 0 0 30px rgba(0, 243, 255, 0.3);
  --shadow-purple: 0 0 30px rgba(180, 0, 255, 0.3);
  --radius-card: 16px;
  --radius-btn: 8px;
}
```

## License

Created for EaseMotion CSS under contribution guidelines for showcase and educational purposes.
