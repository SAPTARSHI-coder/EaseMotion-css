# Draw-Border Line Tabs - Interactive Interface Layouts

A pure CSS animated tab component featuring a rapid Draw-Border Line interaction transition. Styled specifically for modern "Interactive Interface" environments such as SaaS dashboards, admin panels, and application settings views.

## Features

- **Pure CSS Interaction:** State management is completely handled using the robust CSS hidden radio button hack (`:checked` combined with general sibling selectors `~`), ensuring zero JavaScript dependencies.
- **Draw-Border Animation:** Selecting or hovering over a tab initiates a swift, clockwise sequential border drawing effect via `::before` and `::after` pseudo-elements. The border thickness (2px) and sharp edges give it a very crisp, app-like feel.
- **Interactive Interface Styling:** Built on a deep slate dark mode palette (`#0f172a` background with `#1e293b` cards) complemented by a highly visible interactive primary blue (`#3b82f6`). The design utilizes the `Inter` typeface and includes responsive mock UI controls (switches, inputs, and progress bars) within the panels to demonstrate a real-world use case.
- **Fully Responsive & Accessible:** The layout adapts to mobile seamlessly by providing horizontal scroll for the tab navigation and stacked layout for settings. Hidden `sr-only` inputs are used to guarantee full keyboard accessibility and clear visual focus outlines.
- **CSS Variable Driven:** Exposes parameters such as animation speeds, colors, and easings globally via CSS custom properties on the `:root` pseudo-class.

## Customization

You can easily adjust the aesthetics and interaction timing by changing the CSS variables defined at the top of the `style.css` file:

```css
:root {
  /* Application Theming */
  --app-bg: #0f172a; 
  --card-bg: #1e293b; 
  
  /* Interactive Elements */
  --interactive-primary: #3b82f6; /* Adjust this to match your brand */
  --interactive-hover: #2563eb; 
  
  /* Tab API Settings */
  --tab-font: 'Inter', system-ui, -apple-system, sans-serif;
  --tab-padding: 0.875rem 1.75rem;
  
  /* Draw Border Timings */
  --draw-speed: 0.08s; /* Very fast and snappy for UI interactions */
  --draw-ease: ease-in-out;
  --content-speed: 0.3s;
}
```

## How to Use

1. Copy the core HTML structure from `demo.html`, ensuring you maintain the structural order: `<input type="radio" class="sr-only">`, followed by `.tabs-nav`, and `.tabs-content`.
2. Include the `style.css` file in your dashboard or application project.
3. Replace the mock settings content inside the `.tab-panel` containers with your actual application views.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <!-- State Inputs -->
    <input type="radio" id="tab-general" name="settings-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab-security" name="settings-tabs" class="tab-input sr-only">
    
    <!-- Navigation Labels -->
    <nav class="tabs-nav" aria-label="Settings Categories">
        <label for="tab-general" class="tab-label">General</label>
        <label for="tab-security" class="tab-label">Security</label>
    </nav>
    
    <!-- Panel Content -->
    <div class="tabs-content">
        <div class="tab-panel panel-general">...</div>
        <div class="tab-panel panel-security">...</div>
    </div>
</div>
```
