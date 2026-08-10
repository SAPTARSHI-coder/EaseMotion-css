# Avatar CSS Motion Path (`offset-path`)

## Description
This PR introduces the CSS Motion Path module to the `avatar` component. This powerful feature allows developers to animate HTML elements along complex geometric paths (like bezier curves) using pure CSS, completely eliminating the need for heavy JavaScript animation libraries like GSAP for path-following effects.

## Key CSS Properties
- `offset-path: path('...')`: Defines the geometric path for the element to follow. It accepts standard SVG path data (M, C, L, etc).
- `offset-distance: 100%`: Animating this property moves the element along the path from start to finish.
- `offset-rotate: auto`: Automatically calculates the tangent of the curve at any given point and rotates the element to always face "forward".

## Changes
- `style.css`: Implements a bezier curve `offset-path` animation with automatic rotation and scaling.
- `demo.html`: Features a visual demo showing a glowing element following a curved path behind the component text.
- `README.md`: Explains the Motion Path API properties.
\nFixes #60922\n