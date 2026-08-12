# CSS Course Progress Card

A modern, highly-polished e-learning course card featuring a pure CSS animated circular progress ring. 

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. The circular progress ring utilizes an incredibly performant SVG `stroke-dashoffset` animation driven natively by CSS `@keyframes`.
- **Dynamic Variable Driven**: By passing a simple inline CSS variable (`style="--progress: 75;"`) to the HTML element, the CSS perfectly calculates the exact dash offset math (`calc()`) and automatically animates the ring to the exact percentage.
- **Micro-Interactions**: The entire card functions as a smooth, interactive hit area. Hovering elevates the card with a refined shadow (`box-shadow` and `translateY`), while the "button" element visually depresses on click (`scale`).
- **Accessible**: Functions as a single `<a>` tag to maximize the click target and maintain correct tab flow. Includes an overarching `aria-label` providing the course name and current progress percentage to screen readers. Respects user preferences by gracefully disabling the ring draw animation via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your dashboard grid. To update the completion percentage, simply modify the text label and the inline `--progress` CSS variable on the `.progress-ring-fill` element.

```html
<a href="#" class="course-card" aria-label="Course: UI Design. 75% complete.">
  <!-- ... -->
  <circle class="progress-ring-fill" style="--progress: 75;"></circle>
  <span class="progress-text">75%</span>
  <!-- ... -->
</a>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--accent-color`: The primary color for icons and the CTA button (default: `#6366f1`)
- `--ring-color`: The color of the filled progress ring (default: `#10b981`)
- `--ring-bg`: The color of the empty progress track (default: `#e2e8f0`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge). The `calc()` functionality with CSS variables is widely supported.
