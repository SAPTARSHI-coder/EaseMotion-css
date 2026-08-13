# CSS Tabs: Aurora Glow

A hardware-accelerated, JavaScript-free tabbed interface featuring ethereal, flowing gradient animations inspired by the Aurora Borealis (Northern Lights).

## Features
- Pure CSS and HTML implementation. The tab switching mechanism relies entirely on the CSS Radio Button Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Radio Hack Mechanics**: Hidden `<input type="radio">` elements control the state. The tab headers are `<label>` elements linked to these radios. When a radio is checked, CSS sibling selectors (`~`) target the corresponding `.tab-panel` to transition its opacity, scale, and visibility.
  - **Fluid Active Indicator**: The `.aurora-indicator` animates smoothly between the active tab labels using `transform: translateX()`. Inside it, a `.glow-core` element contains a multi-stop linear gradient that continuously pans horizontally via an infinite `@keyframes` animation, creating a flowing plasma effect underneath the active tab.
  - **Ambient Aurora Background**: The `.aurora-bg` uses massive, overlapping `radial-gradient` pseudo-elements. These gradients are heavily blurred (`filter: blur(80px)`) and animated to slowly rotate, scale, and drift, creating a soft, shifting background glow that mimics the northern lights.
  - **Ethereal Transitions**: The content panels use a subtle glassmorphism effect (`backdrop-filter: blur(20px)`). When switching tabs, the new panel fades in while scaling up slightly (`scale(0.98)` to `scale(1)`), creating a soft, ethereal appearance.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a deep space night sky base (`#080c16`) with shifting neon aurora colors: green (`#00ff87`), teal (`#00d4ff`), purple (`#9d00ff`), and pink (`#ff009d`).
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the continuous gradient flows, background ambient animations, and tab slide transitions are disabled.

## Usage
Open `demo.html` in your browser. Click the various tab labels (Atmosphere, Magnetosphere, Solar Wind, Observation) to switch between the content panels. Notice the continuous flowing gradient in the active tab indicator and the soft, drifting aurora glow in the ambient background.

## Files
- `demo.html`: The HTML structure defining the ambient background, the radio inputs, the tab navigation labels, the fluid indicator, and the content panels.
- `style.css`: The styling, the complex `radial-gradient` animations for the ambient background, the radio hack logic for the sliding indicator and panel switching, and the linear-gradient panning keyframes.
