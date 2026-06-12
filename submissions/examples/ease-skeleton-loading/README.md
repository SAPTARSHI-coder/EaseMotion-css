# Modern Skeleton Loading Component

A professional, high-performance skeleton loading framework built with pure HTML and CSS. It provides realistic layouts for user profiles, media items, article cards, dashboard widgets, buttons, and progress indicators using a smooth, GPU-accelerated shimmer effect.

---

## 1. What does this do?

This component renders lightweight visual placeholders (skeleton outlines) for content while it's loading. It features:

- **GPU-Accelerated Shimmer**: Uses `transform: translateX` animations to ensure the loading effect runs at 60fps/120fps on the browser compositor thread, preventing paint overhead.
- **Multiple Layout Presets**: Provides templates for Profile Cards, Media/Article Cards, and Dashboard Widgets.
- **Customizable Shapes & Sizes**: Ready-made classes for circular avatars, text lines of varying widths, image containers, badges, and button shapes.
- **Responsive Layout**: Designed to adapt perfectly to mobile, tablet, and desktop layouts.
- **Light/Dark Mode Support**: Styled using CSS variables that automatically adapt to light and dark themes.

---

## 2. How is it used?

Import the CSS file and structure your markup using the core skeleton elements:

```html
<!-- Skeleton Card Container -->
<div class="ease-skeleton-card">
  <!-- Header Row (Avatar + Column info) -->
  <div class="ease-skeleton-row" style="margin-bottom: 20px;">
    <!-- Circular Avatar Skeleton -->
    <span class="ease-skeleton ease-skeleton-avatar"></span>

    <div class="ease-skeleton-col">
      <!-- Medium Title Skeleton -->
      <span class="ease-skeleton ease-skeleton-title w-7-12"></span>
      <!-- Small Subtext Skeleton -->
      <span class="ease-skeleton ease-skeleton-text w-4-12"></span>
    </div>
  </div>

  <!-- Card Content Lines -->
  <div style="margin-bottom: 24px;">
    <span class="ease-skeleton ease-skeleton-text w-full"></span>
    <span class="ease-skeleton ease-skeleton-text w-11-12"></span>
    <span class="ease-skeleton ease-skeleton-text w-7-12"></span>
  </div>

  <!-- Pill Button Skeleton -->
  <span class="ease-skeleton ease-skeleton-btn w-5-12"></span>
</div>
```

### Class Catalog

| Class Name              | Description                                                                     |
| :---------------------- | :------------------------------------------------------------------------------ |
| `.ease-skeleton-card`   | Container card component with default borders, shadows, and paddings.           |
| `.ease-skeleton`        | Base class that sets up the background color and applies the shimmer overlay.   |
| `.ease-skeleton-avatar` | Circular avatar block (defaults to `56px x 56px`).                              |
| `.ease-skeleton-title`  | Thicker block representing a title header line.                                 |
| `.ease-skeleton-text`   | Thinner block representing standard body text lines.                            |
| `.ease-skeleton-btn`    | Button-shaped skeleton block with fully rounded pill corners.                   |
| `.ease-skeleton-img`    | Media placeholder block suitable for images, graphs, or cards.                  |
| `.ease-skeleton-badge`  | Small pill shape ideal for tags, labels, or statuses.                           |
| `.ease-skeleton-row`    | Layout flex container that displays elements in a row with default gap spacing. |
| `.ease-skeleton-col`    | Layout flex container that displays elements in a column.                       |

### Text Width Helpers

To make paragraph blocks look natural, use the text width helpers:

- `.w-full` (100%)
- `.w-11-12` (91.6%)
- `.w-10-12` (83.3%)
- `.w-9-12` (75%)
- `.w-8-12` (66.6%)
- `.w-7-12` (58.3%)
- `.w-6-12` (50%)
- `.w-5-12` (41.6%)
- `.w-4-12` (33.3%)
- `.w-3-12` (25%)
- `.w-2-12` (16.6%)

### Theme Customization

You can easily customize the skeleton color palette by updating these CSS variables:

```css
:root {
  /* Customize radii */
  --skeleton-radius-default: 8px;

  /* Customize colors */
  --skeleton-bg: #e2e8f0;
  --skeleton-shimmer-gradient: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}
```

---

## 3. Why is it useful?

1. **Reduces Perceived Wait Time**: Research shows that displaying a skeleton loading state instead of a spinner makes users perceive the application as loading faster and being more responsive.
2. **Prevents Layout Shift (CLS)**: Skeletons preserve the structural layout of content before it loads. This avoids sudden jumps and page shifts when assets arrive, satisfying Core Web Vitals targets.
3. **Pure CSS (No JS Overhead)**: Works instantly without relying on heavy client-side scripts or loading states.
4. **Performance Optimized**: Traditional skeleton animations shift `background-position`, triggering continuous style recalculation and repaint cycles on the main thread. This component animates pseudo-elements using `transform: translateX`, meaning it runs entirely on the GPU compositor thread for maximum fluid performance.
5. **Universal Layout Compatibility**: The modular class system allows developers to build any skeleton layout (Profile, E-Commerce, Dashboards, Articles) without writing custom styles.
