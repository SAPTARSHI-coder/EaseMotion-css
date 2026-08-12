# CSS Micro-interactions: Pulsating Wave

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on radiating waves, sonar pings, and live status ripples.

## Features
- Pure CSS and HTML implementation. No JavaScript event listeners required for the click effects.
- **Component Architecture**: 
  - **Sonar Ping Button**: An interactive button that emits a rapid ripple wave when clicked. Because we cannot use JavaScript to detect clicks, we employ the CSS checkbox hack (`:active ~`). A hidden checkbox is absolutely positioned over the button. When it is clicked (`:active`), the adjacent `.ripple` div triggers an `@keyframes` animation that scales it from `0` to `20` while fading out, simulating a fast sonar ping.
  - **Live Status Indicator**: A common UI pattern for indicating "Online" or "Live" status. It uses a solid central `.status-core` and two absolutely positioned `.status-wave` rings behind it. Both rings run a continuous `@keyframes` animation (`broadcast`) scaling from `1` to `4`. The second ring has an `animation-delay: 1s` to stagger the waves, creating a continuous outward pulse.
  - **Concentric Avatar**: A hover effect that emits concentric resonance rings. Similar to the status indicator, it uses three `.resonance-ring` elements placed behind the avatar image. When the `.avatar-container` is hovered, the rings trigger an expanding animation with staggered delays (`0s`, `0.3s`, `0.6s`), creating a beautiful outward resonance.
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on bright, energetic colors (Cyan, Green, Purple) set against a dark background for maximum contrast.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the infinite broadcasting waves and substituting the click ripple with a simple opacity fade for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Click the "Transmit Signal" button to trigger the sonar ripple, observe the continuous pulse of the live status dot, and hover the avatar to see the concentric resonance rings.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 wave micro-interactions.
- `style.css`: The styling, the staggered `animation-delay` properties, the checkbox `:active` hack logic, and the `@keyframes` scaling animations.
