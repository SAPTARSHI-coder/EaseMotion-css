# CSS Fade-Out Tabs for Marketing Landing Page

A pure CSS tabs component that utilizes a highly polished, buttery-smooth "Fade-Out" crossfade transition. Designed to complement high-converting Marketing Landing Pages, it provides a seamless visual experience without any jarring movements.

## Features

- **Pure Fade-Out Transition**: A completely stationary, elegant crossfade effect using `opacity` and `visibility`. It is cinematic, distraction-free, and ideal for marketing pages where the content (images and copy) should remain the focal point.
- **Pure CSS State Logic**: Driven entirely by visually hidden radio buttons (`.sr-only`) and the modern `:has()` selector. No JavaScript is needed, ensuring instant execution and flawless SEO indexing.
- **Marketing Aesthetics**: Designed with conversion in mind:
  - Bright, clean, and airy layouts.
  - Energetic coral/red primary action colors.
  - Beautiful `Poppins` typography for approachable but professional headers.
  - Structured benefit lists (checkmarks) and strong Call-To-Action (CTA) links.
- **Fully Accessible**: Implements visually-hidden `.sr-only` class to retain full keyboard navigation. Includes clear `:focus-visible` dashed outlines and gracefully handles `@media (prefers-reduced-motion: reduce)` by bypassing all fade and slide transitions instantly.
- **Responsive Framework**: The two-column feature showcase elegantly stacks into a single column for mobile viewports, and the tab navigation shrinks proportionally.

## Custom Parameters (CSS Variables)

Easily adjust the timing of the fade or the brand colors via custom CSS properties mapped to `.ease-fade-tabs`:

```css
.ease-fade-tabs {
    --fade-duration: 0.6s;
    --fade-easing: cubic-bezier(0.4, 0, 0.2, 1); /* Elegant crossfade ease */
    
    --brand-primary: #ff5a5f; /* Energetic coral/red */
    --brand-surface: #ffffff;
    --brand-border: #e2e8f0;
}
```

## Structure
- `demo.html` - The markup representing a mock marketing site hero and feature section to demonstrate the tabs.
- `style.css` - Contains the logic for the seamless opacity crossfade, the pill-shaped sliding indicator, and the marketing block layout.
