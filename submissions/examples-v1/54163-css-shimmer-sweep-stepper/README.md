# CSS Shimmer-Sweep Stepper for Responsive Dashboard Layouts

## What does this do?

A pure CSS stepper/progress component with shimmer sweep animations for responsive dashboard layouts. Each stepper card features a continuous shimmer light sweep across the surface, along with step nodes, connecting lines, and an animated progress bar with its own shimmer effect.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<article class="stepper-card">
  <div class="stepper-card-header">
    <h2 class="stepper-title">Project Name</h2>
    <span class="stepper-badge indigo">Status</span>
  </div>
  <div class="stepper-track">
    <div class="stepper-step completed">
      <div class="stepper-node completed">&#10003;</div>
      <div class="stepper-connector"></div>
      <div class="stepper-info">
        <h4>Step Title</h4>
        <p>Step description goes here.</p>
        <span class="step-time">Date range</span>
      </div>
    </div>
    <div class="stepper-step active">
      <div class="stepper-node active">2</div>
      <div class="stepper-connector"></div>
      <div class="stepper-info">
        <h4>Step Title</h4>
        <p>Step description goes here.</p>
        <span class="step-time">Date range</span>
      </div>
    </div>
    <div class="stepper-step">
      <div class="stepper-node pending">3</div>
      <div class="stepper-info">
        <h4>Step Title</h4>
        <p>Step description goes here.</p>
        <span class="step-time">Date range</span>
      </div>
    </div>
  </div>
  <div class="stepper-progress">
    <span class="stepper-progress-label">Progress</span>
    <div class="stepper-progress-bar"><div class="stepper-progress-fill"></div></div>
    <span class="stepper-progress-pct">66%</span>
  </div>
</article>
```

### Step node states

- `.stepper-node.completed` — Green completed node with checkmark
- `.stepper-node.active` — Indigo active node with pulse ring animation
- `.stepper-node.pending` — Muted pending node with border

### Available badge colors

- `.stepper-badge.indigo` — Indigo accent
- `.stepper-badge.sky` — Sky accent
- `.stepper-badge.amber` — Amber accent
- `.stepper-badge.emerald` — Emerald accent

### CSS Custom Properties

```css
:root {
  --bg-primary: #0c0f1a;
  --bg-surface: #161b2e;
  --bg-card: #1e2540;
  --text-primary: #eef0f6;
  --text-secondary: #8891ab;
  --border-color: #2a3352;
  --accent-indigo: #6366f1;
  --accent-sky: #38bdf8;
  --accent-amber: #f59e0b;
  --accent-emerald: #10b981;
}
```

Override any of these variables to customize the theme.

## Features

- **Shimmer Sweep Animation**: Continuous light sweep across stepper cards with staggered delays
- **Pulse Ring Active Node**: Active step features a pulsing ring animation
- **Progress Bar Shimmer**: Progress fill bar has its own internal shimmer effect
- **Three Step States**: Completed (green check), Active (indigo pulse), Pending (muted)
- **Pure CSS**: No JavaScript or external frameworks required
- **Responsive Design**: Adapts from multi-column grid to single column on mobile
- **Accessibility**: Full `prefers-reduced-motion` support disables all animations
- **Semantic HTML**: Uses `<article>`, `<section>`, `aria-label` for screen reader support

## Tech Stack

- HTML5
- CSS3 (Transitions, Keyframes, CSS Custom Properties, Grid)
- No JavaScript required
