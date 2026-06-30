# CSS Anchor Positioning Component Submission

### What does this do?

This submission adds a modern showcase demonstrating CSS Anchor Positioning, showing how overlays, tooltips, popovers, and badges can be dynamically tethered and positioned relative to anchor elements in pure CSS.

---

### How is it used?

1. **Define the Anchor**: Specify an `anchor-name` custom property on the target element:

   ```css
   .my-button {
     anchor-name: --my-anchor-node;
   }
   ```

2. **Define the Anchored Element**: Set `position-anchor` to connect to the target, use the `anchor()` function to align coordinates, and use `position: absolute` or `position: fixed`:

   ```css
   .my-tooltip {
     position: absolute;
     position-anchor: --my-anchor-node;
     bottom: calc(anchor(top) + 8px); /* Position 8px above target */
     left: anchor(center); /* Align horizontal center */
     transform: translateX(-50%); /* Correct alignment offset */
   }
   ```

3. **Enable Auto Reflow & Flipping (Optional)**: Add standard boundary flipping options:
   ```css
   .my-popover {
     position-try-options: flip-block, flip-inline;
   }
   ```

---

### Why does it fit EaseMotion CSS's philosophy?

EaseMotion CSS is dedicated to providing high-performance, lightweight, and runtime-free visual motions. Traditionally, dynamic positioning of tooltips and menus required heavy JavaScript libraries (like Popper.js or Floating UI) to calculate viewport bounding rects on scroll/resize.

By leveraging the native CSS Anchor Positioning spec, we achieve pixel-perfect overlay positioning and automated collision flipping at 60fps on the browser's compositor thread, requiring **zero JavaScript runtime** and keeping pages highly performant and accessible.

---

## Technical Overview

CSS Anchor Positioning introduces native layout properties to position absolute or fixed elements relative to an arbitrary "anchor" element anywhere in the DOM tree, regardless of nesting or parent clipping contexts.

### Implemented Features

1. **Anchored Tooltip**: Classic helper message showing precise vertical/horizontal center tethering on hover/focus.
2. **Anchored Popover**: A fully styled profile card leveraging the native HTML `popover` API and entry `@starting-style` transitions for animated overlay flow.
3. **Notification Badges**: Status, unread count, and verified badge markers mapped to icons and avatars.
4. **Cardinal Positions Matrix**: A quadrant target demonstrating simultaneous `Top`, `Bottom`, `Left`, and `Right` anchor attachments.
5. **Responsive Showcase**: Boundary reflow container demonstrating smart flipping fallback options (`flip-block`, `flip-inline`).

### Browser Support

CSS Anchor Positioning is an emerging web standard:

- **Supported (Native)**: Chrome/Edge/Opera 125+, Safari 18+ (partial/behind flags).
- **Graceful Fallback**: The CSS uses absolute placement relative to parent wrappers in unsupported browsers using `@supports` checks to ensure standard usability on Firefox and older engines.

### Folder Structure

```text
submissions/examples/css-anchor-positioning/
├── demo.html
├── style.css
└── README.md
```

### Usage & Testing

1. Open `submissions/examples/css-anchor-positioning/demo.html` directly in a compatible web browser.
2. Hover over target nodes, trigger popovers, or scroll the container in Section 5 to observe alignment reflow.
