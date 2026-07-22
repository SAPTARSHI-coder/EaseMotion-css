# Scale-Hover Carousel

A pure CSS animated horizontal carousel featuring a sophisticated scale-hover interaction transition, designed to complement responsive dashboard interface aesthetics.

## Features

- **Pure CSS Scrolling:** Utilizes native CSS Scroll Snap (`scroll-snap-type: x mandatory`) for a fluid, accessible, and high-performance scrolling experience on both desktop and mobile devices.
- **Scale-Hover Interaction:** Leverages the modern CSS `:has()` pseudo-class to create a dynamic depth-of-field effect. When a user hovers over (or focuses on) a specific metric card, that card scales up and elevates, while the surrounding sibling cards smoothly scale down and fade back.
- **Dashboard Widget Styling:** Includes styled mockup widgets complete with trend indicators, iconography, and abstract CSS-based data visualizations (bar and line sparklines).
- **Responsive:** Fluidly adapts from a multi-column view on desktop to a single-card peek layout on mobile (`flex: 0 0 85%`).
- **Keyboard Accessible:** Fully operable via keyboard. Focusing on a card (`:focus-visible`) triggers the same scale-and-highlight interaction as a hover.

## Customization

The component exposes several CSS variables on the `:root` pseudo-class for seamless customization:

```css
:root {
    /* Scale-Hover Parameters */
    --carousel-scale-hover: 1.05;
    --carousel-scale-down: 0.96;
    --carousel-opacity-down: 0.6;
    --carousel-transition-time: 0.4s;
    --carousel-easing: cubic-bezier(0.25, 1, 0.5, 1);
    
    /* Dashboard Theme Palette */
    --bg-main: #f8fafc;
    --bg-card: #ffffff;
    /* ... see style.css for all properties */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`.
2. Include the styles from `style.css`.
3. Add your widget content inside the `.widget-card` elements. Ensure your track remains an unordered list `<ul>` and items are `<li>` for standard structural semantics.

```html
<!-- Core Structure -->
<div class="carousel-container">
    <ul class="carousel-track" tabindex="0">
        <li class="carousel-item">
            <article class="widget-card" tabindex="0">
                <!-- Content here -->
            </article>
        </li>
        <li class="carousel-item">
            <article class="widget-card" tabindex="0">
                <!-- Content here -->
            </article>
        </li>
    </ul>
</div>
```

**Note on Browser Support:** The advanced sibling scaling effect relies on the CSS `:has()` selector. Browsers that do not yet support `:has()` will elegantly degrade by only scaling up the hovered card (ignoring the scale-down on siblings), ensuring the interface remains fully usable and visually pleasing.
