# CSS Tabs: Synthwave Grid Line

A hardware-accelerated, JavaScript-free tabbed interface featuring neon glowing sliders and an animated 3D perspective grid background inspired by the 1980s Synthwave aesthetic.

## Features
- Pure CSS and HTML implementation. The tab switching mechanism relies entirely on the CSS Radio Button Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Radio Hack Mechanics**: Hidden `<input type="radio">` elements control the state. The tab headers are `<label>` elements linked to these radios. When a radio is checked, CSS sibling selectors (`~`) target the corresponding `.tab-panel` to transition its opacity and visibility, fading it into view.
  - **Neon Slider**: A glowing underline (`.neon-slider`) animates smoothly between the active tab labels. Its position is updated via `transform: translateX()` depending on which radio button is currently `:checked` (e.g., `#tab2:checked ~ .tab-nav .neon-slider { transform: translateX(100%); }`).
  - **Perspective Grid Background**: The ambient background features a `.perspective-grid`. This uses `transform: perspective(300px) rotateX(60deg)` to tilt a standard CSS `linear-gradient` grid into 3D space. An infinite keyframe animation (`grid-move`) pans the `background-position` downwards, creating the illusion of flying over a neon landscape. A pseudo-element applies a gradient mask to fade the grid out in the distance.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a deep space base (`#090014`) with high-energy neon pink, blue, and purple accents.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the continuous perspective grid animation and the sliding tab transitions are disabled, switching instantly instead.

## Usage
Open `demo.html` in your browser. Click the various tab labels (DATABASE, NETWORK, SECURITY, SYSTEM) to switch between the content panels. Notice the glowing neon slider transitioning between the active tabs and the ambient 3D grid moving in the background.

## Files
- `demo.html`: The HTML structure defining the ambient background, the radio inputs, the tab navigation labels, and the content panels.
- `style.css`: The styling, the 3D perspective grid mechanics, the radio hack logic for the sliding indicator and panel switching, and the text-shadow glowing effects.
