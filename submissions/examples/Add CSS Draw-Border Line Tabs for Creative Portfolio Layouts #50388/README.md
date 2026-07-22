# Draw-Border Line Tabs - Creative Portfolio Layouts

A pure CSS animated tab component utilizing a smooth Draw-Border Line interaction transition. Styled with a sleek, ultra-dark theme and vibrant accents to perfectly complement high-end Creative Portfolio interface aesthetics.

## Features

- **Pure CSS Interaction:** State management is handled entirely using the CSS hidden radio button hack (`:checked` combined with general sibling selectors `~`), requiring absolutely zero JavaScript.
- **Draw-Border Line Animation:** Hovering over or selecting a tab triggers a clockwise sequential border drawing effect using precisely timed `::before` and `::after` pseudo-elements. Moving away elegantly un-draws the border counter-clockwise.
- **Creative Portfolio Styling:** Features an elegant grid layout with oversized modern typography (using the `Outfit` font), continuous panning CSS background animations for image placeholders, and a high-contrast neon accent (`#d4ff33`).
- **Fully Responsive & Accessible:** Gracefully degrades into a vertically stacked navigation layout on mobile devices. Built with hidden `sr-only` inputs to ensure it is fully keyboard accessible, displaying clear dashed outlines via `:focus-visible`.
- **CSS Variable Driven:** Exposes highly customizable parameters (e.g. animation speed, easings, scale factors, and color tokens) globally via CSS custom properties on the `:root`.

## Customization

You can easily adjust the aesthetics and interaction timing by changing the CSS variables defined at the top of the `style.css` file:

```css
:root {
  /* Component API Variables */
  --tab-font: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --tab-nav-gap: 1.5rem;
  --tab-padding: 1rem 2.5rem;
  
  /* Colors */
  --tab-color: var(--text-secondary);
  --tab-color-active: var(--text-primary);
  --tab-bg-active: rgba(255, 255, 255, 0.02);
  --tab-border-inactive: rgba(255, 255, 255, 0.08);
  --tab-border-active: var(--accent-color); /* Defaults to #d4ff33 */
  
  /* Motion & Easing */
  --draw-speed: 0.12s; /* Speed for each border segment */
  --draw-ease: cubic-bezier(0.645, 0.045, 0.355, 1);
  --content-speed: 0.6s;
  --content-delay: 0.3s;
}
```

## How to Use

1. Copy the core HTML structure from `demo.html`, ensuring you maintain the order of the `<input type="radio" class="sr-only">`, `.tabs-nav`, and `.tabs-content`.
2. Include the `style.css` file in your project.
3. Replace the placeholder content inside the `.tab-panel` divs with your own portfolio works.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <input type="radio" id="tab1" name="portfolio-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab2" name="portfolio-tabs" class="tab-input sr-only">
    
    <nav class="tabs-nav" aria-label="Portfolio Categories">
        <label for="tab1" class="tab-label"><span>Category 1</span></label>
        <label for="tab2" class="tab-label"><span>Category 2</span></label>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-1">...</div>
        <div class="tab-panel panel-2">...</div>
    </div>
</div>
```
