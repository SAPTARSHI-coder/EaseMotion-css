# Fix: Chip Select Checkmark Transition

Resolves a transition glitch in `chip.css` where the checkmark character pops out instantly on collapse rather than sliding out smoothly.

## What does this do?
- **Symmetric Transitions:** Places the checkmark content in the base stylesheet state with transparent coloring, enabling smooth width and color transitions on uncheck.