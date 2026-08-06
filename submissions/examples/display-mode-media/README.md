# display-mode Media Query

Demonstrates the `display-mode` media query for PWA display modes: `browser`, `minimal-ui`, `standalone`, and `fullscreen`. Shows mode preview cards, app-like header adjustments, and a feature comparison table.

## Usage

Open `demo.html` in a browser or install it as a PWA to see the display-mode media queries in effect. Each mode card highlights when that mode is active. The PWA header demo shows how an app bar might adjust in standalone mode with `env(safe-area-inset)` handling.

## Browser Support

`display-mode` is supported in Chrome, Edge, Safari, Firefox, and Samsung Internet for installed PWAs. The media query works when the page is launched in the specified display mode as defined in the manifest. Dark theme uses `#0a0f1e` background with `#e2e8f0` text.
