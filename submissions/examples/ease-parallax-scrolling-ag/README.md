# Pure CSS Parallax Scrolling

A classic parallax scrolling effect achieved entirely through CSS 3D transforms, with absolutely no JavaScript scroll event listeners required.

## Preview

Open `demo.html` in your browser and scroll down the page. Notice how the background color layers scroll slower than the text in front of them, creating a sense of deep 3D space.

## Implementation Details

- **The Camera:** The `.parallax-wrapper` acts as our scroll container and "camera". It uses `perspective: 300px;` which establishes a 3D space for its children.
- **The Layers:** The `.parallax-layer` elements are divided into base layers (the text) and back layers (the background).
- **The Depth:** The base layers sit at the normal distance (`translateZ(0)`). The back layers are pushed away from the camera using `transform: translateZ(-300px);`. 
- **The Magic:** Because the back layers are further away in the 3D space established by `perspective`, they naturally move slower across the screen as you scroll down the page, creating the parallax effect automatically!
- **Scale Correction:** Because pushing an element back makes it look smaller, we use `scale(2)` alongside the `translateZ` to scale it back up to its original visual size.
