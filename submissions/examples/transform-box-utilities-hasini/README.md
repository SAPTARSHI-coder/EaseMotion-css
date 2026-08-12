# Transform Box Utilities

An overview and guide for using CSS `transform-box` utility classes to define coordinate reference frames for SVG and HTML element transformations.

## Core Questions

### What does this do?

These utility classes specify which layout box is used to calculate the origin and coordinate space for transform operations (like rotations, scaling, and skews).

### How is it used?

Apply the utility classes directly to elements undergoing CSS transformation alongside a defined `transform-origin` style:

```html
<g class="tb-fill-box" style="transform-origin: center;">
  <!-- Rotates around the shape's center instead of the canvas -->
  <circle cx="120" cy="120" r="20" fill="purple" />
</g>
```

### Why is it useful?

In SVGs, transforms default to the canvas coordinate origin (0,0), which makes rotating individual shapes orbit the canvas center instead of spinning in place. In HTML, switching between border margins and padding boxes avoids visual layout shift during scaling.

---

## Utility Classes

| Class             | CSS Declaration               | Description / Use Case                                                                                           |
| :---------------- | :---------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| `.tb-fill-box`    | `transform-box: fill-box;`    | Uses the shape's bounding box as the reference box. Essential for spinning SVG elements around their own center. |
| `.tb-view-box`    | `transform-box: view-box;`    | Uses the nearest SVG viewport container as the reference box. Ideal for orbital movements.                       |
| `.tb-border-box`  | `transform-box: border-box;`  | Uses the element's border box boundary for layout calculation. Default for HTML block elements.                  |
| `.tb-content-box` | `transform-box: content-box;` | Uses the element's content area (excluding borders and padding) to calculate origins.                            |

---

## Detailed Explanation of `transform-box`

CSS transforms require a coordinate space reference frame to calculate translations, rotations, and scaling. By default, HTML elements and SVG elements calculate this reference frame differently:

1. **SVG Coordinate System**:
   - Without `transform-box: fill-box`, individual SVG elements (like a `<path>` or `<rect>`) calculate their `transform-origin: center` relative to the entire coordinate canvas (typically the `<svg>` tag's `viewBox`), causing shapes to rotate in large circles (orbital motion).
   - Applying `tb-fill-box` changes the coordinate calculations to target only the element's direct bounding box.
2. **HTML Box Model**:
   - For standard block containers, switching reference boxes allows you to rotate elements around the outer border frame corner (`tb-border-box`) or the interior padding boundary corner (`tb-content-box`).

---

## Usage Examples

### 1. Spinning Gear SVG Element (Fill-Box)

Spinning vector gears around their local axis:

```html
<svg viewBox="0 0 100 100">
  <g class="tb-fill-box spin-animation" style="transform-origin: center;">
    <!-- Gear Path centered at (75, 75) -->
    <circle cx="75" cy="75" r="15" fill="indigo" />
  </g>
</svg>
```

### 2. Orbital Star Orbiting viewport (View-Box)

```html
<svg viewBox="0 0 100 100">
  <!-- Planet orbits around viewport center (50, 50) -->
  <circle
    cx="90"
    cy="50"
    r="5"
    fill="gold"
    class="tb-view-box"
    style="transform-origin: center; animation: spin 5s linear infinite;"
  />
</svg>
```

### 3. HTML Card Swing (Content-Box vs Border-Box)

Align the pivot axis corner inside a thick-bordered description badge:

```html
<!-- Swings from content padding corner, ignoring border thickness -->
<div
  class="badge tb-content-box"
  style="transform-origin: 0 0; padding: 15px; border: 5px solid black; transform: rotate(10deg);"
>
  Pivot Card Content
</div>
```

---

## Accessibility Considerations

- **Animations and Motion Sensitivity**: Users with vestibular disorders may experience motion sickness from spinning or swinging animations. Ensure that you respect the user's system preferences by wrapping movement animations in media queries for prefers-reduced-motion.
- **Source Order**: Ensure that transform changes do not alter keyboard tab focus routes or screen-reader reading sequences.

---

## Common Use Cases

1. **SVG Icon Micro-Animations**: Animating individual vector elements (spinning loaders, flapping wings, beating hearts, turning dials) inside interactive dashboards.
2. **Interactive Graphs**: Scaling bar heights or line vertices relative to graph bounding bounds rather than coordinate baselines.
3. **Complex Layout Hover States**: Applying border-independent scales and offsets to cards containing thick margins or double-styled borders.

---

## Browser Support Notes

CSS `transform-box` is fully compatible with modern browsers:

- Chrome 55+
- Edge 79+
- Firefox 53+
- Safari 11+
- iOS Safari 11+
- Android Browser 55+

_Note: IE 11 does not support `transform-box`. In browsers lacking support, transformations default to their standard initial behavior (which is `view-box` for SVG and `border-box` for HTML)._
