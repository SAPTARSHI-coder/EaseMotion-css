# Ease Skeleton Loader Component

A modern, responsive, and lightweight **Skeleton Loader Component** built for **EaseMotion CSS**. This component provides placeholders for content, images, profiles, articles, tables, and dashboards while data is loading. It supports multiple shapes, animations, and premium gradient variants out-of-the-box.

---

## Features

- **Pure CSS**: Fully styled and animated with vanilla CSS. No JavaScript required.
- **3 Animation Types**: Shimmer effect, pulsing opacity, and sweep wave loader.
- **10 Design Variants**: Base elements (Text, Avatar, Circle, Rectangle, Image) and pre-built widgets (Card, Profile, Article, Table, Dashboard, Minimal, and Gradient loaders).
- **Responsive Layouts**: Designed to adapt perfectly to mobile and desktop viewports.
- **Customizable**: Built with CSS variables, allowing easy tuning of background colors, animation durations, and sizing.

---

## Installation & Setup

1. Copy `style.css` into your project directory.
2. Link it in your HTML:

```html
<link
  rel="stylesheet"
  href="path/to/ease-skeleton-loader-component/style.css"
/>
```

---

## Usage Examples

### 1. Basic Text Line

Use `.ease-skeleton-text` to represent loading text. Adjust width and height inline or via CSS overrides.

```html
<div
  class="ease-skeleton ease-skeleton-text"
  style="--skeleton-width: 80%; --skeleton-height: 16px;"
></div>
```

### 2. Avatar Placeholder

Use `.ease-skeleton-avatar` to display circular avatar indicators.

```html
<div
  class="ease-skeleton ease-skeleton-avatar"
  style="--skeleton-size: 48px;"
></div>
```

### 3. Shimmer Card Placeholder

A card layout utilizing the shimmer animation modifier:

```html
<div class="skeleton-card">
  <!-- Image Skeleton -->
  <div
    class="ease-skeleton ease-skeleton-image anim-shimmer"
    style="--skeleton-height: 150px;"
  ></div>

  <div class="card-user-info">
    <!-- Avatar Skeleton -->
    <div
      class="ease-skeleton ease-skeleton-avatar anim-shimmer"
      style="--skeleton-size: 40px;"
    ></div>

    <div class="card-text-group">
      <!-- Title & Subtitle Line Skeletons -->
      <div
        class="ease-skeleton ease-skeleton-text anim-shimmer"
        style="--skeleton-width: 120px; --skeleton-height: 12px;"
      ></div>
      <div
        class="ease-skeleton ease-skeleton-text anim-shimmer"
        style="--skeleton-width: 80px; --skeleton-height: 8px;"
      ></div>
    </div>
  </div>
</div>
```

---

## Reference & Modifier Classes

### Sizing and Shapes

- `.ease-skeleton`: Base layout.
- `.ease-skeleton-text`: Text line shape (defaults to 100% width, 14px height).
- `.ease-skeleton-avatar`: Circular avatar shape (defaults to 48px size).
- `.ease-skeleton-circle`: Circular layout shape.
- `.ease-skeleton-rect`: Solid rectangle placeholder.
- `.ease-skeleton-image`: Image card layout with a built-in SVG placeholder icon.

### Animations

- `.anim-shimmer`: Sliding highlighting shimmer.
- `.anim-pulse`: Soft fading opacity loader.
- `.anim-wave`: Translating linear gradient sweep.

### Styling Variants

- `.minimal`: Transparent low-contrast style.
- `.gradient-sunset`: Warm dark-red/coral gradient loader.
- `.gradient-ocean`: Dark blue/teal depth gradient loader.
- `.gradient-violet`: Cyberpunk purple/violet gradient loader.

---

## Customization

You can override the default parameters by updating CSS variables at the root or within specific containers:

```css
:root {
  --skeleton-bg: #1f2937; /* Main placeholder background color */
  --skeleton-glow: #2d3748; /* Highlight block color (for wave effect) */
  --skeleton-shimmer-color: rgba(
    255,
    255,
    255,
    0.06
  ); /* Highlight color (for shimmer) */
}
```
