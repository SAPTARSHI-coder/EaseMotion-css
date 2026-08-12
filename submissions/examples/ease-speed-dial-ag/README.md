# Speed Dial FAB

A Floating Action Button (FAB) that expands into a vertical speed dial of mini-actions, triggered entirely by CSS.

## Preview

Open `demo.html` in your browser and click on the blue FAB in the bottom right corner to see the actions spring out.

## Implementation Details

- **No JavaScript:** The interaction relies on the `<input type="checkbox">` trick.
- **Staggered Animation:** The child action buttons use `transition-delay` to appear sequentially when the dial is opened.
- **Icon Animation:** The "+" icon inside the main FAB smoothly rotates 45 degrees to become an "x" (close) icon when the menu is active, and the button changes color to indicate a cancel state.
