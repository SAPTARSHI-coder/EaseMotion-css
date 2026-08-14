# Interactive Bento Dashboard

A highly advanced, pure-CSS Bento Grid dashboard layout featuring 3D hover glare effects, CSS-only animated bar charts, conic-gradient progress rings, and staggered entrance animations. 

## Features
- **Advanced CSS Grid Layout:** Utilizes `grid-template-columns` and spanning for a modern "Bento Box" UI.
- **CSS-Only Data Visualization:** Includes an animated bar chart and a `conic-gradient` progress ring without any JavaScript libraries.
- **3D Glare Effect:** Uses CSS variables and `radial-gradient` overlays to simulate a lighting glare on hover.
- **Floating Orbs:** Animated, blurred background elements to give depth and glassmorphism vibes to the dark theme.
- **Staggered Entrances:** Smooth `cubic-bezier` load-in animations with sequential delays.
- **Fully Responsive:** Gracefully collapses from 4 columns to 2 columns, and finally to a single column on mobile devices.
- **Accessibility:** Fully respects `prefers-reduced-motion` for users sensitive to animations.

## Component Breakdown
1. **Large Stat Card:** Features floating gradient orbs and large typography.
2. **Wide Chart Card:** A pure CSS bar chart that animates upwards on load.
3. **Small Progress Card:** Uses `conic-gradient` and CSS masks to create a donut chart.
4. **Small Status Card:** Features a pulsing CSS status indicator.
5. **Tall Network Card:** Spanning multiple rows with large iconography.

## Customization
All colors, radii, and transitions are controlled via CSS Custom Properties (`:root` variables) at the top of `style.css` for easy theming.