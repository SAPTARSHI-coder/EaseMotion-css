# Animated Liquid Loader Component (`ease-liquid-loader`)

A pure HTML + Vanilla CSS animated liquid loader component featuring metaball liquid merging physics produced by combining `filter: contrast(20)` on the container wrapper with `filter: blur(10px)` on orbital child blob elements (`.liquid-blob`), `@keyframes ease-liquid-orbit` rotational merging transitions, color/size modifiers, dark/light theme adaptation, and reduced motion accessibility fallbacks without any JavaScript.

## Features

- **Pure HTML + CSS**: 100% responsive liquid loader animation without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Gooey Metaball Physics**: Combines high-contrast container thresholding (`filter: contrast(20)`) with blurred child elements (`filter: blur(10px)`). As blurred circles orbit and overlap, contrast clamps alpha channels to visually fuse them into fluid liquid droplets.
- **Staggered Rotational Orbit**: Uses `@keyframes ease-liquid-orbit` with staggered `animation-delay` offsets (`0s`, `-1s`, `-2s`) to orbit satellite blobs around a pulsing liquid core.
- **100% Accessible**: Includes `role="status"`, `aria-label="Loading content"`, and visually hidden screen reader announcements (`.sr-only`). Includes `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; opacity: 0.85 !important;`).
- **Theme Adaptability & Modifiers**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), Emerald Matrix (`.ease-liquid-emerald`), Coral Flame (`.ease-liquid-coral`), and Inline Micro (`.ease-liquid-sm`) variants.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Main Liquid Core Loader -->
<div class="ease-liquid-loader" role="status" aria-label="Loading content">
  <div class="liquid-blob liquid-blob-center"></div>
  <div class="liquid-blob liquid-blob-orbit-1"></div>
  <div class="liquid-blob liquid-blob-orbit-2"></div>
  <div class="liquid-blob liquid-blob-orbit-3"></div>
  <span class="sr-only">Loading content...</span>
</div>

<!-- Emerald Matrix Liquid Loader -->
<div
  class="ease-liquid-loader ease-liquid-emerald"
  role="status"
  aria-label="Processing data"
>
  <div class="liquid-blob liquid-blob-center"></div>
  <div class="liquid-blob liquid-blob-orbit-1"></div>
  <div class="liquid-blob liquid-blob-orbit-2"></div>
  <div class="liquid-blob liquid-blob-orbit-3"></div>
</div>

<!-- Micro Inline Loader -->
<div
  class="ease-liquid-loader ease-liquid-sm"
  role="status"
  aria-label="Connecting"
>
  <div class="liquid-blob liquid-blob-center"></div>
  <div class="liquid-blob liquid-blob-orbit-1"></div>
  <div class="liquid-blob liquid-blob-orbit-2"></div>
  <div class="liquid-blob liquid-blob-orbit-3"></div>
</div>
```

### Customization Variables

```css
.ease-liquid-loader {
  --liquid-color: #0284c7;
  --liquid-speed: 3s;
  --liquid-blur: 10px;
  --liquid-contrast: 20;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71556-animated-liquid-loader/demo.html) directly in any modern web browser to interact with the animated liquid loader component offline.
