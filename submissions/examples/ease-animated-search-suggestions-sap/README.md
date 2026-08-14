# ease-animated-search-suggestions-sap

A search input with a suggestions dropdown that smoothly expands open as the user types, using the grid-row collapse technique.

## Usage
1. Include `style.css`.
2. Add markup: input + `.suggest-list > .suggest-inner > .suggest-item` entries.

## Notes
- Uses `grid-template-rows: 0fr → 1fr` for the dropdown expand/collapse, avoiding a fixed max-height guess.
- Respects `prefers-reduced-motion`: the grid-row transition is disabled, dropdown snaps open/closed instantly.