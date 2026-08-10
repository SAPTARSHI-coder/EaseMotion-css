# SaaS Email Signature Builder

## Issue
**Issue #20895**: Advanced: SaaS Landing — Email Signature Builder

## Description
This submission implements a visual demonstration for an Email Signature Builder SaaS. It features an interactive customization panel where users can toggle through various themes (Modern, Classic, Creative). The generated signature card below adapts dynamically using CSS layout overrides and theme rules without JavaScript.

## Implementation Details
- **HTML (`demo.html`)**: Employs radio buttons to handle styling states, alongside mock input fields and a structured email signature preview box.
- **CSS (`style.css`)**:
  - Leverages hidden radio selectors and parent/sibling selector combinations to transition card layouts.
  - Theme customisations dynamically update card border styles, font choices, avatar border-radius properties, and background gradients.

## Verification
Open `demo.html` in a web browser. Click the theme option buttons on the control panel ("Modern Theme", "Classic Theme", and "Creative Theme"). The output card dynamically transitions to show the selected signature style.
