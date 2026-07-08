# CSS Sticky Section Headers Example

This submission demonstrates pure-CSS sticky section headers that stack and shift dynamically as the user scrolls.

---

## Technical Overview

The layout relies entirely on `position: sticky` and the behavior of scroll boundaries:

1. **Scroll Section (`.scroll-section`)**: Set to `position: relative` with a tall height (e.g. `120vh`). This creates a bounding box for the sticky container.
2. **Sticky Header Bar (`.section-title-bar`)**: Set to `position: sticky; top: 0;`. This pins the bar to the top of the viewport.
3. **Container Boundary**: When the scroll viewport reaches the bottom of the `.scroll-section` wrapper, the sticky child elements are pushed out of the viewport by their parent container. This creates a natural stacking card deck effect.

---

## Benefits

- **Performance:** Works on the browser's compositor thread for hardware-accelerated 60 FPS transitions.
- **No JS Event Listeners:** Prevents scroll lag and layout thrashing.
- **Responsive:** Fits any screen size automatically.

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Scroll down.
3. Verify that section titles (e.g. **01. Creative Design**, **02. Pure CSS Layout**) stay pinned at the top of the viewport while you scroll through their contents.
4. Verify that when you cross into a new section, the new heading pushes the old heading out of the viewport.
