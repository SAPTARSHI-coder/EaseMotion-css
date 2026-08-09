# Filter Chip Shuffle

A CSS-only filter panel that animates selected chips and shuffles result cards into a focused stack. It is useful for search filters, tag pickers, dashboards, and compact product list controls.

## Files

- `demo.html` contains the filter panel markup and sample result cards.
- `style.css` contains the responsive layout, chip states, and shuffle animations.

## Animation details

- `chip-pop` gives the active filter a quick selected-state lift.
- `chip-sheen` adds a light sweep across the active chip.
- `result-shuffle` reorders the card stack with staggered motion on hover or keyboard focus.
- `status-float` adds subtle idle movement without relying on JavaScript.

## Usage

Hover the panel or focus one of the filter buttons to see the card stack shuffle while the chip controls stay accessible.
