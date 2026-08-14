# Morphing Shape CSS Rating Component

A pure HTML + Vanilla CSS interactive rating and feedback component featuring a "Morphing Shape" visual identity where rating elements transform their geometric shape (`border-radius`, `transform`, `box-shadow`) during hover and selection interactions.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Morphing Shape Identity**: Smooth geometric shape transformations (`border-radius: 14px` squircle &rarr; `45% 55% 65% 35% / 45% 45% 55% 55%` organic blob &rarr; `24px 6px 24px 6px` geometric pill) with rich gradient fills and glowing shadows.
- **Dynamic CSS Feedback**: Displays real-time score status ("1/5 - VERY POOR SCORE", "3/5 - AVERAGE SCORE", "5/5 - EXCELLENT SCORE") in pure CSS via `:has()` selectors.
- **100% Accessible**: Built with native `<fieldset>`, `<legend>`, and accessible `<input type="radio">` controls with complete keyboard navigation (`Tab` and `Arrow` keys).
- **Clear `:focus-visible` States**: Dedicated violet focus ring around active controls.
- **Responsive & Touch Friendly**: Scales down smoothly to mobile viewports (320px–480px) with touch-friendly target sizes.
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use the semantic `<fieldset>` structure from `demo.html`:

```html
<fieldset class="morph-rating-fieldset">
  <legend class="morph-rating-legend">
    HOW WOULD YOU RATE YOUR EXPERIENCE?
  </legend>

  <div class="morph-rating-group">
    <input
      type="radio"
      id="morph-star-5"
      name="rating"
      value="5"
      class="morph-rating-input"
    />
    <label for="morph-star-5" class="morph-rating-node">
      <span class="node-shape-wrapper">
        <span class="node-number">5</span>
      </span>
    </label>
    <!-- Repeat for ratings 4 through 1 -->
  </div>
</fieldset>
```

### Customization Variables

```css
:root {
  --node-size: 3.1rem;
  --morph-bg: #0f172a;
  --morph-surface: #1e293b;
  --morph-accent: #a855f7;
  --morph-indigo: #6366f1;
}
```
