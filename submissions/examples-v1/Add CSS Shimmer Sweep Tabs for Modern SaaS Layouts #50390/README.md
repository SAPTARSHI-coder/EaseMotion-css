# Shimmer Sweep Tabs - Modern SaaS Layouts

A pure CSS animated tab component utilizing a clean, highly polished "Shimmer Sweep" interaction transition. Styled specifically for Modern SaaS interfaces, developer dashboards, and admin panels.

## Features

- **Pure CSS Interaction:** State is fully managed via the CSS hidden radio button hack (`:checked` combined with the general sibling combinator `~`), keeping your application lightweight and free of unnecessary JavaScript dependencies.
- **Subtle Shimmer Sweep Animation:** Clicking a tab triggers a fast background `scaleX` sweep, perfectly timed with a delicate, angled CSS gradient shimmer that traverses the active tab. It provides visual feedback that feels premium and responsive.
- **Modern SaaS Styling:** Designed with a sleek dark-mode aesthetic (slate/zinc colors) popular in modern development tools. Includes a beautifully structured segmented control navigation bar and realistic mock dashboard panels (featuring metrics grids, a bar chart, and a live terminal log view) to demonstrate the component in a real-world context.
- **Fully Responsive & Accessible:** Adapts to mobile views by enabling horizontal scrolling on the segmented control. Includes `sr-only` hidden radio buttons to ensure robust keyboard navigation (tabbing) and standard focus outlines.
- **CSS Variable Driven:** Exposes parameters like the brand's primary color, transition speeds, easing functions, and border radii via global CSS custom properties on the `:root`.

## Customization

You can seamlessly align the component with your design system by editing the CSS variables found at the top of `style.css`:

```css
:root {
  /* SaaS Theme Palette */
  --bg-app: #09090b; 
  --bg-card: #18181b;
  --border-subtle: #27272a;
  
  /* Brand Accent */
  --primary-color: #6366f1; /* Indigo */
  --primary-bg-active: rgba(99, 102, 241, 0.15);
  
  /* Tab Component API */
  --nav-bg: #121214; 
  --tab-padding: 0.5rem 1.25rem;
  --tab-radius: 6px; 
  
  /* Animation Timings */
  --sweep-speed: 0.3s; /* Snappy, responsive sweep */
  --sweep-ease: cubic-bezier(0.2, 0, 0, 1);
  --content-speed: 0.3s;
}
```

## How to Use

1. Copy the core HTML structure from `demo.html`. Ensure the hidden radio inputs (`.tab-input`) remain siblings to both `.tabs-nav` and `.tabs-content`.
2. Include `style.css` in your project.
3. Replace the mock dashboard content within the `.tab-panel` containers with your application's actual data views or forms.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <input type="radio" id="tab-overview" name="saas-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab-settings" name="saas-tabs" class="tab-input sr-only">
    
    <nav class="tabs-nav" aria-label="Dashboard Views">
        <label for="tab-overview" class="tab-label">Overview</label>
        <label for="tab-settings" class="tab-label">Settings</label>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-overview">...</div>
        <div class="tab-panel panel-settings">...</div>
    </div>
</div>
```
