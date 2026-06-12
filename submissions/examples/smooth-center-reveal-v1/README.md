# Smooth Center Reveal Effect

A composable layout and transition utility that provides a smooth, fluid entry animation for centered components alongside a subtle scale micro-interaction on hover.

## Features

- **Fluid Entry:** Uses a sleek `cubic-bezier` timing function to scale and fade into view seamlessly.
- **Micro-Interaction:** Perfectly responds to user focus with a controlled, modern hover scaling effect.
- **Centering Focus:** Isolates component layouts into sharp focus.

## How to use

Apply the `.center-reveal-container` to your outer wrapper layout, and place your card element inside with the `.center-reveal-card` class utility.

# Mobile Responsive Alignment Fix

Fixes the layout shifting and breaking bug where dashboard stats cards dropped their centered properties on narrow mobile screens.

## Resolution

- Implemented robust flexbox property overrides inside max-width media queries.
- Normalized child container structure metrics to use clean, auto-centering margins (`margin: 0 auto`).
- Verified zero left-border text clipping down to 320px viewports.

## Linked Issue

Closes #1232
