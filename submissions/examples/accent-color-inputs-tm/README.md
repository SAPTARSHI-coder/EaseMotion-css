# Custom Accent Color for Form Controls

Uses accent-color to override browser defaults on checkboxes, radio buttons, range sliders, and progress bars — matching EaseMotion's design system tokens.

## Features

- accent-color on checkbox and radio for themed form controls
- Accent variants: primary, success, and danger color options
- Range slider styled with accent-color and custom track/thumb
- Progress bar accent color overrides browser blue
- Dark mode accent color adaptation

## Usage

```html
<div class="demo-card">
  <!-- Apply the feature class to any element -->
</div>
```

## Why is it useful?

This submission uses EaseMotion's CSS custom properties — specifically the `color-primary, color-success, color-danger, space-4, radius-full` tokens — to ensure the demo is fully themeable and consistent with the rest of the framework. The implementation includes dark mode via `prefers-color-scheme: dark` and respects `prefers-reduced-motion` for accessibility.
