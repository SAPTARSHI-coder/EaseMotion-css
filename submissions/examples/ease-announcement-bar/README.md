# Ease Announcement Bar

A modern, responsive, and dismissable top banner component built with **EaseMotion CSS**. Ideal for announcements, promotions, alerts, or maintenance notices.

## Key Features
- **Slide-down Entrance**: Smoothly animates into view when the page loads.
- **Color Variants**: Includes semantic variants: `.is-info` (default), `.is-success`, `.is-warning`, and `.is-danger`.
- **Dismissable**: Supports a hidden state via the `.is-dismissed` class.
- **Design Token Driven**: Fully leverages EaseMotion CSS variables for colors, spacing, and timing.
- **Accessibility**: Respects `prefers-reduced-motion` and includes semantic markup.

## How to Use
1. Include `easemotion.css` in your project.
2. Structure your HTML using the `.ease-announce-bar` class.
3. Apply color variants as needed (e.g., `.is-success`).
4. Use a small script or CSS hack to apply the `.is-dismissed` class to hide the banner.

```html
<div class="ease-announce-bar is-info">
  <div class="ease-announce-bar-content">
    <strong>New!</strong> EaseMotion v2.0 is now available.
  </div>
  <button class="ease-announce-bar-close" aria-label="Dismiss">&times;</button>
</div>
```

## Directory Structure
- `demo.html`: Interactive demo showcasing all variants and the dismiss functionality.
- `style.css`: Styles for the banner layout, variants, and animations.
