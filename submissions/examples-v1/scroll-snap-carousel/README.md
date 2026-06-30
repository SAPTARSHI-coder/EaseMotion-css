## What

A CSS scroll-snap horizontal carousel with image cards, dot indicators, and arrow navigation buttons. Uses `scroll-snap-type: x mandatory` for native snapping behavior. The active slide is highlighted with a scale effect and accent border. Keyboard navigation and reduced-motion support included.

## How

The `.carousel` container has `overflow-x: auto` and `scroll-snap-type: x mandatory`. Each `.slide` is `flex: 0 0 calc(100% - 1rem)` with `scroll-snap-align: start`. Dot indicators and arrow buttons use minimal JS to call `scrollIntoView({ behavior: 'smooth', inline: 'start' })` on the target slide. A passive scroll listener updates the active dot based on the closest slide to the container's left edge. `prefers-reduced-motion` disables smooth scrolling and transitions.

## Why

CSS `scroll-snap` provides native, performant, inertial scrolling without a JS drag/carousel library. The snapping gives users precise control over which slide is centered. Dot indicators and arrow buttons add familiar navigation affordances. This approach is accessible (keyboard-navigable, ARIA attributes) and works across devices with touch/mouse/scroll wheel.
