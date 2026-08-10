# CSS Zoom-Out Tabs for Interactive Interface

A highly refined, pure CSS tabs component utilizing a spatial "Zoom-Out" interaction transition. This component provides deep Z-axis spatial context when navigating forwards or backwards, making it a perfect fit for Interactive Interfaces, Dashboards, and SaaS web applications.

## Features

- **Spatial Zoom-Out Transition**: Uses targeted `transform: scale()` logic based on the relative logical position of the tabs. Moving "forward" zooms out the old content and zooms in the new content. Moving "backward" applies the reverse logic, giving strong spatial awareness.
- **Pure CSS State Logic**: Powered seamlessly by visually hidden radio buttons (`.sr-only`) and the modern `:has()` selector, removing any need for JavaScript state management.
- **Interactive Interface Aesthetics**: Beautiful UI elements mimicking modern web apps, utilizing crisp borders, deep drop-shadows, the `Plus Jakarta Sans` typography, and interactive mock dashboard widgets.
- **Fully Accessible**: Implements visually-hidden `.sr-only` class to retain full keyboard navigation and native screen reader support. Includes clear `:focus-visible` dashed outlines and gracefully handles `@media (prefers-reduced-motion: reduce)`.
- **Responsive Framework**: Includes a responsive CSS Grid dashboard layout that collapses elegantly on mobile viewports.

## Custom Parameters (CSS Variables)

You can tune the spatial depth, timing, and brand colors via custom CSS properties mapped to `.ease-zoom-out-tabs`:

```css
.ease-zoom-out-tabs {
    --zoom-duration: 0.5s;
    --zoom-easing: cubic-bezier(0.16, 1, 0.3, 1); /* Snappy spatial ease */
    
    /* Spatial scales for the directional zoom transition */
    --scale-out: 0.92;   /* How much panels shrink into the background */
    --scale-in: 1.05;    /* Starting scale for incoming panels */
    
    /* Theming Tokens */
    --ui-accent: #4f46e5;
    --ui-accent-hover: #4338ca;
    --ui-bg: #f8fafc;
    --ui-border: #e2e8f0;
    --ui-text: #64748b;
    --ui-text-active: #0f172a;
}
```

## Structure
- `demo.html` - The HTML structure demonstrating the Zoom-Out Tabs in a mock SaaS Dashboard / Interactive Interface layout.
- `style.css` - Contains the logic for spatial state scaling, typography tokens, mock dashboard aesthetics, and accessibility fallbacks.
