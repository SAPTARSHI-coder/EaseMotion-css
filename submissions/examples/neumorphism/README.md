# Neumorphic UI Component Utilities

Resolves Issue #59858.

This submission provides CSS utility classes to easily achieve the popular "Soft UI" or Neumorphism design trend without complex, repetitive custom styling.

## Implementation Details
- **`style.css`**: Defines `.ease-neu-extruded` (for elements popping out of the page) and `.ease-neu-pressed` (for elements pressed into the page). The illusion of 3D depth is created by calculating dual `box-shadow` values using a shared background color variable (`--ease-neu-bg`), paired with light (top-left) and dark (bottom-right) shadow variables. It also includes `:active` state transitions so buttons seamlessly invert their states when clicked.
- **`demo.html`**: A functional demonstration showcasing static extruded elements, static pressed elements, and an interactive button.

## Integration
Once the core directory contribution freeze is lifted, these utilities can be securely integrated into `components/neumorphism.css`.
