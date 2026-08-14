# Skeleton Loading Screen Component (`ease-skeleton`)

A pure HTML + Vanilla CSS reusable skeleton loading system featuring linear-gradient shimmer keyframe animations (`@keyframes ease-skeleton-shimmer`), text line/avatar/card skeleton variants, width percentage modifiers, dark/light theme adaptation, and reduced motion accessibility fallbacks.

## Features

- **Pure HTML + CSS**: 100% responsive skeleton loader component without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Linear-Gradient Shimmer Animation**: Smooth infinite shimmer animation driven by `@keyframes ease-skeleton-shimmer` translating `background-position: -200% 0` to `200% 0`.
- **Text, Avatar, and Card Variants**:
  - Text & Heading Lines (`.ease-skeleton-text`, `.ease-skeleton-heading`)
  - Circular Avatars (`.ease-skeleton-avatar-sm`, `-md`, `-lg`)
  - Cards & Aspect Media (`.ease-skeleton-card`, `.ease-skeleton-media`)
  - Width percentage utility modifiers (`.ease-skeleton-w-100`, `.ease-skeleton-w-75`, `.ease-skeleton-w-50`, `.ease-skeleton-w-25`)
- **100% Accessible**: Built using `aria-hidden="true"` on decorative skeleton elements, `aria-busy="true"` on parent loading wrappers, and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; background-image: none !important;`).
- **Theme Adaptability & Motion Controls**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), and reduced motion controls.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Profile Card Skeleton Layout -->
<div aria-busy="true" aria-label="Loading profile content">
  <!-- Circular Avatar Skeleton -->
  <div class="ease-skeleton ease-skeleton-avatar-lg" aria-hidden="true"></div>

  <!-- Heading Line Skeleton (75% width) -->
  <div
    class="ease-skeleton ease-skeleton-heading ease-skeleton-w-75"
    aria-hidden="true"
  ></div>

  <!-- Body Text Skeletons -->
  <div
    class="ease-skeleton ease-skeleton-text ease-skeleton-w-100"
    aria-hidden="true"
  ></div>
  <div
    class="ease-skeleton ease-skeleton-text ease-skeleton-w-60"
    aria-hidden="true"
  ></div>
</div>
```

### Customization Variables

```css
.ease-skeleton {
  --skeleton-bg: #e2e8f0;
  --skeleton-shimmer-color: rgba(255, 255, 255, 0.65);
  --skeleton-speed: 1.6s;
  --skeleton-border-radius: 6px;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71719-skeleton-loading-screen/demo.html) directly in any modern web browser to interact with the skeleton loading component offline.
