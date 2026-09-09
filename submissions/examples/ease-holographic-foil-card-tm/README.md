# Holographic Foil Card

Closes #74886

Iridescent credit-card style with shifting gradient background and a diagonal shimmer sweep.

## Technique

A `background-size: 400% 400%` background animated through `background-position` creates the slow color shift. A `::before` pseudo-element with a diagonal gradient sweeps across the card on a 3s loop.
