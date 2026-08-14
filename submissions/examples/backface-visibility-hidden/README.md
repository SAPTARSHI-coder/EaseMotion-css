# Backface Visibility: Card Flip

Demonstrates 3D card flip interactions using `backface-visibility: hidden`. Three interactive pricing cards reveal their back faces on hover via a 180° Y-axis rotation.

## Flip Mechanism

`backface-visibility: hidden` prevents the reverse side of each card face from being visible when rotated away. The front face is visible at 0°, hidden past 90°. The back face starts at 180° (hidden) and becomes visible after the 90° midpoint. The `transform-style: preserve-3d` on the parent enables proper 3D children stacking.

## Usage

Open `demo.html` and hover over any card to trigger the flip rotation. Three phase diagrams below show the card state at 0°, 90°, and 180°. Edit `transition` duration or `rotateY` angle in `style.css` to customize. Each card has unique front/back styling for visual contrast.
