# Animated Progress Bar

## What does it do?
Animates a progress bar from 0 to a target width on page load using CSS transitions.
No JavaScript required for the animation — only a small script to trigger the loaded class.

## How is it used?
Add the class to any HTML element:

```html
<!-- Basic -->
<div class="ease-progress ease-progress-loaded" style="--ease-progress-value: 60%;">
  <div class="ease-progress-bar"></div>
</div>

<!-- Gradient -->
<div class="ease-progress ease-progress-loaded" style="--ease-progress-value: 80%;">
  <div class="ease-progress-bar ease-progress-gradient"></div>
</div>

<!-- Striped + Animated -->
<div class="ease-progress ease-progress-loaded" style="--ease-progress-value: 45%;">
  <div class="ease-progress-bar ease-progress-striped ease-progress-animated"></div>
</div>

<!-- With percentage label -->
<div class="ease-progress-labeled">
  <div class="ease-progress ease-progress-loaded" style="--ease-progress-value: 75%;">
    <div class="ease-progress-bar ease-progress-gradient"></div>
  </div>
  <span class="ease-progress-label">75%</span>
</div>
```

## Variants
- Default — solid primary color
- Gradient — two-color gradient fill
- Striped — diagonal stripe pattern
- Striped + Animated — moving stripes
- Labeled — with percentage text

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript for animation)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Uses CSS custom property `--ease-progress-value` for target width
- Follows EaseMotion CSS naming conventions
- Respects `prefers-reduced-motion`