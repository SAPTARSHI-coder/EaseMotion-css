# Shimmer Sweep Tabs - Minimalist Tech Layouts

A pure CSS animated tab component utilizing a highly precise "Shimmer Sweep" interaction transition. This component adapts the sweep effect to a stark, ultra-clean aesthetic common in developer-focused tools, API documentation, and minimalist tech products.

## Features

- **Pure CSS Interaction:** State management is driven entirely by the CSS hidden radio button pattern (`:checked` paired with `~` general sibling selectors). This ensures exceptional performance with zero JavaScript required.
- **Snappy Shimmer Sweep Animation:** Clicking a tab triggers an incredibly fast (`0.25s`) stark black background `scaleX` sweep. This is perfectly synchronized with a subtle silver shimmer gradient that flashes across the active tab. The active tab maintains a periodic 4-second shimmer loop to give the interface a "live" technological feel.
- **Minimalist Tech Styling:** Built on a rigorous black-and-white minimalist palette (`#ffffff` backgrounds with `#0a0a0a` active states). The typography pairs `Inter` for sans-serif legibility with `JetBrains Mono` for precise technical data. 
- **API Doc Mockup:** The HTML demo provides a realistic context by wrapping the tabs in an API documentation layout, complete with mock curl command windows, HTTP method badges, and data tables.
- **Fully Responsive & Accessible:** Fluidly handles overflow on mobile via a scrollable navigation container. `sr-only` inputs guarantee robust keyboard navigation and standard focus outlines.

## Customization

You can seamlessly align the component with your platform by editing the CSS variables found at the top of `style.css`:

```css
:root {
  /* Minimalist Tech Palette */
  --bg-page: #ffffff;
  --text-main: #0a0a0a; 
  --border-color: #e5e5e5; 
  
  --active-bg: #0a0a0a; /* The stark background that sweeps in */
  --active-text: #ffffff;
  
  /* Tab Component API */
  --tab-padding: 0.375rem 0.875rem;
  
  /* Animation Timings */
  --sweep-speed: 0.25s; /* Very snappy for tech tools */
  --sweep-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --content-speed: 0.3s;
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, ensuring the radio inputs (`.tab-input`) sit at the same level as `.tabs-nav` and `.tabs-content`.
2. Include the `style.css` stylesheet in your project.
3. Replace the mock documentation content within the `.tab-panel` wrappers with your actual API references or system logs.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <input type="radio" id="tab-endpoints" name="tech-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab-webhooks" name="tech-tabs" class="tab-input sr-only">
    
    <nav class="tabs-nav" aria-label="Documentation Views">
        <label for="tab-endpoints" class="tab-label">Endpoints</label>
        <label for="tab-webhooks" class="tab-label">Webhooks</label>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-endpoints">...</div>
        <div class="tab-panel panel-webhooks">...</div>
    </div>
</div>
```
