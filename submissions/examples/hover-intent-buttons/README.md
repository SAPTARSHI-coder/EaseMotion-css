# Hover-Intent Navigation Buttons

A pure CSS solution to a common UX problem: accidental hover flashes. When a user drags their mouse across the screen, they often trigger a cascade of aggressive hover animations on navigational elements. This component uses asymmetric `transition-delay` to ensure the user actually intends to hover over the button before animating it.

## Features
- **Zero JavaScript**: Entirely powered by asymmetric CSS transitions.
- **Accidental Swipe Protection**: Adds a `100ms` `transition-delay` when the user's cursor enters the element. If the cursor leaves before the 100ms mark, the animation never fires.
- **Instant Retreat**: When the cursor leaves the element, the `transition-delay` is set to `0ms`, allowing the button to snap back to its rest state instantly, keeping the UI feeling highly responsive.

## Usage
Open `demo.html` in your browser. You will see two columns.
1. Drag your mouse quickly up and down over the **Standard** column. You will notice every button flashes and jumps chaotically.
2. Drag your mouse quickly up and down over the **Hover-Intent** column. You will notice they remain completely still. They will only animate if you intentionally pause your mouse over them for a fraction of a second.

## Files
- `demo.html`: The HTML structure demonstrating the side-by-side comparison.
- `style.css`: The styling rules showcasing the difference between symmetric transitions and the asymmetric `btn-intent` transition rules.
