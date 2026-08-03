# Flip Skeleton (Corporate Theme)

A pure CSS loading skeleton component that utilizes a 3D flip animation (`rotateX`) instead of the traditional left-to-right shimmer. Styled with a clean, professional "Corporate" aesthetic, it provides an engaging way to indicate data loading in dashboards, tables, and financial applications.

## Features

- **Pure CSS 3D Flipping**: Uses `transform: perspective(600px) rotateX(...)` to continuously flip the skeleton placeholders in 3D space, creating a mechanical, structured loading rhythm.
- **Corporate Styling**: Employs professional, neutral grays (`#e5e7eb`, `#f3f4f6`) that fit perfectly into enterprise software, admin panels, and data-heavy interfaces.
- **Dynamic Staggering**: By applying `--ease-delay` CSS variables directly in the HTML, the flip animations cascade sequentially down the list, creating a highly satisfying "domino" effect without needing multiple CSS classes.
- **Gradient Sheen**: The flipping animation is paired with a shifting `linear-gradient` background to simulate a metallic or coin-like sheen as the element rotates through the virtual light source.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML using the `.ease-flip-skeleton` classes. Use the `--ease-delay` inline style to stagger the animations across multiple rows or blocks.

## Usage Example

```html
<div class="demo-skeleton-group">
  
  <!-- Row 1 -->
  <div class="demo-row">
    <!-- Apply the base class and a sizing modifier -->
    <div class="ease-flip-skeleton ease-avatar" style="--ease-delay: 0"></div>
    <div class="text-group">
      <!-- Stagger the delays sequentially -->
      <div class="ease-flip-skeleton ease-title" style="--ease-delay: 1"></div>
      <div class="ease-flip-skeleton ease-subtitle" style="--ease-delay: 2"></div>
    </div>
  </div>

  <!-- Row 2 -->
  <div class="demo-row">
    <div class="ease-flip-skeleton ease-avatar" style="--ease-delay: 1"></div>
    <div class="text-group">
      <div class="ease-flip-skeleton ease-title" style="--ease-delay: 2"></div>
      <div class="ease-flip-skeleton ease-subtitle" style="--ease-delay: 3"></div>
    </div>
  </div>

</div>
```

## Why it fits EaseMotion CSS

- **Algorithmic Animation**: Calculating `animation-delay` using `calc(var(--ease-delay) * var(--ease-flip-stagger))` prevents CSS bloat and allows developers to create infinitely long staggered lists.
- **Hardware Acceleration**: Both `transform` (3D rotation) and `background-position` are used instead of layout-altering properties, ensuring the loading animation runs at a stable 60FPS without interrupting the main thread.
