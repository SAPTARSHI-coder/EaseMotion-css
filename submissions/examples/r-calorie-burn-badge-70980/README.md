# CSS Calorie Burn Badge

A responsive CSS-only calorie burn badge featuring an animated flame indicator, calorie count, progress bar, and activity statistics.

## Features

- Pure CSS implementation
- Animated flame effect
- Active calorie count
- Daily calorie goal
- Animated progress indicator
- Activity statistics
- Responsive design
- Hover interactions
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Component demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

Add the badge structure to your page:

```html
<article class="calorie-card">
  <div class="badge-icon" aria-hidden="true">
    <span class="flame">
      <span class="flame-inner"></span>
    </span>
  </div>

  <div class="badge-content">
    <span class="label">Active calories</span>

    <div class="calorie-value">
      <strong>486</strong>
      <span>kcal</span>
    </div>
  </div>
</article>