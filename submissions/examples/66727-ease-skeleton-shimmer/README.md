# Skeleton Shimmer Loading UI Component (`ease-skeleton-shimmer`)

A pure HTML + Vanilla CSS skeleton loading component featuring realistic card/profile/feed placeholder shapes, a moving linear-gradient shimmer highlight (`@keyframes skeleton-shimmer`), pure CSS interactive state toggling between skeleton loading and loaded content, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% interactive loading state component without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **Moving Gradient Shimmer**: Uses a smooth 200% width linear gradient (`linear-gradient(90deg, var(--skeleton-base) 0%, var(--skeleton-highlight) 50%, var(--skeleton-base) 100%)`) animated via `background-position` (`@keyframes skeleton-shimmer`).
- **Realistic Component Layouts**: Includes skeleton placeholders for:
  - User Profile Cards (`.skeleton-avatar`, `.skeleton-title`, `.skeleton-line`, `.skeleton-btn`).
  - Media Feed Cards (`.skeleton-banner`, `.skeleton-title`, `.skeleton-badge`).
  - Analytics Metric Cards (`.skeleton-stat-box`, `.skeleton-line`).
- **Pure CSS State Switch**: Includes an interactive checkbox toggle switch (`<input type="checkbox" id="state-toggle">`) allowing users to preview both the skeleton shimmer state and the loaded content state.
- **100% Accessible**: Uses semantic HTML with `aria-busy="true"`, `aria-label`, and screen reader status output (`<output class="sr-only" aria-live="polite">`).
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<article class="showcase-card">
  <div class="skeleton-wrapper">
    <div class="skeleton-shimmer skeleton-avatar" aria-hidden="true"></div>
    <div class="skeleton-shimmer skeleton-title" aria-hidden="true"></div>
    <div class="skeleton-shimmer skeleton-line" aria-hidden="true"></div>
  </div>
</article>
```

### Customization Variables

```css
:root {
  --skeleton-bg: #f8fafc;
  --skeleton-base: #cbd5e1;
  --skeleton-highlight: #f1f5f9;
  --skeleton-speed: 1.8s;
  --skeleton-radius: 8px;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/66727-ease-skeleton-shimmer/demo.html) directly in any modern web browser to interact with the skeleton shimmer component offline.
