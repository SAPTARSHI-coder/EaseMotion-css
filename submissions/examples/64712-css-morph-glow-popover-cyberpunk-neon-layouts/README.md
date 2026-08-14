# CSS Morph-Glow Popover for Cyberpunk Neon Layouts

A pure HTML5 & CSS3 **Morph-Glow Popover** component engineered for futuristic Cyberpunk Neon layouts. It features fluid organic shape border-radius morphing, dynamic pulsing gradient aura keyframes, dark glassmorphism cards, and complete accessibility support.

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript required.
- **Morph-Glow Animation**: Dynamic transition from organic fluid morph shapes (`border-radius: 50% 50% 30% 70%`) to sleek rounded cards (`border-radius: 16px`) with shifting neon gradient aura keyframes.
- **Cyberpunk Neon Visuals**: High-tech telemetry cards, vibrant neon cyan, pink, and amber indicators with dark cyber backdrop grid overlay.
- **Pulsing Glowing Orbs**: Micro-animated neon orb indicators inside trigger controls.
- **Accessible & Motion Safe**: Keyboard operable via `:focus` and `:focus-within`, with `@media (prefers-reduced-motion: reduce)` support.

## Folder Structure

```text
64712-css-morph-glow-popover-cyberpunk-neon-layouts/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Hover over or focus on the **SYS TELEMETRY** button to trigger the morph-glow popover animation.
3. Customize neon glow palettes and morphing speeds using CSS variables in `style.css`.

## CSS Custom Properties

```css
:root {
  --neon-cyan: #00f3ff;
  --neon-pink: #ff007f;
  --neon-amber: #ffaa00;
  --neon-purple: #b400ff;
  --bg-dark: #070814;
  --surface-card: rgba(14, 16, 32, 0.88);
  --border-cyan: rgba(0, 243, 255, 0.35);
  --text-main: #e2e8f0;
  --text-muted: #94a3b8;
  --shadow-cyan: 0 0 30px rgba(0, 243, 255, 0.3);
  --radius-card: 18px;
  --radius-btn: 10px;
}
```

## License

Created for EaseMotion CSS under contribution guidelines for showcase and educational purposes.
