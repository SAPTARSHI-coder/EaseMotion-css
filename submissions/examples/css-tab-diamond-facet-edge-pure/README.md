# CSS Tabs: Diamond Facet Edge

A hardware-accelerated, JavaScript-free tabbed interface featuring sharp geometric cuts, crystalline gradients, and glassy blur transitions.

## Features
- Pure CSS and HTML implementation. The tab switching mechanism relies entirely on the CSS Radio Button Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Radio Hack Mechanics**: Hidden `<input type="radio">` elements control the state. The tab headers are `<label>` elements linked to these radios. When a radio is checked, CSS sibling selectors (`~`) target the corresponding `.tab-panel` to transition its opacity, scale, and blur.
  - **Diamond Facet Cuts**: The `.facet-bg` element behind each tab text utilizes `clip-path: polygon()` to chop off the top-left and top-right corners, creating a gem-like faceted shape. The main content panel `.tab-content-wrapper` also uses a subtle `clip-path` on its bottom-right corner to continue the geometric theme.
  - **Crystalline Transitions**: When a tab is activated, the corresponding `.tab-panel` transitions in using a combination of `transform: scale()`, `opacity`, and `filter: blur()`. It starts slightly smaller and blurred, then snaps into sharp focus, mimicking the optical properties of a crystal.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes dark, deep tones (`#0f1115`) with vibrant cyan/teal crystalline accents. It includes a fallback `@media (prefers-color-scheme: light)` block to invert the colors to a light, airy sapphire theme if the user's OS requests it.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the scale and blur transitions are disabled, falling back to instant state switching.

## Usage
Open `demo.html` in your browser. Click the various tab labels (Overview, Structure, Properties) to switch between the content panels. Notice how the active tab facet lights up and the content panel snaps into focus with a crystalline blur transition.

## Files
- `demo.html`: The HTML structure defining the radio inputs, the faceted tab navigation labels, and the content panels.
- `style.css`: The styling, the `clip-path` polygon geometries, the radio hack logic for the state switching, and the blur/scale transition mechanics.
