# CSS Tabs: Foucault Pendulum Swing

A hardware-accelerated, JavaScript-free tabbed interface featuring physics-based rotation. The active tab indicator swings like a pendulum, and the content panels drop in using a top-anchored hinge swing with physical overshoot.

## Features
- Pure CSS and HTML implementation. The tab switching mechanism relies entirely on the CSS Radio Button Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Radio Hack Mechanics**: Hidden `<input type="radio">` elements control the state. The tab headers are `<label>` elements linked to these radios. When a radio is checked, CSS sibling selectors (`~`) target the corresponding `.tab-panel` to transition its rotation and visibility.
  - **Swinging Pendulum Indicator**: The active tab is denoted by a physical pendulum (`.pendulum-indicator`) consisting of a rod and bob. It is anchored at the top center of the navigation menu (`transform-origin: top center`). Depending on which radio is `:checked`, the pendulum rotates to point at the active tab (`transform: rotate(45deg)`). It uses a custom `cubic-bezier` timing function to mimic the natural acceleration and deceleration of a pendulum swing.
  - **Hinged Panel Drop**: The `.tab-panel` containers use `transform-origin: top center`. By default, they are hidden by rotating `90deg` up and towards the viewer (`rotateX(90deg)`). When a tab is activated, the panel swings down to `0deg`. It utilizes the `panel-settle` keyframe animation to explicitly define overshoots (`-10deg`, `5deg`, `-2deg`), simulating gravity, momentum, and friction as the heavy panel settles into place.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a dark, classic slate base (`#2c302e`) with metallic brass/gold accents (`#cfaa63`), complementing the physics/mechanical theme.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the complex pendulum swings and panel hinge drops are disabled, falling back to simple scaling fades.

## Usage
Open `demo.html` in your browser. Click the various tab labels (INERTIA, MOMENTUM, GRAVITY) to switch between the content panels. Notice the pendulum indicator swinging smoothly between the labels, and the panels dropping from the top hinge with a physical bounce.

## Files
- `demo.html`: The HTML structure defining the radio inputs, the swinging pendulum indicator, the tab navigation labels, and the content panels.
- `style.css`: The styling, the `transform-origin` pivot setups, the radio hack logic for the indicator rotation and panel switching, and the keyframe animation defining the physics overshoots (`panel-settle`).
