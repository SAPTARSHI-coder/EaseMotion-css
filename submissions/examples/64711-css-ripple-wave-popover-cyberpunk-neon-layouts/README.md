# CSS Ripple-Wave Popover for Cyberpunk Neon Layouts

A pure HTML5 & CSS3 **Ripple-Wave Popover** component designed for futuristic Cyberpunk Neon layouts and user interfaces. This component features interactive popover triggers with ripple-wave hover and focus animations, dark neon grid styling, glassmorphism telemetry cards, and complete accessibility support.

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript required.
- **Ripple-Wave Animation**: Pulsing concentric wave keyframe expansion on trigger hover and keyboard focus.
- **Cyberpunk Neon Aesthetics**: Cyber dark background, neon cyan, pink, and purple glows, with high-tech telemetry UI elements.
- **Glassmorphism & Grid Backdrop**: Backdrop filters with subtle scanlines and grid patterns.
- **Keyboard Accessible**: Fully operable via keyboard (`:focus`, `:focus-visible`, and `:focus-within`).
- **Responsive**: Seamless layout adaptation for mobile, tablet, and desktop screens.
- **Motion Safe**: Includes `@media (prefers-reduced-motion: reduce)` support.

## Folder Structure

```text
64711-css-ripple-wave-popover-cyberpunk-neon-layouts/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Hover over or focus on the **SYS DETAILS** trigger button to reveal the telemetry popover with ripple-wave animation.
3. Customize colors and keyframe timing using CSS Custom Properties in `style.css`.

## CSS Custom Properties

```css
:root {
  --neon-cyan: #00f3ff;
  --neon-pink: #ff007f;
  --neon-yellow: #ffe600;
  --neon-purple: #9d4edd;
  --bg-dark: #080914;
  --surface-card: rgba(16, 18, 38, 0.88);
  --border-neon: rgba(0, 243, 255, 0.3);
  --text-main: #e2e8f0;
  --text-muted: #94a3b8;
  --shadow-glow: 0 0 25px rgba(0, 243, 255, 0.25);
  --radius-card: 16px;
  --radius-btn: 8px;
}
```

## License

Created for EaseMotion CSS under contribution guidelines for showcase and educational purposes.
