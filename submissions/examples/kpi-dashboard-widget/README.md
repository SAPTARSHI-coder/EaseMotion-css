# KPI Dashboard Widget Component

## Overview

KPI Dashboard Widget is a modern analytics card component for displaying key performance indicators in dashboards, business intelligence tools, and admin panels. Built with pure CSS, it provides multiple variants, smooth animations, and responsive design. Perfect for visualizing metrics, revenue, user statistics, and performance data with trend indicators.

## Features

- Modern analytics card design
- Metric value display with icons
- Trend indicators (positive, negative, neutral)
- Percentage change badges
- Multiple size and style variants
- Dark mode support
- Glassmorphism effects
- Responsive grid layout
- Hover animations and lift effects
- CSS-only implementation
- Fully customizable CSS variables
- Accessibility support
- Zero JavaScript required

## Available Classes

- `.ease-kpi` — Main KPI card container.
- `.ease-kpi-header` — Header section with icon and right content.
- `.ease-kpi-icon` — Decorative icon container with gradient background.
- `.ease-kpi-right` — Right section containing value and trend.
- `.ease-kpi-value` — Large metric value display.
- `.ease-kpi-label-text` — Card label below content.
- `.ease-kpi-trend` — Trend badge showing percentage change.
- `.ease-kpi-grid` — Responsive grid container for multiple KPIs.

## Variants

### Color Themes

- `.ease-kpi-success` — Green success theme for positive metrics.
- `.ease-kpi-danger` — Red danger theme for negative/alert metrics.

### Style Variants

- `.ease-kpi-dark` — Dark mode for light backgrounds.
- `.ease-kpi-glass` — Glassmorphism effect with backdrop blur.

### Interactive

- `.ease-kpi-hover` — Interactive hover lift and animation effects.

## Trend States

- `.ease-kpi-positive` — Green trend badge with upward arrow (↑).
- `.ease-kpi-negative` — Red trend badge with downward arrow (↓).
- `.ease-kpi-neutral` — Gray trend badge with dash (–).

## Animations

- `.ease-kpi-pulse` — Gentle pulsing opacity animation.
- `.ease-kpi-trend-animate` — Bouncing trend badge animation.

## Usage

### Basic KPI Card

```html
<div class="ease-kpi">
  <div class="ease-kpi-header">
    <div class="ease-kpi-icon">📊</div>
    <div class="ease-kpi-right">
      <div class="ease-kpi-value">2,543</div>
      <span class="ease-kpi-trend ease-kpi-positive">+12.5%</span>
    </div>
  </div>
  <div class="ease-kpi-label-text">Total Users</div>
</div>
```

### Success Variant

```html
<div class="ease-kpi ease-kpi-success">
  <div class="ease-kpi-header">
    <div class="ease-kpi-icon">💰</div>
    <div class="ease-kpi-right">
      <div class="ease-kpi-value">$45.2K</div>
      <span class="ease-kpi-trend ease-kpi-positive">+18.4%</span>
    </div>
  </div>
  <div class="ease-kpi-label-text">Revenue</div>
</div>
```

### Dark Theme

```html
<div class="ease-kpi ease-kpi-dark">
  <div class="ease-kpi-header">
    <div class="ease-kpi-icon">🌙</div>
    <div class="ease-kpi-right">
      <div class="ease-kpi-value">892</div>
      <span class="ease-kpi-trend ease-kpi-positive">+6.3%</span>
    </div>
  </div>
  <div class="ease-kpi-label-text">Night Users</div>
</div>
```

### Glassmorphism

```html
<div class="ease-kpi ease-kpi-glass">
  <div class="ease-kpi-header">
    <div class="ease-kpi-icon">✨</div>
    <div class="ease-kpi-right">
      <div class="ease-kpi-value">1.2M</div>
      <span class="ease-kpi-trend ease-kpi-positive">+11.8%</span>
    </div>
  </div>
  <div class="ease-kpi-label-text">Impressions</div>
</div>
```

### Interactive Hover

```html
<div class="ease-kpi ease-kpi-hover">
  <div class="ease-kpi-header">
    <div class="ease-kpi-icon">🚀</div>
    <div class="ease-kpi-right">
      <div class="ease-kpi-value">156</div>
      <span class="ease-kpi-trend ease-kpi-positive">+22.4%</span>
    </div>
  </div>
  <div class="ease-kpi-label-text">Launches</div>
</div>
```

### Negative Trend

