# Pointer-Events Control Utilities

This playground showcases event targeting capabilities using variants of the CSS native `pointer-events` properties under a dark-theme presentation canvas.

## Core Utility Mappings
- **`.em-pointer-auto`**: Restores typical hardware cursor capture sequences, processing event target states natively.
- **`.em-pointer-none`**: Makes the element abstractly invisible to mouse events, allowing click actions to hit whatever sits directly behind it.

## Common Production Use Cases
- **Bypassing Decorative Elements**: Allowing users to click buttons that sit underneath translucent overlays or floating icons.
- **Form State Handling**: Combining `pointer-events: none` with a desaturated visual state to securely lock interactive anchor tags or custom UI components.