# Fix ease-card Focus Clipping

## Description
Replaces external outlines with an inset box-shadow to prevent the focus indicator from being clipped when the `card` component is placed inside an `overflow: hidden` or `overflow: auto` container.

## Usage
Include the component as usual. The new CSS handles accessibility automatically.

## Accessibility Compliance
Ensures compliance with WCAG 2.1 Focus Visible standards by guaranteeing the focus indicator remains unobscured.
Fixes: #37989
