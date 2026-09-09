# Documentation: Floating Stat Card - Accessibility Integration (#15397)

Comprehensive documentation guide, copy-paste HTML markup examples, CSS class naming conventions, custom CSS variable overrides, and accessibility/keyboard navigation notes for the EaseMotion **Floating Stat Card (Accessibility Integration)** component (`#15397`), fully addressing issue `#81566`.

## 🚀 Overview & Features

- **Accessibility & ARIA Markup:** Built using semantic region roles (`role="region"`, `aria-label`) and descriptive metric announcements for screen readers.
- **Glassmorphism Elevation:** Translucent dark container with cyan floating shadow effects and smooth hover translation.
- **Keyboard Navigation Setup:** Robust `:focus-visible` high-contrast outlines and full tab support.

## 🛠️ Copy-Paste HTML Markup Example

```html
<div class="ease-floating-stat em-card-accessible" role="region" aria-label="Floating Statistics Metric Card" tabindex="0">
    <span class="em-stat-badge">LIVE METRIC</span>
    <h2 class="em-stat-metric-value" aria-label="Metric value: 99.9 percent">99.9%</h2>
    <p class="em-stat-metric-label">System Uptime Performance</p>
    <div class="em-stat-trend positive" aria-label="Trend: Up 4.5 percent from last month">+4.5%</div>
</div>
