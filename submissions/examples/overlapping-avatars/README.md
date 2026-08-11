# Overlapping Avatars

A stacked avatar group where each avatar overlaps the previous one by 16px, creating a compact visual for showing multiple people. The first letter initial is displayed on a colored circle. On hover, the avatar lifts up slightly. A "+3" overflow indicator shows additional members.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser to see the overlapping avatar stack. Hover over an avatar to see the lift effect.

## Accessibility notes

This is a visual component. In production, each avatar should include an `alt` or `aria-label` with the person's name.
