# CSS Gradient Animated Hero Component (`css-gradient-animated-hero`)

A pure HTML + Vanilla CSS landing-page hero section component featuring a 300% mesh gradient background canvas (`.hero-gradient-canvas`), a 16-second infinite shifting gradient animation (`@keyframes ease-gradient-hero-shift`), gradient-clipped headline text (`.gradient-text-clip`), primary and secondary CTA buttons, a key metrics bar, light/dark theme adaptation, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% responsive landing-page hero section without JavaScript, external fonts, SVG image assets, canvas engines, or build scripts. Works offline.
- **300% Mesh Gradient Shift Animation**: Uses a 300% x 300% multi-stop linear gradient (`linear-gradient(135deg, var(--hero-grad-1) 0%, var(--hero-grad-2) 45%, var(--hero-grad-3) 80%, var(--hero-grad-1) 100%)`) animated via `background-position` (`@keyframes ease-gradient-hero-shift`) over a smooth 16-second infinite loop.
- **Gradient Text Clipping**: Headline text features crisp gradient clipping (`background-clip: text; -webkit-text-fill-color: transparent`).
- **Complete Hero Layout Structure**: Eyebrow badge (`.hero-eyebrow`), main heading (`<h1 class="hero-title">`), supporting description, primary and secondary CTA links (`.btn-primary`, `.btn-secondary`), and a key metrics bar (`.hero-metrics-bar`).
- **100% Accessible**: Built using semantic `<section>`, `<h1>`, `<p>`, and real `<a>` CTA links. Keyboard navigation supported (`Tab`, `Shift+Tab`, `Enter`, `Space`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Layout stacks naturally on mobile viewports (320px–1440px+) without horizontal scrollbars or overflow.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<section class="gradient-hero-section">
  <div class="hero-gradient-canvas" aria-hidden="true"></div>
  <div class="hero-content-wrapper">
    <h1 class="hero-title">
      Elevate Web Motion With
      <span class="gradient-text-clip">Zero Reflow Physics</span>
    </h1>
    <div class="hero-actions-group">
      <a href="#explore" class="btn-primary">Explore Motion Library</a>
      <a href="#docs" class="btn-secondary">View Documentation</a>
    </div>
  </div>
</section>
```

### Customization Variables

```css
:root {
  --hero-bg: #f8fafc;
  --hero-grad-1: #0f172a;
  --hero-grad-2: #1e1b4b;
  --hero-grad-3: #065f46;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/70064-css-gradient-animated-hero/demo.html) directly in any modern web browser to interact with the gradient animated hero component offline.
