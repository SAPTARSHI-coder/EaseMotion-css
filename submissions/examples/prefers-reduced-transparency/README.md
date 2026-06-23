# prefers-reduced-transparency

Demonstrates the `prefers-reduced-transparency` media query for users who need less transparency. Shows glassmorphism cards, blur level comparisons, and overlay modals with solid fallback backgrounds.

## Usage

Open `demo.html` and enable reduce transparency in your OS settings (Windows: Settings > Personalization > Colors > Transparency Effects, macOS: Accessibility > Display > Reduce Transparency). Glass surfaces become solid, blur effects are removed, and overlays become opaque.

## Browser Support

`prefers-reduced-transparency` is supported in Chrome 118+, Edge 118+, Safari, and Firefox. The demo uses `backdrop-filter` for glass effects with `@media (prefers-reduced-transparency: reduce)` fallbacks. Dark theme `#0a0f1e` with `#e2e8f0` text.
