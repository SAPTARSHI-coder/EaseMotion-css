# 3D Flip Card Profile

An interactive user profile card that flips over in 3D space when hovered, revealing more information on the back.

## Preview

Open `demo.html` in your browser. Hover your mouse anywhere over the profile card and watch it flip over to reveal the "About Me" section and social links.

## Implementation Details

- **No JavaScript:** The entire interaction and 3D transformation is handled by CSS.
- **3D Context:** The outermost container (`.flip-card`) uses `perspective: 1000px`. This is essential as it creates a 3D space for its children to exist in, making the rotation look like it has depth.
- **Preserve 3D:** The inner container (`.flip-card-inner`) uses `transform-style: preserve-3d`. This tells the browser that the children of this container (the front and back faces) should also live in the 3D space, rather than being flattened onto the parent's plane.
- **Backface Visibility:** Both `.flip-card-front` and `.flip-card-back` have `backface-visibility: hidden`. This is the magic property that hides an element when it is rotated to face away from the user.
- **The Flip:** The `.flip-card-back` starts already rotated 180 degrees (`transform: rotateY(180deg)`). When the user hovers over the card, the `.flip-card-inner` rotates by 180 degrees, bringing the back face to 360/0 degrees (facing the user) and sending the front face to 180 degrees (hidden).
