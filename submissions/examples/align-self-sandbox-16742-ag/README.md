# Align Self Utilities Guide

This guide documents and visualizes the `align-self` flexbox utility specifications, cleaning up duplicate reference entries in documentation structures.

---

## Align Self Specifications

Flexbox item coordinates default to container cross-axis rules (`align-items`). To override individual item alignments, apply these selectors:

- **align-self: flex-start** (`align-self-start`): Aligns item flush to cross-axis start.
- **align-self: center** (`align-self-center`): Centers item along cross-axis.
- **align-self: flex-end** (`align-self-end`): Aligns item to cross-axis end.
- **align-self: stretch** (`align-self-stretch`): Stretches item height/width to fill cross-axis.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click the alignment controller buttons (flex-start, center, flex-end, stretch).
3. Verify that the center purple card repositions smoothly inside the container.
