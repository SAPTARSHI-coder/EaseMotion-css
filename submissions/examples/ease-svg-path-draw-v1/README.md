# Modern CSS SVG Path Draw Animation Component

A high-performance, lightweight vector drawing and sequencing animation component built entirely with inline SVG and pure CSS. It features mathematically synced sequenced line-drawing, automated fill-glow reveals, and continuous data flow pulses.

---

## 1. What does this do?

This component animates inline SVGs to appear as though they are being hand-drawn or generated in real-time. It features:

- **Zero JavaScript**: Drives drawing sequences entirely via CSS `@keyframes` manipulating `stroke-dasharray` and `stroke-dashoffset`.
- **Sequenced Drawings**: Orchestrates delay thresholds so parts of the SVG (such as outer frames, stands, details, and inner highlights) draw in a logical, step-by-step order.
- **Dynamic Fills & Glows**: Fades in inner gradients, fills, or glows automatically once the wireframe outline is completed.
- **Nested Flow Packet Streams**: Simulates active data transmissions by overlaying pulsing packet dashes that slide infinitely along connection paths.
- **Adaptive Theme Support**: Automatically adapts to light and dark themes using built-in CSS variables.

---

## 2. How is it used?

### Basic Layout Pattern

To animate an SVG element, add the `.draw-path` class and set up keyframes matching the mathematical length (perimeter or circumference) of the path:

```html
<svg
  class="ease-draw-svg"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Circle Circumference = 2 * PI * r = 2 * 3.14 * 42 ≈ 264 -->
  <circle class="draw-path radar-outer" cx="50" cy="50" r="42" />
</svg>
```

### CSS Keyframes Configuration

Define the keyframe offsets to animate the stroke from fully hidden (offset equal to path length) to fully drawn (offset equal to 0):

```css
.radar-outer {
  /* Set stroke-dasharray to the total length of the path */
  stroke-dasharray: 264;
  /* Set initial offset to fully mask the path */
  stroke-dashoffset: 264;
  /* Trigger the looping sequence */
  animation: draw-radar-outer 6s infinite ease-in-out;
}

@keyframes draw-radar-outer {
  0% {
    stroke-dashoffset: 264;
  } /* Hidden */
  25% {
    stroke-dashoffset: 0;
  } /* Fully Drawn */
  80% {
    stroke-dashoffset: 0;
  } /* Pause / Hold */
  92%,
  100% {
    stroke-dashoffset: 264;
  } /* Erase / Reset */
}
```

---

## Class Catalog

| Class Name       | Type      | Description                                                              |
| :--------------- | :-------- | :----------------------------------------------------------------------- |
| `.ease-draw-svg` | Container | Main SVG wrapper that sets responsive aspect ratios.                     |
| `.draw-path`     | Element   | Base class for paths, lines, and circles that draw themselves.           |
| `.fade-fill`     | Element   | Renders fills, text, or glowing graphics that fade in post-drawing.      |
| `.flow-packets`  | Group     | Wrapper that handles the fade-in and fade-out of pulsing overlays.       |
| `.packet-line`   | Element   | Dashed overlay line that runs an infinite data packet flow sliding loop. |

---

## 3. Why is it useful?

1. **Lightweight Motion Graphics**: Replaces heavy GIF files, video loops, or canvas render engines with lightweight, crisp, vector-based code lines that load instantly.
2. **Layout Shift Prevention**: Inline SVGs preserve their structural height and width ratio. This prevents cumulative layout shifts (CLS) when loading dashboards or interactive pages.
3. **High-Performance rendering**: The browser translates SVG strokes using GPU rendering, meaning animations run at 60fps/120fps with minimal CPU overhead.
4. **No External Dependecies**: Does not require layout measurement libraries (like Vivus or GSAP DrawSVG). Operates natively on standard HTML engines.
5. **Reduced Motion Compliant**: Honors system settings by checking `@media (prefers-reduced-motion: reduce)`, immediately displaying drawings fully completed without flashing or transitions.
