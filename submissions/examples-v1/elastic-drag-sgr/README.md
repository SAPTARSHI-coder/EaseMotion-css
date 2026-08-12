# Elastic Drag / Rubber Band Scroll Effect

## What is this?
A CSS-first elastic drag effect that allows elements to stretch and snap back when dragged, mimicking the premium rubber band scrolling behavior found in native iOS applications.

## How does it work?
A tiny JavaScript snippet tracks mouse or touch dragging events to calculate the raw drag distance from the starting point. This distance is exposed to CSS via `--drag-x` and `--drag-y` custom properties, along with an absolute `--drag-intensity` value. The CSS scales this displacement using a resistance factor (e.g., `calc(var(--drag-x) * var(--drag-resistance))`) via the `transform` property to progressively slow down the movement the further the element is pulled. While dragging, transitions are disabled (`.is-dragging`) for instant tracking. When the user releases the pointer, a spring-like cubic-bezier transition (`.is-snapping`) is applied, causing the element to snap back to its origin with a natural overshoot.

## Why is it useful?
Native mobile applications use rubber band scrolling to provide physical, tactile feedback when users hit the boundaries of scrollable areas. Bringing this behavior to the web via simple CSS classes elevates the user experience and bridges the gap between web interfaces and premium native apps. Since the resistance, snap duration, and spring curve are controlled purely by CSS variables, the physical feel is completely customizable without altering the JavaScript tracking logic.
