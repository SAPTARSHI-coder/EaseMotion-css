# CSS Flex Wrap Navigation Component (`css-flex-wrap-navigation`)

A pure HTML + Vanilla CSS responsive navigation bar component featuring Flexbox multi-row wrapping (`display: flex; flex-wrap: wrap; gap: 0.6rem 0.75rem`), active page state indicators (`aria-current="page"`), smooth GPU-accelerated hover elevation (`transform: translateY(-2px)`), light/dark theme adaptation, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% responsive multi-row wrapping navigation bar without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **Automatic Flexbox Multi-Row Wrapping**: Uses `display: flex; flex-wrap: wrap; gap: 0.6rem 0.75rem` so navigation pills wrap cleanly onto additional rows on narrow viewports without horizontal scrollbars.
- **Active Current Page Indicator**: Uses semantic `aria-current="page"` attribute with distinct active pill styling.
- **GPU-Accelerated Hover Elevation**: Operates strictly on `transform: translateY(-2px)` and `opacity` to provide tactile 60fps feedback.
- **100% Accessible**: Built using semantic `<nav aria-label="Primary site navigation">`, `<ul>`, `<li>`, and native `<a>` elements. Keyboard navigation supported (`Tab`, `Shift+Tab`, `Enter`, `Space`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Navigation items scale and wrap fluidly down to 320px mobile screens without layout breakage.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<nav class="flex-wrap-nav" aria-label="Primary site navigation">
  <ul class="nav-flex-list">
    <li class="nav-item">
      <a href="#dashboard" class="nav-link" aria-current="page">Dashboard</a>
    </li>
    <li class="nav-item">
      <a href="#analytics" class="nav-link">Analytics Overview</a>
    </li>
  </ul>
</nav>
```

### Customization Variables

```css
:root {
  --nav-bg: #f8fafc;
  --nav-accent: #0284c7;
  --nav-pill-bg: #f1f5f9;
  --nav-focus: #0284c7;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/70044-css-flex-wrap-navigation/demo.html) directly in any modern web browser to interact with the flex wrap navigation component offline.
