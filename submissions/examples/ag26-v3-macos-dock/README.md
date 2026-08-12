# Mac OS Style Dock Menu

A sleek, macOS-inspired navigation dock that magnifies icons smoothly on hover.

## Preview
Open `demo.html`. You will see a frosted glass dock at the bottom. Hovering over any colorful icon causes it to spring up and scale larger, simulating the classic macOS magnification effect.

## Implementation
- The `.dock` uses `backdrop-filter: blur()` for a glassmorphism base.
- `align-items: flex-end` keeps the icons anchored to the bottom.
- On `:hover`, the `.icon` gets `transform: scale(1.5) translateY(-10px)`.
- A fast `cubic-bezier` transition gives the zoom a snappy, physical feel.
