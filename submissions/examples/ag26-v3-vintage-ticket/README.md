# Vintage Ticket Stub with Tear Effect

A retro movie ticket complete with perforated punch-holes and an interactive tear-away animation.

## Preview
Open `demo.html` in your browser. You will see a paper ticket. Hovering over the ticket causes the two halves to pull slightly apart and rotate, as if tearing along the dotted line.

## Implementation
- The ticket is split into a `.left` and `.right` stub, separated by a `dashed` border.
- The punched holes in the center are created using `::before` and `::after` pseudo-elements. These are styled as circles (`border-radius: 50%`) colored identically to the background page, masking the white ticket behind them.
- On `:hover` of the parent container, the left stub translates and rotates left, and the right stub translates and rotates right.
