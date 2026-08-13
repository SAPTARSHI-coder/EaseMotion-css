# ease-scroll-sticky-table-header-sap

A scrollable data table whose header row stays pinned to the top of its scroll container as rows scroll beneath it.

## Usage
1. Include `style.css`.
2. Add markup: standard `<table>` inside a fixed-height, `overflow-y: auto` container.

## Notes
- `position: sticky` on `thead th` (not `thead` itself, since sticky positioning on `<thead>` has inconsistent browser support) is what keeps the header pinned within the scrollable container.
- A bottom `box-shadow` on the header simulates a border that stays visible even while sticky.
- No motion is involved in this component (pure layout behavior), so no `prefers-reduced-motion` gating is needed.