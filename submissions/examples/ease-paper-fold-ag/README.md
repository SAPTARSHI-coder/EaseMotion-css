# Paper Fold Hover Effect

An interactive element that appears folded (like a brochure or map) and smoothly unfolds in 3D space when hovered.

## Preview

Open `demo.html` in your browser and hover over the purple banner to see the bottom half unfold.

## Implementation Details

- **No JavaScript:** The interaction is triggered by the CSS `:hover` pseudo-class.
- **3D Transform Origin:** The bottom fold uses `transform-origin: top center;`. This is crucial because it ensures that when the element is rotated, it hinges exactly at its top edge (connecting it seamlessly to the bottom edge of the top fold).
- **Initial State:** The bottom fold starts with `transform: rotateX(-90deg);`, making it swing backwards until it's completely hidden, perpendicular to the screen.
- **Hover State:** When hovered, it transitions to `rotateX(0deg)`, swinging down like a trapdoor or an unfolding piece of paper.
- **Perspective:** The parent container has `perspective: 1000px;`, which gives the folding animation a realistic 3D depth.
