# CSS Magnetic Pull Accordion for Dashboard Analytics

A pure CSS accordion component built on native `<details>` and `<summary>` HTML elements. It features a unique "Magnetic Pull" interaction: when hovering or focusing the header, the entire row subtly pulls upwards via `transform: translateY()` while smoothly elevating its `box-shadow`. This creates a premium, tactile feel perfectly suited for modern SaaS and Analytics dashboards.

## Files
- `demo.html` – A standalone demonstration page featuring a mocked analytics dashboard with three interactive data panels.
- `style.css` – The heavily-commented stylesheet containing the magnetic transform logic and the CSS Grid trick for animating the height of the accordion body.

## How it works
1. **Semantic Foundation**: Relies entirely on the native HTML5 `<details>` and `<summary>` tags, providing built-in accessibility and keyboard navigation out of the box.
2. **The Magnetic Pull**: The `.ease-magnetic-summary` class is given a baseline `transform: translateY(0)`. On `:hover` and `:focus-visible`, it transitions to `transform: translateY(-4px)` using a bouncy `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve. 
3. **Smooth Expansion**: Native `<details>` elements do not animate their height by default. This stylesheet uses the modern CSS Grid trick (`grid-template-rows: 0fr` to `1fr`) on the `.ease-magnetic-content` wrapper to smoothly slide open the data panels.
4. **State Locking**: Once the accordion is `[open]`, the magnetic hover effect is disabled to prevent the content from bouncing up and down while the user is trying to read the data charts.

## Usage

You can copy the HTML structure and CSS variables directly into your dashboard layouts.

```html
<details class="ease-magnetic-accordion" name="analytics-panels">
    <summary class="ease-magnetic-summary">
        <div class="summary-content">
            <span class="icon">📈</span>
            <h3>User Engagement Metrics</h3>
        </div>
        <div class="ease-magnetic-indicator">
            <!-- SVG Chevron Here -->
        </div>
    </summary>
    <div class="ease-magnetic-content">
        <div class="ease-content-inner">
            <p>Your analytics charts and data go here.</p>
        </div>
    </div>
</details>
```

### Customizing the Magnetic Pull
The interaction is governed by standard CSS Custom Properties defined in `:root`, making it trivial to adjust for your brand:

```css
:root {
  --ease-magnetic-pull-distance: -4px; /* How far it pulls up */
  --ease-magnetic-transition-time: 0.3s; /* Speed of the snap */
  --ease-magnetic-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* The spring physics */
}
```

## Accessibility (prefers-reduced-motion)
Because it uses `<details>` and `<summary>`, screen readers naturally understand the expanded/collapsed state without needing manual `aria-expanded` ARIA attributes. A strict `@media (prefers-reduced-motion: reduce)` block is included to instantly strip away the magnetic transforms, grid animations, and box-shadow transitions for users who are sensitive to motion.

## Why it fits EaseMotion CSS
EaseMotion advocates for zero-JavaScript UI patterns whenever possible. Accordions are typically built using bloated React/Vue state libraries or heavy JS height-calculation scripts to achieve smooth animations. By combining the native `<details>` element with modern CSS Grid height transitions and a unique "magnetic pull" hover state, this component delivers a deeply interactive, 60fps experience entirely within the browser's CSS rendering engine.
