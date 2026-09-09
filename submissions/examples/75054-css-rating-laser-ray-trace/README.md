# Laser Ray Trace CSS Rating Component

A pure HTML + Vanilla CSS interactive rating and feedback component featuring a "Laser Ray Trace" visual identity with horizontal laser beam tracks, scanning target nodes, and dynamic CSS status feedback.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Laser Ray Trace Identity**: Laser beam track line, concentric laser target nodes (`.laser-target-ring`), bright laser cyan core (`#00f0ff`), and drop-shadow laser glow.
- **Dynamic CSS Feedback**: Displays real-time laser scanner status ("1/5 - POOR SCORE", "3/5 - AVERAGE SCORE", "5/5 - MAXIMUM POWER! EXCELLENT SCORE") in pure CSS via `:has()` selectors.
- **100% Accessible**: Built with native `<fieldset>`, `<legend>`, and accessible `<input type="radio">` controls with complete keyboard navigation (`Tab` and `Arrow` keys).
- **Clear `:focus-visible` States**: Dedicated laser cyan focus ring around active controls.
- **Responsive & Touch Friendly**: Scales down smoothly to mobile viewports (320px–480px) with touch-friendly target sizes.
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use the semantic `<fieldset>` structure from `demo.html`:

```html
<fieldset class="laser-rating-fieldset">
  <legend class="laser-rating-legend">RATE YOUR EXPERIENCE</legend>

  <div class="laser-rating-group">
    <div class="laser-track-line" aria-hidden="true"></div>

    <input
      type="radio"
      id="laser-star-5"
      name="rating"
      value="5"
      class="laser-rating-input"
    />
    <label for="laser-star-5" class="laser-rating-node">
      <span class="laser-target-ring"></span>
      <span class="node-number">5</span>
    </label>
    <!-- Repeat for ratings 4 through 1 -->
  </div>
</fieldset>
```

### Customization Variables

```css
:root {
  --node-size: 2.8rem;
  --laser-bg: #070a12;
  --laser-surface: #0f1626;
  --laser-primary: #00f0ff;
  --laser-core: #ffffff;
  --laser-glow: rgba(0, 240, 255, 0.6);
  --laser-text: #f0f6ff;
}
```
