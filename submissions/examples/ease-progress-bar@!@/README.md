# Animated Progress Bars (`ease-progress-bar`)

## Overview
This submission introduces smooth, animated progress bars with multiple variants for different use cases: basic progress, labeled progress, success/warning/error states, animated stripes, and indeterminate loading.

## Features
- **Smooth Animation**: Uses CSS custom properties (`--ease-progress-value`) and transitions for buttery-smooth width changes (60fps performance).
- **Multiple Variants**: Includes success (green), warning (amber), and error (red) color variants for different semantic meanings.
- **Labeled Progress**: Optional variant that displays the percentage inside the progress bar.
- **Animated Stripes**: Diagonal stripe pattern with continuous animation for "processing" states.
- **Indeterminate Loading**: Animated loading state for when the progress value is unknown.
- **Fully Accessible**: Uses proper ARIA attributes (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`) for screen reader support.
- **Theming Ready**: Leverages `--ease-color-*` CSS variables for seamless integration with the core design token system.
- **Reduced Motion Support**: Gracefully disables animations for users with `prefers-reduced-motion` enabled.
- **Dark Mode Support**: Automatically adapts to dark mode using `prefers-color-scheme`.

## Files Included
- `demo.html`: Interactive showcase with all progress bar variants.
- `style.css`: Clean, production-ready CSS with smooth animations.

## How to Test
1. Ensure you are in the `submissions/examples/ease-progress-bar-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Observe the smooth animations across all variants.
4. Check browser DevTools to verify ARIA attributes are properly set.

## Usage Example
```html
<!-- Basic Progress Bar -->
<div class="ease-progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="ease-progress__bar" style="--ease-progress-value: 75%;"></div>
</div>

<!-- Success Variant with Label -->
<div class="ease-progress ease-progress--success ease-progress--labeled" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="ease-progress__bar" style="--ease-progress-value: 100%;">
    <span class="ease-progress__label">100%</span>
  </div>
</div>

<!-- Indeterminate Loading -->
<div class="ease-progress ease-progress--indeterminate" role="progressbar">
  <div class="ease-progress__bar"></div>
</div>