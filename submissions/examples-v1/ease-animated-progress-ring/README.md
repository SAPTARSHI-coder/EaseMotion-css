# CSS-Only Animated Progress Ring Tracker (`ease-animated-progress-ring`)

A beautifully animated, circular progress tracker built entirely with CSS and SVG. It calculates the correct dash offset dynamically using native CSS `calc()` based on a single inline `--progress` variable!

## 🚀 Features

- **Zero-JS Animation**: The progress bar fills up smoothly upon page load using CSS `@keyframes`.
- **Math in CSS**: Uses `calc()` to map a percentage value (e.g., `--progress: 75`) to the exact SVG `stroke-dashoffset` required for the ring's circumference.
- **Accessible**: Uses `role="progressbar"` and `aria-valuenow` so screen readers can correctly announce the value.
- **Dark Mode Aware**: Uses `prefers-color-scheme` to soften the track colors and brighten the fill colors on dark backgrounds.
- **Motion Safe**: Completely disables the drawing animation duration when `prefers-reduced-motion` is active.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

Simply apply an inline style setting the `--progress` variable to your desired percentage:

```html
<div class="ease-animated-progress-ring-tracker" style="--progress: 85;">
  <svg class="ease-progress-ring" viewBox="0 0 120 120">
    <circle class="ease-progress-ring__track" cx="60" cy="60" r="54" />
    <circle class="ease-progress-ring__fill" cx="60" cy="60" r="54" />
  </svg>
  <div class="ease-progress-label">85%</div>
</div>
