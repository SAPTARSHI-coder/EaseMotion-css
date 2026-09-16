# CSS Skew-Active Modal for Cyberpunk Neon Layouts

A pure HTML5 & CSS3 **Skew-Active Modal** component engineered for futuristic Cyberpunk Neon user interfaces and web layouts. It features dynamic skew keyframe entrance animations, pure CSS `:target` state activation, neon cyan and magenta glassmorphism dialogs, and responsive skew action triggers.

## Features

- **Pure HTML5 & CSS3**: No JavaScript dependencies required (powered by CSS `:target` triggers).
- **Skew-Active Transformation**: Smooth keyframe entrance sequence transitioning from skewed perspective to crisp centered active alignment.
- **Interactive Skew Buttons**: Cyberpunk angled buttons with skew active transform hover states (`transform: skewX(-10deg)`).
- **Cyberpunk Neon Visuals**: High-tech telemetry overlays, dark glassmorphism backdrops, and glowing cyan/magenta indicators.
- **Accessible & Motion Safe**: Includes `:focus-visible` ring indicators and `@media (prefers-reduced-motion: reduce)` support.

## Folder Structure

```text
64714-css-skew-active-modal-cyberpunk-neon-layouts/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Click any of the trigger buttons to activate the skew modal dialog via URL target anchor (`#modal-alpha` / `#modal-beta`).
3. Click the backdrop, close button (`×`), or action buttons (`ABORT` / `DISCONNECT`) to close the modal.
4. Easily customize theme colors, glow intensities, and skew angles via CSS custom properties.

## CSS Custom Properties

```css
:root {
  --neon-cyan: #00f3ff;
  --neon-pink: #ff007f;
  --neon-yellow: #ffe600;
  --bg-dark: #070812;
  --surface-card: rgba(15, 17, 34, 0.9);
  --border-cyan: rgba(0, 243, 255, 0.4);
  --border-pink: rgba(255, 0, 127, 0.4);
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --shadow-cyan: 0 0 30px rgba(0, 243, 255, 0.3);
  --shadow-pink: 0 0 30px rgba(255, 0, 127, 0.3);
  --radius-card: 16px;
  --radius-btn: 8px;
}
```

## License

Created for EaseMotion CSS under contribution guidelines for showcase and educational purposes.
