# Animation: Ease 3D Tilt Toggle

### 1. What does this do?
Transforms a standard checkbox input into an interactive, tactile 3D toggle switch that shifts its spatial angle depending on user hover states.

### 2. How is it used?
Place the hidden input class directly before its corresponding label element in your HTML:
```html
<input type="checkbox" id="toggle" class="ease-tilt-toggle-input" />
<label for="toggle" class="ease-tilt-toggle-label"></label>
```
### 3. Why is it useful?

It provides an incredibly tactile, feedback-driven micro-interaction natively using zero JavaScript runtime logic, keeping the bundle clean, lightweight, and performant.

## Overview

The Ease 3D Tilt Toggle uses calculated CSS perspective fields and layered inset box-shadow profiles to create a realistic physical depth feeling when hovered over and clicked.

## Features

- Dynamic 3D viewport spatial perspective matrix tilting
- Multi-layered inner box-shadow mechanics for realistic depth
- Fluid cubic-bezier timing transitions for the sliding mechanism
- Zero JavaScript overhead dependencies or complex asset sheets
- Complete graceful degradation layout overrides for accessibility considerations

## Use Cases

- Application dark/light theme toggle interface
- Feature control activation panels
- Settings configuration screens

## Animation Behavior

1. Hovering triggers a responsive 3D perspective angle shift.
2. Checking the input flips the 3D tilt direction to match the active state.
3. The inner toggle thumb glides fluidly across using an elastic-feeling transition curve.

## Accessibility

Includes fallback rules to immediately disable the spatial 3D animations for users who prefer reduced motion.

## Browser Compatibility

Supports standard rendering on modern browsers using:

- CSS 3D Transforms (`perspective`, `rotateX`, `rotateY`)
- Pseudo-elements (`::before`)
- Inset `box-shadow` properties