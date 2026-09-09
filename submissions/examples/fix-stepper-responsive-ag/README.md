# Stepper Responsive Overflow Fix (A11y & Motion Improved)

This example demonstrates the fix for issue #1547 where horizontal stepper layouts break or overflow viewports on small mobile screens.

## Enhancements
- **Fluid Layout**: Replaced static constraints with percentage-based widths (`width: 100%`, `max-width: 100%`).
- **Flex Wrap & Shrink**: Step nodes are set to `flex: 1` and `min-width: 0` to fit fluid widths gracefully.
- **Mobile Responsive**: Added media query at `(max-width: 479px)` to stack nodes vertically with `flex-direction: column` and align them to the start.
- **Reduced Motion Support**: Implemented a media query for `prefers-reduced-motion` to disable animations/transitions when configured by the user.

## Linked Issue
Closes #1547
