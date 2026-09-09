# Retro Arcade Pixel CSS Rating Component

A pure HTML + Vanilla CSS interactive rating and player feedback interface with an authentic 8-bit retro arcade aesthetic.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external assets, or build scripts.
- **Authentic 8-Bit Pixel Styling**: Features crisp pixel-art star icons (`shape-rendering="crispEdges"`), CRT scanlines, and stepped arcade borders.
- **Dynamic CSS Feedback**: Displays real-time score rating status ("TRY AGAIN!", "STAGE CLEARED!", "HIGH SCORE! PLAYER APPROVED!") using pure CSS selectors.
- **100% Accessible**: Built using native HTML `<fieldset>`, `<legend>`, and accessible `<input type="radio">` controls with complete keyboard navigation (`Tab` and `Arrow` keys).
- **Clear `:focus-visible` States**: Dedicated arcade cyan pixel focus outline around active controls.
- **Responsive & Mobile-Ready**: Scales smoothly down to 320px viewports with touch-friendly targets.
- **Theme Adaptability & Motion Controls**: Full support for `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` in your HTML file and use the `<fieldset>` structure from `demo.html`.

### Customization Variables

```css
:root {
  --rating-size: 2.75rem;
  --arcade-bg: #0b0c16;
  --arcade-surface: #141829;
  --arcade-primary: #00f0ff;
  --arcade-secondary: #ff0055;
  --arcade-selected: #ffe600;
  --arcade-text: #f0f3f8;
  --arcade-muted: #7e8bb6;
}
```
