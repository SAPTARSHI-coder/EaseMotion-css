# CSS Floating Orbit Tabs - Dashboard Layout

A fluid, pure CSS tab component designed specifically for responsive data dashboards, featuring crisp metrics, subtle floating transitions, and orbiting data node indicators.

## Features
- **Responsive Dashboard Aesthetics**: Clean, high-density layout using functional colors, subtle borders, and micro-interactions optimized for data-heavy interfaces.
- **Fluid Grid Layout**: The tab track utilizes `display: grid` with `1fr` fractional columns, making the tabs inherently fluid and perfectly responsive to any container width.
- **Percentage-based Transforms**: The floating indicator uses dynamic `calc()` widths to match exactly one grid column. By using `translateX(100%)`, it smoothly glides to the correct position regardless of the parent's actual pixel width—no fixed pixel measurements required!
- **Data Node Orbits**: The indicator features two small "data node" satellites that orbit the active tab smoothly using 360-degree CSS rotation.
- **Keyboard Accessible**: Focusable native radio buttons ensure perfect keyboard navigation and screen reader support, natively integrated into the dashboard structure.

## Customization

You can easily adjust the structure and styling by modifying standard CSS custom properties defined in `:root`.

```css
:root {
  /* Layout Parameters */
  --tab-count: 4;           /* Important: Update this if you add/remove tabs */
  --header-padding: 4px;
  --tab-height: 36px;       /* Compact size for dashboard density */
  
  /* Dashboard Colors */
  --brand-primary: #2563eb; /* Primary functional blue */
  --data-node-1: #fbbf24;   /* First satellite color */
  --data-node-2: #38bdf8;   /* Second satellite color */
  
  /* Interaction Timing & Physics */
  --orbit-speed-1: 3s;      
  --float-speed: 3s;        /* Vertical breathing animation speed */
  --transition-duration: 0.4s; 
  --transition-easing: cubic-bezier(0.2, 0.9, 0.3, 1.1); /* Snappy glide */
}
```

## Architecture Notes
- The `.tabs-header` uses `grid-template-columns: repeat(var(--tab-count), 1fr)`.
- The `.orbit-indicator` width is mathematically derived: `calc((100% - (var(--header-padding) * 2)) / var(--tab-count))`.
- Since percentage values in `transform: translateX()` functions are relative to the element's own bounding box, `translateX(100%)` perfectly shifts the indicator right by exactly one tab slot.
