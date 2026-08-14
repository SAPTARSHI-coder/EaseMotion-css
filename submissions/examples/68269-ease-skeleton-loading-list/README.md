# CSS Skeleton Loading List Component (`ease-skeleton-loading-list`)

A pure HTML + Vanilla CSS skeleton loading list component featuring a stacked vertical list container (`.skeleton-list-container`), 5 distinct content item rows with varied line widths and avatar shapes, a moving linear-gradient shimmer highlight (`@keyframes ease-skeleton-list-shimmer`), pure CSS state toggle between loading and loaded list views, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% interactive vertical list loading state component without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **Vertical Stacked List Structure**: Represents real content feeds, inboxes, search results, and notifications with 5 stacked rows.
- **Varied Line Widths & Avatar Shapes**: Includes `.skeleton-avatar` (circle and square) alongside `.title-w-85`, `.title-w-60`, `.body-w-90`, and `.body-w-45` placeholder elements to mimic natural text variations.
- **Moving Gradient Shimmer**: Uses a smooth 200% width linear gradient (`linear-gradient(90deg, var(--sk-base) 0%, var(--sk-highlight) 50%, var(--sk-base) 100%)`) animated via `background-position` (`@keyframes ease-skeleton-list-shimmer`).
- **Pure CSS State Engine**: Toggle checkbox (`<input type="checkbox" id="state-toggle">`) allows users to preview both the skeleton shimmer list and the loaded content list.
- **100% Accessible**: Built using semantic `<ul>`, `<li>`, `<output class="sr-only" aria-live="polite">`, and `aria-busy="true"`. Decorative placeholder elements hidden via `aria-hidden="true"`. Keyboard navigation supported (`Tab`, `Space`, `Enter`) with `:focus-visible` indicators.
- **Responsive & Mobile Ready**: List scales fluidly down to mobile viewports (320px–1440px+) without horizontal overflow.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<ul class="skeleton-list-container" aria-busy="true">
  <li class="skeleton-list-item">
    <div class="skeleton-shimmer skeleton-avatar" aria-hidden="true"></div>
    <div class="skeleton-content-block">
      <div
        class="skeleton-shimmer skeleton-line-title title-w-75"
        aria-hidden="true"
      ></div>
      <div
        class="skeleton-shimmer skeleton-line-body body-w-90"
        aria-hidden="true"
      ></div>
    </div>
  </li>
</ul>
```

### Customization Variables

```css
:root {
  --sk-bg: #f8fafc;
  --sk-base: #cbd5e1;
  --sk-highlight: #f1f5f9;
  --sk-speed: 1.8s;
  --sk-focus: #0284c7;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/68269-ease-skeleton-loading-list/demo.html) directly in any modern web browser to interact with the skeleton loading list component offline.
