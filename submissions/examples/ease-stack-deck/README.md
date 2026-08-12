# 3D Perspective Stack Deck Carousel (`ease-stack-deck`)

An elegant, luxury agency-grade presentation layout component that stacks structural asset panels into a compact 3D column deck, fluidly fanning out horizontally along an isometric depth curve on hover focus.

## Architectural Geometry & Mechanics

The component achieves high-fidelity spatial motion entirely through native hardware-accelerated CSS properties, utilizing zero JavaScript runtimes to completely bypass layout engine reflow steps:

1. **Volumetric Spatial Depth Stage:** The parent layout establishes a 3D canvas viewport utilizing `perspective: 1500px` combined with a clear `transform-style: preserve-3d` ecosystem context.
2. **Solid Boundary Layer Isolation:** Cards employ a rich, solid slate-black background canvas (`#0b0d19`) topped with individual neon gradient banners, ensuring clean visibility limits with absolutely zero transparency background color bleeding on overlap segments.
3. **Collision-Safe Staggered Timelines:** - **On Hover Focus Entry:** The primary element (`nth-child(1)`) snaps forward instantly (`transition-delay: 0ms`) onto the central front apex (`z-index: 50`), while the adjacent left and right panels separate outwards after a subtle `80ms` micro-delay to eliminate polygon mesh clipping.
   - **On Hover Focus Exit:** The transition variables safely invert. Sibling cards immediately slide inward to reassemble the center stack, while the main core card holds its elevated height profile for `100ms` before setting down cleanly on top of the pile, eliminating reverse z-index Z-fighting glitches.

## Directory Tree Manifest
- `demo.html`: Independent, self-contained interactive visual preview stage.
- `style.css`: Composed high-performance CSS transformation rules sheets.

## By
Pari Dubey