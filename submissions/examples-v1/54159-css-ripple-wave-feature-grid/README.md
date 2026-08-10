# CSS Ripple-Wave Feature Grid for Responsive Dashboard Layouts

## What does this do?

A pure CSS feature grid component with ripple-wave entrance animations for modern dashboard layouts. Cards animate upward with staggered delays and feature a radial ripple hover effect that expands from the bottom center, combined with a top-edge wave line reveal.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<section class="feature-grid" aria-label="Feature Grid">
  <article class="feature-card">
    <div class="ripple-icon cyan">
      <span aria-hidden="true">&#9672;</span>
    </div>
    <h3>Feature Title</h3>
    <p>Feature description goes here.</p>
    <span class="ripple-tag cyan">Tag</span>
    <div class="metric-row">
      <span class="metric-label">Metric</span>
      <span class="metric-value cyan">Value</span>
    </div>
    <div class="wave-line"><div class="wave-line-fill"></div></div>
  </article>
</section>
```

### Available icon color classes

- `.ripple-icon.cyan` - Cyan accent
- `.ripple-icon.violet` - Violet accent
- `.ripple-icon.rose` - Rose accent
- `.ripple-icon.teal` - Teal accent

### Available tag color classes

- `.ripple-tag.cyan`
- `.ripple-tag.violet`
- `.ripple-tag.rose`
- `.ripple-tag.teal`

### Available metric value classes

- `.metric-value.cyan`
- `.metric-value.violet`
- `.metric-value.rose`
- `.metric-value.teal`

### CSS Custom Properties

```css
:root {
  --bg-primary: #0a0e1a;
  --bg-surface: #151b2e;
  --bg-card: #1c2438;
  --text-primary: #f0f2f5;
  --text-secondary: #8892a6;
  --border-color: #2a3348;
  --accent-cyan: #06b6d4;
  --accent-violet: #8b5cf6;
  --accent-rose: #f43f5e;
  --accent-teal: #14b8a6;
}
```

Override any of these variables to customize the theme.

## Features

- **Ripple-Wave Entrance Animation**: Cards slide up with staggered delays creating a wave-like entrance
- **Radial Ripple Hover Effect**: Hovering reveals a radial gradient ripple expanding from the bottom center
- **Top Wave Line**: A gradient line sweeps across the top on hover
- **Pure CSS**: No JavaScript or external frameworks required
- **Responsive Design**: Adapts seamlessly across desktop, tablet, and mobile viewports
- **Metric Display**: Built-in metric row with label, value, and animated wave progress bar
- **Accessibility**: Full `prefers-reduced-motion` support disables all animations
- **Semantic HTML**: Uses `<article>`, `<section>`, and `aria-label` for screen reader support

## Tech Stack

- HTML5
- CSS3 (Transitions, Keyframes, CSS Custom Properties, Grid)
- No JavaScript required
