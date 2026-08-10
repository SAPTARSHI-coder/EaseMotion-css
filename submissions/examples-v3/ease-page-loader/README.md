# ease-page-loader

A full-screen animated page loader / splash screen that displays while content loads, then smoothly fades out to reveal the page. Features a pulsing branded logo, an animated progress bar, and a smooth exit transition.

## Features

- 🎨 Pulsing logo animation (customizable — emoji, text, or SVG)
- 📊 Animated progress bar that fills over a configurable duration
- ✨ Smooth fade-out exit transition when loading completes
- 🔁 Self-hides automatically when the progress animation ends (with a `window.load` fallback), or can be dismissed manually by toggling `.is-hidden`
- 🎨 Fully customizable via CSS custom properties
- 🌗 Light/dark mode support via `[data-theme]`
- 📱 Responsive: logo size and bar width scale down on small screens
- ♿ Accessible: `role="alert"` + `aria-live="assertive"` + `aria-label` so assistive tech announces the loading state; logo is `aria-hidden` (decorative)
- 🧠 Respects `prefers-reduced-motion` — loader skips animation and hides immediately

## Usage

```html
<div class="ease-page-loader" id="pageLoader" role="alert" aria-live="assertive" aria-label="Page is loading">
  <div class="ease-page-loader__content">
    <div class="ease-page-loader__logo" aria-hidden="true">⚡</div>
    <div class="ease-page-loader__bar">
      <div class="ease-page-loader__progress"></div>
    </div>
    <p class="ease-page-loader__text">Loading...</p>
  </div>
</div>
```

To hide the loader once your page/assets are ready, add the `.is-hidden` class:

```js
document.getElementById('pageLoader').classList.add('is-hidden');
```

The included demo automatically hides the loader when the progress-bar fill animation finishes (`animationend`), with a `window.load` timeout as a fallback in case the tab was backgrounded.

## CSS Variables

| Variable                        | Default    | Description                          |
|-----------------------------------|------------|-----------------------------------------|
| `--ease-loader-bg`                 | `#0f0f1a`  | Full-screen background color          |
| `--ease-loader-text`               | `#f1f5f9`  | Primary text color                    |
| `--ease-loader-muted`              | `#94a3b8`  | "Loading..." text color               |
| `--ease-loader-accent-start`       | `#6366f1`  | Progress bar gradient start           |
| `--ease-loader-accent-end`         | `#3b82f6`  | Progress bar gradient end             |
| `--ease-loader-bar-track`          | `rgba(255,255,255,0.1)` | Progress bar track color |
| `--ease-loader-bar-width`          | `200px`    | Progress bar width                    |
| `--ease-loader-bar-height`         | `4px`      | Progress bar height                   |
| `--ease-loader-logo-size`          | `4rem`     | Logo font size                        |
| `--ease-loader-pulse-duration`     | `1s`       | Logo pulse animation duration          |
| `--ease-loader-fill-duration`      | `2s`       | Progress bar fill duration            |
| `--ease-loader-exit-duration`      | `0.5s`     | Fade-out exit transition duration      |

## Accessibility

- The loader uses `role="alert"` and `aria-live="assertive"` so screen readers immediately announce that the page is loading.
- `aria-label="Page is loading"` gives a clear description independent of the decorative logo.
- The logo is marked `aria-hidden="true"` since it conveys no essential information beyond branding.
- Under `prefers-reduced-motion: reduce`, the loader skips its animations and hides immediately rather than forcing users to wait through a pulse/fill they can't perceive as motion.

## Browser Support

Works in all modern browsers supporting CSS custom properties and `@keyframes` (Chrome, Firefox, Safari, Edge).