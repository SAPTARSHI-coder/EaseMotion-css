# Skeleton Loaders Collection

This is a self-contained example demonstrating how to create modern, animated skeleton loaders for loading states using pure CSS, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎬 **Smooth Shimmer Animation:** Gradient moves across skeleton elements for a polished loading effect.
- 📝 **Text Lines:** Multiple width variants for realistic text content placeholders.
- 🖼️ **Image Placeholders:** Aspect ratio support for video thumbnails and images.
- 👤 **Profile Cards:** Avatar and user info skeleton layouts.
- 📋 **List Items:** Icon/avatar + text content combinations.
- 📊 **Data Tables:** Header and row skeletons for tabular data.
- 📈 **Statistics:** Number and label placeholders for dashboards.
- 🎨 **Blog Cards:** Complete card layout with image, title, excerpt, and metadata.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` with pulse fallback.
- 📱 **Responsive:** Adapts to mobile screens with adjusted layouts.
- 🚫 **Zero JavaScript:** Entirely built with HTML and CSS.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Use the `.skeleton` base class with modifier classes for variants.
4. Combine with width utilities (`.skeleton--w-50`, `.skeleton--w-100`, etc.) for realistic layouts.

## Available Variants

### Base Classes
- `.skeleton` - Base shimmer animation
- `.skeleton--text` - Text line placeholder
- `.skeleton--circle` - Circular placeholder (avatars, icons)
- `.skeleton--image` - Image placeholder with aspect ratio

### Width Utilities
- `.skeleton--w-15` to `.skeleton--w-100` (15% to 100% width)

### Size Utilities
- `.skeleton--w-8` (2rem × 2rem)
- `.skeleton--w-10` (2.5rem × 2.5rem)
- `.skeleton--w-20` (5rem × 5rem)

### Layout Components
- `.skeleton-card` - Container for grouped skeletons
- `.skeleton-list-item` - List item layout
- `.skeleton-table` - Table structure
- `.skeleton-stat` - Statistics layout

## Customization
- **Animation Speed:** Change the `1.5s` duration in the `@keyframes shimmer`.
- **Colors:** Modify the gradient colors in the `.skeleton` background.
- **Border Radius:** Adjust the `border-radius` value for different shapes.
- **Spacing:** Modify margins and padding in layout components.

## Techniques Used
- **CSS Gradients:** Linear gradients with `background-size: 200%` for shimmer effect.
- **Background Position Animation:** Moving gradient position creates the shimmer.
- **Aspect Ratio:** Modern `aspect-ratio` property for consistent image placeholders.
- **CSS Grid:** For table and stats layouts.
- **Flexbox:** For list items and profile cards.

## Browser Compatibility
- Uses `aspect-ratio` (supported in all modern browsers)
- Uses CSS Grid and Flexbox (widely supported)
- Shimmer animation works in all modern browsers