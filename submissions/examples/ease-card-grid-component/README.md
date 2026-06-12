# EaseMotion Card Grid System

A highly responsive, flexible, and modern Card Grid Layout System for EaseMotion CSS. This component provides the structural foundation for displaying structured content such as dashboards, product listings, pricing tables, and features.

## Overview

The Grid System relies heavily on CSS Grid for structured layouts (like 2/3/4 columns or auto-fitting columns) and CSS Columns for Masonry-style layouts.

The Card System uses Flexbox internally to ensure that the content is distributed evenly, with footers pushed to the bottom, ensuring equal height across all cards within a grid row.

## Features

- **Fully Responsive**: Automatically collapses to single columns on mobile devices (`max-width: 640px`) and adjusts column counts on tablets (`max-width: 1024px`).
- **Auto-fit Magic Grid**: Uses `repeat(auto-fit, minmax(...))` to automatically fill the available space without requiring explicit media queries.
- **Equal Heights**: Cards within the same grid automatically stretch to match the height of the tallest card in that row.
- **Hover Micro-Interactions**: Cards feature a subtle vertical lift (`translateY`) and a deeper, softer shadow on hover.
- **No Dependencies**: Pure vanilla CSS and HTML.

## Grid Variants

- `.ease-grid-2`: 2 equal columns.
- `.ease-grid-3`: 3 equal columns.
- `.ease-grid-4`: 4 equal columns.
- `.ease-grid-auto`: Automatically fits as many `250px` wide columns as possible.
- `.ease-grid-auto-lg`: Automatically fits as many `300px` wide columns as possible.
- `.ease-grid-masonry`: A Pinterest-style masonry layout using CSS `column-count`.
- `.ease-grid-dashboard-top` & `.ease-grid-dashboard-main`: Specialized layouts for SaaS dashboards.

## Card Types & Usage

### Basic Card HTML Structure

```html
<div class="ease-grid ease-grid-3">
  <div class="ease-card">
    <!-- Optional Image -->
    <img src="..." class="ease-card-image-top" />

    <!-- Body Content -->
    <div class="ease-card-body">
      <h3 class="ease-card-title">Card Title</h3>
      <p class="ease-card-text">Main card description goes here.</p>
    </div>

    <!-- Optional Footer -->
    <div class="ease-card-footer">
      <button class="ease-btn">Action</button>
    </div>
  </div>

  <!-- More cards... -->
</div>
```

### Specialized Cards

- **Stats Card** (`ease-card-stat`): For displaying key metrics (e.g., "$45,231").
- **Pricing Card** (`ease-card-pricing`): For subscription tiers. Use `.featured` to highlight a specific tier.
- **Feature Card** (`ease-card-feature`): For highlighting product features with a leading icon.

## Customization

Easily adjust the layout gaps and card styling via CSS variables:

```css
:root {
  --ease-card-bg: #ffffff;
  --ease-card-radius: 12px;
  --ease-grid-gap: 1.5rem; /* Controls spacing between cards */
  --ease-card-padding: 1.5rem; /* Controls inner padding */
  --ease-card-accent: #3b82f6; /* Primary brand color */
}
```
