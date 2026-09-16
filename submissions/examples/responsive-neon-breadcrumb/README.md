# Responsive Neon Breadcrumb

A modern, highly polished, pure CSS breadcrumb navigation component featuring cyberpunk-inspired neon text shadows and smooth hover transitions. Built for Issue #79650.

## Features
- **Pure CSS (No JS):** Lightweight and fully styled using CSS properties.
- **Neon Glow Effects:** Uses complex `text-shadow` layering to create realistic, glowing text without heavy filters or SVG dependencies.
- **Accessible & Semantic:** Utilizes `<nav aria-label="Breadcrumb">` and `<ol>` tags. Links are correctly structured, and the active path uses `aria-current="page"`.
- **Fully Responsive:** Prevents horizontal layout breaks on mobile devices by seamlessly converting to a horizontally scrollable list with a hidden scrollbar and soft edge-masking.
- **CSS Variables Driven:** Easily switch neon themes by overriding root colors (demonstrated with Pink, Blue, and Green themes in the demo).
- **Motion Safe:** Respects `@media (prefers-reduced-motion: reduce)` by falling back to solid color changes without the animated blur layers.

## Folder Structure
- `demo.html` - The showcase containing structural usage and various color themes.
- `style.css` - The core structural layout and styling.
- `README.md` - Documentation.

## HTML Usage

Ensure your breadcrumb is wrapped in a `<nav>` with an appropriate aria-label. Use an `<ol>` for the links, and add `aria-current="page"` to the final active link. 

```html
<nav aria-label="Breadcrumb" class="ease-neon-breadcrumb">
    <ol>
        <li><a href="#">Home</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#" aria-current="page" class="current-page">Neon Breadcrumb</a></li>
    </ol>
</nav>
```
*Note: The separators (`/`) are automatically injected via CSS `::after` pseudo-elements. Do not manually add them to your HTML.*

## CSS Customization

The component uses scoped CSS variables. You can easily override the neon color by applying a new class or setting the variables inline:

```css
.ease-neon-breadcrumb {
    --neon-color-main: #f472b6;   /* The core color */
    --neon-color-glow: #db2777;   /* The deeper ambient glow color */
    --neon-text-base: #a1a1aa;    /* Normal un-hovered text */
    --neon-text-hover: #ffffff;   /* Text color when glowing */
    --neon-separator: #52525b;    /* Divider slash color */
}
```

## Accessibility Notes
- **Focus Rings:** Explicit `:focus-visible` styling is included on all interactive links for users navigating via keyboard.
- **Semantic Path:** Because the visual `/` separators are rendered via CSS `content`, they are correctly ignored by screen readers, which will simply read the `<ol>` list structure sequentially.
