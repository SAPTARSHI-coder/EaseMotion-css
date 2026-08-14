# Interactive 3D Tilt Grid Card

A pure CSS card that responds to your mouse position by tilting dynamically towards the cursor.

## Preview
Open `demo.html` in your browser. Move your mouse across different parts of the card and it will lean and tilt in 3D space in response.

## Implementation
- Usually, this effect requires JavaScript to track the exact `mousemove` coordinates.
- Here, it is achieved purely in CSS by utilizing CSS Grid. The container sets up a 3x3 grid of invisible `.tilt-zone` elements that cover the card.
- By using the general sibling combinator (`~`), when a user hovers over a specific zone (e.g. `.top-left`), it triggers a specific `transform: rotateX() rotateY()` on the underlying `.tilt-card`.
- A smooth `transition` on the card makes it glide between states.
