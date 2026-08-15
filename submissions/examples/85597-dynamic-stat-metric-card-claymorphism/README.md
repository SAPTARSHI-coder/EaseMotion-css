# Dynamic Stat Metric Card Component with Claymorphism Styling (`ease-clay-stat-card`)

A pure HTML + Vanilla CSS Stat Metric Card component featuring a 3D inflated Claymorphism visual style (`box-shadow: 12px 16px 24px rgba(165, 180, 252, 0.45), inset -6px -6px 12px rgba(99, 102, 241, 0.25), inset 6px 6px 12px rgba(255, 255, 255, 0.9)`), prominent numeric metric display (`<strong class="clay-metric-value">`), trend pill badges (`+14.8%`), responsive 4-card dashboard grid, keyboard focusability (`tabindex="0"`), dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Claymorphism Stat Metric Card UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Claymorphism 3D Aesthetic**: Dual-layered drop shadows combined with inset highlights/shadows creating tactile inflated 3D clay surfaces (`border-radius: 28px`), soft pastel clay color variants, and hover scale/lift transition (`transform: translateY(-6px) scale(1.02)`).
- **100% Accessible**: Uses semantic `<article class="ease-clay-stat-card" tabindex="0">`, `<strong>`, and `<span>`. Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important; animation: none !important;`).
- **Theme Adaptability**: Supports light soft clay default presentation (`#e0e7ff`) and dark space clay adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<article class="ease-clay-stat-card clay-indigo" tabindex="0">
  <div class="card-header-group">
    <span class="card-label">TOTAL REVENUE</span>
    <div class="clay-icon-badge">...</div>
  </div>
  <strong class="clay-metric-value">$84,250.00</strong>
  <div class="card-footer-group">
    <div class="clay-trend-badge trend-up"><span>+14.8%</span></div>
    <span class="trend-subtext">vs previous period</span>
  </div>
</article>
```

### Customization Variables

```css
.ease-clay-stat-card {
  --clay-surface: #eef2ff;
  --clay-indigo: #818cf8;
  --clay-text: #1e1b4b;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85597-dynamic-stat-metric-card-claymorphism/demo.html) directly in any modern web browser to view the Dynamic Claymorphism Stat Metric Card Dashboard UI offline.
