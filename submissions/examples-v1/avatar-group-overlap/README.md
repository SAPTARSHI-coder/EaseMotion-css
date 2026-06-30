# Avatar Group with Overlap

A stack of overlapping avatar circles displaying team members. Each avatar shows a single initial letter on a colored background. Hovering lifts the avatar slightly. A "+3" overflow indicator shows remaining members. The avatars are laid out right-to-left for natural overlap.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser to see the overlapping avatar stack.

## Accessibility notes

Each avatar has a `data-name` attribute for tooltip support. The initials provide a visual-only indication of identity. Reduced motion disables the hover lift effect.
