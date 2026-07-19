# CSS Fade-Out Tabs - Responsive Dashboard Aesthetic

A sophisticated, pure CSS navigation system utilizing a contextual "Fade-Out" sibling interaction, crafted specifically for Responsive Dashboard layouts. 

## Features

- **Fade-Out Interaction**: When a user hovers over the sidebar navigation, all un-hovered tab links smoothly fade out (`opacity: 0.35`). This focuses the user's attention exclusively on the link currently being considered, enhancing the UX of dense dashboards.
- **Responsive "Morphing" Layout**: 
  - **Desktop**: The tabs function as a traditional vertical sidebar with an active indicator pill that slides up and down on the Y-axis.
  - **Mobile**: The sidebar seamlessly morphs into a horizontal, scrollable top-navigation bar. The active indicator adjusts its shape and slides horizontally on the X-axis (`translateX`).
- **Dashboard Aesthetics**: Styled with a deep navy sidebar (`#0f172a`), crisp white content cards on a light slate background, and an electric sky blue accent (`#38bdf8`), perfectly mimicking high-end enterprise dashboards.
- **Pure CSS State**: The dashboard panels switch using visually hidden radio buttons and the `:checked` pseudo-class. Zero JavaScript is required.
- **Accessible Design**: The radio inputs are hidden securely via `clip`, ensuring keyboard navigation (`Tab` and arrow keys) is fully functional. A custom dashed outline provides clear visual focus.

## Custom Properties

Easily modify the fade timings, dashboard colors, and layout widths by editing the `:root` variables inside `style.css`:

```css
:root {
  /* Fade-Out Sibling Interaction */
  --fade-duration: 0.35s;
  --fade-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --fade-opacity: 0.35; /* Opacity of non-hovered sidebar items */
  
  /* Layout Dimensions */
  --sidebar-width: 260px;
  
  /* Dashboard Colors */
  --sidebar-bg: #0f172a;
  --accent-color: #38bdf8;
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in a web browser. 
- **On Desktop**: Hover over the left sidebar to experience the Fade-Out sibling effect, and click tabs to see the active indicator slide vertically.
- **On Mobile**: Resize your browser window to see the dashboard morph into a horizontal layout where the sliding indicator intelligently switches to horizontal tracking!
