# Floating Badge Component with Minimalist Styling (`floating-badge-minimalist`)

A pure HTML + Vanilla CSS Floating Badge component featuring a clean minimalist visual style, subtle elevation (`transform: translateY(-2px)`), default neutral, status (success/warning/critical), notification count, and interactive button/link variants, light/dark theme adaptation, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% responsive floating badge gallery without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **Genuine Minimalist Aesthetic**: Clean typography, stroke borders (`1px solid var(--badge-border)`), subtle float elevation (`transform: translateY(-2px)`), and uncluttered layout.
- **5 Reusable Badge Variants**:
  - **Default Neutral**: Informational labels and tags (`.floating-badge`).
  - **Status Indicators**: Success Green, Warning Amber, and Critical Red with indicator dots (`.status-dot`).
  - **Notification Pills**: Counter tags (`.count-pill`).
  - **Interactive Button / Link**: Interactive badges (`<button class="floating-badge badge-interactive">` / `<a href="..." class="floating-badge badge-interactive">`).
- **GPU-Accelerated Tactile Hover Elevation**: Operates strictly on `transform: translateY(-2px)` and `opacity` for smooth 60fps feedback.
- **100% Accessible**: Built using semantic HTML (`<span>`, `<button>`, `<a>`). Interactive variants support keyboard navigation (`Tab`, `Shift+Tab`, `Enter`, `Space`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Badges wrap naturally on narrow viewports (320px–1440px+) without horizontal scrollbars.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Default Minimalist Badge -->
<span class="floating-badge">v1.4.0 Release</span>

<!-- Status Indicator Badge -->
<span class="floating-badge badge-success">
  <span class="status-dot dot-success" aria-hidden="true"></span>
  <span>System Operational</span>
</span>

<!-- Interactive Button Badge -->
<button type="button" class="floating-badge badge-interactive">
  <span>Filter Category</span>
  <span class="badge-icon" aria-hidden="true">&#9662;</span>
</button>
```

### Customization Variables

```css
:root {
  --badge-bg: #f8fafc;
  --badge-surface: #ffffff;
  --badge-border: #cbd5e1;
  --badge-accent: #0284c7;
  --badge-focus: #0284c7;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/80004-floating-badge-minimalist/demo.html) directly in any modern web browser to interact with the floating badge component offline.
