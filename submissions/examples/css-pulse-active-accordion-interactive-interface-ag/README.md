# CSS Pulse-Active Accordion (Interactive Interface)

A gamified accordion component designed for Interactive Interface layouts. Features a pulsing ring animation on the active/open item that draws the user's attention, combined with toggle-switch inspired indicators and progress-bar accents.

## Features
- **Pulse Ring Animation:** The active accordion item emits a continuous, subtle pulse ring from its border — like a radar ping — to signal interactivity.
- **Toggle-Switch Indicator:** Instead of a chevron or plus/minus, uses a pill-shaped toggle that slides between on/off states.
- **Progress Bar Accent:** Each header has a thin animated progress bar at the bottom that fills when the section is opened.
- **Pure CSS:** No JavaScript for animations or toggle logic. Uses `<details>` and `<summary>`.

## Usage
Wrap items in a `.interact-accordion` container. Each `<details>` gets `.interact-item`, each `<summary>` gets `.interact-header`.

## Files
- `demo.html`: Interactive preview with gamified content.
- `style.css`: Pulse ring keyframes, toggle indicator, and progress bar animations.
