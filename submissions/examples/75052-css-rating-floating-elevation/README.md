# Floating Elevation CSS Rating Component

A pure HTML + Vanilla CSS interactive rating and feedback component featuring a "Floating Elevation" visual identity where rating options physically appear to float above the surface with multi-layered depth, elevation lift, and tactile press states.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Floating Elevation Identity**: Multi-layered depth shadows (`--elevation-shadow-low` to `--elevation-shadow-high`), surface highlights, and GPU-accelerated vertical translation (`transform: translateY(...)`) create physical depth separation (`grounded` &rarr; `lifted` &rarr; `elevated`).
- **Dynamic CSS Feedback**: Displays real-time score status ("1/5 - VERY POOR SCORE", "3/5 - AVERAGE SCORE", "5/5 - EXCELLENT SCORE") in pure CSS via `:has()` selectors.
- **100% Accessible**: Built with native `<fieldset>`, `<legend>`, and accessible `<input type="radio">` controls with complete keyboard navigation (`Tab` and `Arrow` keys).
- **Clear `:focus-visible` States**: Dedicated focus ring around active controls.
- **Responsive & Touch Friendly**: Scales down smoothly to mobile viewports (320px–480px) with touch-friendly target sizes.
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use the semantic `<fieldset>` structure from `demo.html`:

```html
<fieldset class="floating-rating-fieldset">
  <legend class="floating-rating-legend">
    HOW WOULD YOU RATE YOUR EXPERIENCE?
  </legend>

  <div class="floating-rating-group">
    <input
      type="radio"
      id="elevation-star-5"
      name="rating"
      value="5"
      class="floating-rating-input"
    />
    <label for="elevation-star-5" class="floating-rating-node">
      <span class="node-icon" aria-hidden="true">★</span>
      <span class="node-number">5</span>
    </label>
    <!-- Repeat for ratings 4 through 1 -->
  </div>
</fieldset>
```

### Customization Variables

```css
:root {
  --node-size: 3.2rem;
  --elevation-bg: #f8fafc;
  --elevation-surface: #ffffff;
  --elevation-accent: #0284c7;
  --elevation-star-gold: #f59e0b;
}
```
