# Interactive Bento Metrics Grid Showcase

A modern, responsive Bento Grid dashboard layout featuring animated bar chart growth transitions, real-time live counter pulses, and edge telemetry status badges.

## 1. What does this do?
This component renders an interactive multi-card bento grid displaying real-time analytics data with CSS bar grow keyframe animations, status pulses, and glassmorphic card hover elevations.

## 2. How is it used?
Structure your dashboard container with `.bento-grid` and apply `.bento-card` with `.ease-bento-hover`:

```html
<div class="bento-grid">
  <article class="bento-card card-large ease-bento-hover" tabindex="0">
    <div class="bar ease-bar-grow" style="--height: 80%"></div>
  </article>
</div>
```

## 3. Why is it useful?
- Perfect for telemetry dashboards, analytics monitoring, and executive summaries.
- Fully responsive across desktop, tablet, and mobile viewport sizes.
- Utilizes CSS custom variables for lightweight chart height interpolation.
