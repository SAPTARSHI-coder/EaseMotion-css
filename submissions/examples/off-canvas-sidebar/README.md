# CSS-Only Off-Canvas Sidebar

A responsive off-canvas sidebar menu that slides in from the left, completely avoiding JavaScript for state management.

## Features
- Pure CSS state management using the "Checkbox Hack".
- Smooth slide-in animations.
- Animated hamburger to "X" icon with transition effects.
- Backdrop overlay that fades in and can be clicked to close the menu.
- Highly performant, accessible via labels, and robust.

## Usage
Simply include the HTML structure (`demo.html`) and CSS styles (`style.css`). 
Modify the links inside the sidebar as needed for your project.

### Core Structure:
```html
<input type="checkbox" id="nav-toggle" class="nav-toggle-input">
<label for="nav-toggle" class="nav-toggle-label">...</label>
<label for="nav-toggle" class="ease-backdrop"></label>
<aside class="ease-sidebar">...</aside>
```
The state is managed using the `#nav-toggle` checkbox. When checked, the general sibling combinator (`~`) is used to style the sidebar and backdrop.
