# Animated Ellipsis Utility Class

An animation-first, zero-dependency, pure-CSS animated dot loader that cycles through ".", "..", and "..." using `@keyframes` content switching.

## What is this?

This is a reusable utility component that appends a dynamic cycling ellipsis to any container text element (typically "Loading", "Connecting", or "Syncing"). The animation runs completely in pure CSS without any JS overhead or complex markup configurations.

## How does it work?

- **Pseudo-Element Content Insertion**: We target the element using the `::after` pseudo-element and inject an empty string `content` initially.
- **Keyframe Content Steps**: The `@keyframes` animation switches the `content` property discrete values directly (`""` -> `"."` -> `".."` -> `"..."`).
- **Layout-Stable Rendering**: In standard inline mode, the changing number of dots shifts trailing page content horizontally. To resolve this, we provide the `.ease-ellipsis-stable` modifier, which pre-reserves dot space by using absolute positioning and right padding, keeping the layout perfectly stationary.
- **Reduced Motion Support**: Automatically overrides the animation under `@media (prefers-reduced-motion: reduce)` by showing static `...` immediately, ensuring compliance with web accessibility standards.

## Why is it useful?

- **Zero Bundle Scripting**: Operates completely inside the CSS render tree, preventing scripting thread delays.
- **Visual Stability**: The stable layout modifier prevents shifting layout jitters, preserving polished design aesthetics during loading actions.
- **High Compatibility**: Works natively on buttons, status cards, and headers in all modern browsers.
