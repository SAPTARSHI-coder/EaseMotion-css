# ease-vertical-timeline-dots-sap

A vertical timeline (order tracking style) with dot markers connected by a line — completed steps show filled dots, and hovering any dot enlarges it.

## Usage
1. Include `style.css`.
2. Add markup: `.dot-item` entries (mark completed ones with `.active`) inside `.timeline-dots-sap`.

## Customization
- Dot size/border color for active vs inactive states.
- Connecting line color/thickness.
- Hover enlarge scale.

## Notes
- The connecting vertical line is a single `::before` on the container spanning `top`/`bottom`, not per-item — so it stays continuous regardless of how many `.dot-item` entries exist.
- `.active` state uses a filled dot with a soft outer ring (`box-shadow`) to distinguish completed steps from pending ones at a glance.
- Respects `prefers-reduced-motion`: hover scale-up is removed, leaving only the background color as hover feedback.