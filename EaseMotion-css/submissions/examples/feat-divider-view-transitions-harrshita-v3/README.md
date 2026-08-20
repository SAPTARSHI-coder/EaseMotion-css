# Divider CSS View Transitions API

## Description
This PR integrates the native CSS View Transitions API into the `divider` component. This cutting-edge API allows developers to create seamless "morphing" animations between different DOM states without using heavy JavaScript animation libraries (like Framer Motion or GSAP) or writing complex FLIP (First, Last, Invert, Play) logic.

The animation itself is handled entirely by the browser's compositor thread using the `view-transition-name` CSS property.

## Key CSS Properties
- `view-transition-name: my-element`: Assigns a unique identity to an element so the browser can track it across DOM updates.
- `::view-transition-group(my-element)`: A pseudo-element that allows customization of the snapshot animation (duration, easing).

## Changes
- `style.css`: Uses `view-transition-name` on the container, title, and body to orchestrate a synchronized morphing animation.
- `demo.html`: Interactive card that expands/collapses. Includes the minimal `document.startViewTransition()` wrapper required to trigger the snapshot.
- `README.md`: Explains the View Transitions API and graceful degradation.
\nFixes #61486\n