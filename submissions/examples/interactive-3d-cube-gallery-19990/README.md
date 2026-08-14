# Interactive 3D Cube Gallery with Pure CSS State Management

This submission resolves issue #19990 by building a fully interactive 3D gallery cube manipulated exclusively with CSS.

## Overview
This component creates a rotatable 3D cube where each face displays an image or content. It leverages advanced CSS 3D transforms (`preserve-3d`, `rotateX`, `rotateY`, `translateZ`) to construct the cube. Crucially, the interactivity (rotating the cube to view different faces) is managed entirely via the CSS checkbox/radio hack, requiring **zero JavaScript**.

## Features
- **Pure CSS State Management:** Uses hidden radio buttons and the general sibling combinator (`~`) to bind cube rotations to user clicks.
- **Hardware-Accelerated 3D Transforms:** Smoothly animates the rotation of the cube in 3D space using `transform: rotateY()` and `transform: rotateX()`.
- **Responsive Sizing:** The cube scales responsively to fit within its container.
- **Interactive Navigation:** Dedicated UI buttons allow the user to select which face of the cube to bring to the front.

## Files
- `demo.html`: The HTML structure containing the radio inputs, the navigation buttons, and the 3D cube faces.
- `style.css`: The styling logic for constructing the cube and handling the state-based rotations.
