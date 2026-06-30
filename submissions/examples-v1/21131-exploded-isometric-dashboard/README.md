# Exploded Isometric Dashboard

## What does it do?

This component demonstrates an advanced pure CSS 3D spatial interaction; when hovered, a standard flat dashboard smoothly rotates into an isometric perspective while its internal UI layers physically detach and extrude upward along the Z-axis, casting dynamic shadows.

## How is it used?

The component utilizes a parent stage `.iso-stage` configured with a CSS `perspective` property. The base `.iso-dashboard` and all of its internal structural children (e.g., `.iso-sidebar`, `.iso-layer-3`) are assigned `transform-style: preserve-3d`. On hover, the main dashboard applies an X/Z axis rotation, while the internal layers transition their `transform: translateZ()` values to create the floating, exploded-view effect.

## Why is it useful?

It provides an exceptionally premium, visually striking "tech reveal" interaction often used on top-tier SaaS landing pages and portfolio sites. It fits perfectly into the EaseMotion CSS philosophy by executing incredibly complex 3D mathematics and shadow rendering entirely through human-readable, pure CSS classes, completely eliminating the need for JavaScript or heavy WebGL libraries.
