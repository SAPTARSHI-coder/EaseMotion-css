# Shimmer Sweep Tabs - Marketing Landing Page Layouts

A pure CSS animated tab component featuring a highly engaging "Shimmer Sweep" interaction transition. Designed with high-contrast, polished aesthetics commonly found in modern SaaS Marketing Landing Pages.

## Features

- **Pure CSS Interaction:** Complete state management using the CSS hidden radio button hack (`:checked` combined with the `~` sibling selector), requiring zero JavaScript logic.
- **Synchronized Shimmer Sweep:** When a tab is activated, a vivid background color sweeps in from left to right (`scaleX` transform), perfectly synchronized with a bright, angled gradient shimmer that travels across the tab. The active tab also periodically shimmers to draw attention.
- **Marketing Page Styling:** Uses a clean, floating pill navigation design with soft drop shadows. The active tab emits a subtle glow. The content panels are presented inside a gorgeous "browser window" mockup with CSS art placeholders, representing a premium product showcase.
- **Responsive & Accessible:** Fluidly adapts to smaller screens by stacking the navigation pills. Implements `sr-only` hidden radio buttons to ensure robust keyboard navigation and screen-reader accessibility, complete with focus outlines.
- **Customizable Properties:** Exposes key parameters such as the primary brand color, sweep animation speeds, and easings globally via CSS custom properties on the `:root`.

## Customization

To align the component with your brand guidelines, simply adjust the CSS variables found at the top of `style.css`:

```css
:root {
  /* Marketing Theme Palette */
  --primary-color: #6366f1; /* Your brand primary color */
  --primary-glow: rgba(99, 102, 241, 0.35); /* Soft drop shadow glow */
  
  /* Tab Component API */
  --nav-bg: #ffffff;
  --tab-bg-idle: transparent;
  --tab-bg-hover: #f1f5f9;
  
  /* Animation Timings */
  --sweep-speed: 0.5s; /* Speed of the sweep fill */
  --sweep-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --content-speed: 0.4s;
}
```

## How to Use

1. Copy the core HTML structure from `demo.html`, ensuring the radio inputs (`.tab-input`) sit at the same structural level as the `.tabs-nav` and `.tabs-content`.
2. Include `style.css` in your project.
3. Replace the `.tab-panel` contents inside the showcase window with your own marketing copy and visuals.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <input type="radio" id="tab-1" name="marketing-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab-2" name="marketing-tabs" class="tab-input sr-only">
    
    <nav class="tabs-nav" aria-label="Feature Views">
        <label for="tab-1" class="tab-label">Feature 1</label>
        <label for="tab-2" class="tab-label">Feature 2</label>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-1">...</div>
        <div class="tab-panel panel-2">...</div>
    </div>
</div>
```
