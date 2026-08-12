# Shimmer Sweep Tabs - Dashboard Analytics Layouts

A pure CSS animated tab component utilizing a highly functional "Shimmer Sweep" interaction transition. This component adapts the sweep effect to a classic dashboard "underline" tab structure, perfect for data-heavy Analytics interfaces.

## Features

- **Pure CSS Interaction:** Tab state logic is driven completely by the CSS invisible radio button hack (`:checked` paired with `~` general sibling selectors). Absolutely no JavaScript required.
- **Underline + Shimmer Sweep Animation:** While maintaining the familiar dashboard underline tab pattern, clicking a tab causes a soft primary background to rapidly sweep in from left to right (`scaleX` transform), instantly followed by a bright white shimmer. This adds a premium, polished feel to standard data interfaces.
- **Dashboard Analytics Styling:** Features a clean, high-contrast light mode UI (`#f8fafc` background with crisp white cards). Includes highly realistic mock data panels displaying stat boxes and CSS-driven chart mockups (bar chart, area chart, and cohort grid).
- **Fully Responsive & Accessible:** Navigates smoothly on mobile via horizontal scrolling tabs. The component utilizes hidden `sr-only` inputs to guarantee flawless keyboard accessibility and visible focus outlines.
- **CSS Variable Driven:** Exposes essential parameters globally via CSS custom properties on the `:root`, making it trivial to change the primary brand color, animation speeds, and fonts.

## Customization

You can seamlessly align the component with your analytics dashboard by editing the CSS variables found at the top of `style.css`:

```css
:root {
  /* Dashboard Analytics Theme */
  --bg-app: #f8fafc;
  --bg-card: #ffffff;
  
  /* Primary Accent Colors (e.g. Teal/Sky Blue) */
  --primary-color: #0284c7; /* Used for active text and bottom border */
  --primary-bg: #e0f2fe; /* Soft background used for the sweep */
  
  /* Tab Component API */
  --tab-font: 'Inter', system-ui, -apple-system, sans-serif;
  --tab-padding: 0.875rem 1.5rem;
  
  /* Animation Timings */
  --sweep-speed: 0.35s;
  --sweep-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --content-speed: 0.4s;
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, ensuring the radio inputs (`.tab-input`) sit at the same level as `.tabs-nav` and `.tabs-content`.
2. Include the `style.css` stylesheet in your project.
3. Replace the mock analytics content within the `.tab-panel` wrappers with your real application charts, tables, and widgets.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <input type="radio" id="tab-revenue" name="analytics-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab-acquisition" name="analytics-tabs" class="tab-input sr-only">
    
    <nav class="tabs-nav" aria-label="Analytics Views">
        <label for="tab-revenue" class="tab-label">Revenue</label>
        <label for="tab-acquisition" class="tab-label">Acquisition</label>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-revenue">...</div>
        <div class="tab-panel panel-acquisition">...</div>
    </div>
</div>
```
