# Isometric 3D Keyboard

An interactive cluster of mechanical keyboard keys presented in a stylish isometric 3D perspective.

## Preview
Open `demo.html` in your browser. You will see W, A, S, and D keys floating in 3D space. Hovering over or clicking a key physically depresses it into the board.

## Implementation
- The `.board` container establishes the isometric view by using `transform: rotateX(60deg) rotateZ(-45deg)`.
- The depth of the `.key` elements is not actual 3D geometry; it is faked using multiple layers of directional `box-shadow` (-2px 2px, -4px 4px, etc.) and a translation `translate(8px, -8px)`.
- On `:active` (click) or `:hover`, the key returns to `translate(0,0)` and the heavy box shadows are removed, creating a very convincing 3D key-press animation.