```html
<div class="ease-kpi ease-kpi-danger">
  <div class="ease-kpi-header">
    <div class="ease-kpi-icon">📉</div>
    <div class="ease-kpi-right">
      <div class="ease-kpi-value">-$2.1K</div>
      <span class="ease-kpi-trend ease-kpi-negative">-7.4%</span>
    </div>
  </div>
  <div class="ease-kpi-label-text">Growth</div>
</div>
```

### Neutral Trend

```html
<div class="ease-kpi">
  <div class="ease-kpi-header">
    <div class="ease-kpi-icon">⚙️</div>
    <div class="ease-kpi-right">
      <div class="ease-kpi-value">234ms</div>
      <span class="ease-kpi-trend ease-kpi-neutral">±0%</span>
    </div>
  </div>
  <div class="ease-kpi-label-text">Avg Response</div>
</div>
```

### Responsive Grid

```html
<div class="ease-kpi-grid">
  <div class="ease-kpi"><!-- KPI 1 --></div>
  <div class="ease-kpi"><!-- KPI 2 --></div>
  <div class="ease-kpi"><!-- KPI 3 --></div>
</div>
```

### With Animations

```html
<!-- Pulsing animation -->
<div class="ease-kpi ease-kpi-pulse">
  <!-- KPI content -->
</div>

<!-- Animated trend bounce -->
<div class="ease-kpi">
  <div class="ease-kpi-header">
    <div class="ease-kpi-icon">📊</div>
    <div class="ease-kpi-right">
      <div class="ease-kpi-value">2,543</div>
      <span class="ease-kpi-trend ease-kpi-animate">+12.5%</span>
    </div>
  </div>
  <div class="ease-kpi-label-text">Total Users</div>
</div>
```

## Customization

Override CSS variables to customize appearance:

```css
.ease-kpi {
  --ease-kpi-bg: #ffffff;
  --ease-kpi-color: #111827;
  --ease-kpi-radius: 0.75rem;
  --ease-kpi-shadow: 0 1px 3px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(15, 23, 42, 0.06);
  --ease-kpi-border: 1px solid #e5e7eb;
  --ease-kpi-padding: 1.5rem;
  --ease-kpi-gap: 0.75rem;
  --ease-kpi-transition: 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  --ease-kpi-value-size: 2.125rem;
  --ease-kpi-label-size: 0.875rem;
  --ease-kpi-icon-size: 2.75rem;
  --ease-kpi-trend-size: 0.75rem;
}
```

### Custom Color Scheme

```css
.ease-kpi-custom {
  --ease-kpi-bg: #fef3c7;
  --ease-kpi-color: #78350f;
  --ease-kpi-border: 1px solid #fcd34d;
}

.ease-kpi-custom .ease-kpi-icon {
  background: linear-gradient(135deg, #fef08a, #fde047);
  color: #ca8a04;
}
```

## Responsive Behavior

- **Desktop**: Full grid with 3+ columns depending on screen width
- **Tablet (≤768px)**: Auto-fit grid with 2-3 columns, reduced padding
- **Mobile (≤480px)**: Single column layout, minimal padding

Grid automatically adapts with `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`.

## Browser Compatibility

- Chrome / Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- Focus-visible outlines for keyboard navigation
- High contrast colors for readability
- Respects `prefers-reduced-motion` by disabling animations
- Respects `prefers-contrast` for enhanced borders and font weights
- Color is not the only indicator (uses icons and text labels)
- Proper font hierarchy for visual scanning

## Notes

- **No JavaScript Required**: Pure CSS implementation
- **Icons**: Use emoji, Unicode symbols, or integrate with icon libraries
- **Gradients**: Icon gradients use CSS linear-gradient for customization
- **Animation Timing**: Uses cubic-bezier easing for natural motion feel
- **Glassmorphism**: Requires modern browser with `backdrop-filter` support
- **Dark Mode**: Automatically responds to `prefers-color-scheme: dark`
- **Responsive**: Grid layout uses CSS Grid's `auto-fit` for flexibility
- **Customizable**: All colors, sizes, and timings via CSS variables

## Use Cases

- **Admin Dashboards**: Display system metrics and KPIs
- **Business Intelligence**: Visualize revenue, sales, and growth data
- **Analytics Platforms**: Show user engagement and conversion metrics
- **SaaS Platforms**: Present account statistics and usage data
- **E-Commerce**: Display orders, revenue, and conversion rates
- **Project Management**: Show task completion, team velocity, and burndown
- **Financial Apps**: Present portfolio value, gains/losses, and returns

## Performance

- Lightweight CSS (< 8KB minified)
- No runtime performance cost
- GPU-accelerated transforms for smooth animations
- Efficient media queries for responsive behavior
- Optimized shadows and gradients
