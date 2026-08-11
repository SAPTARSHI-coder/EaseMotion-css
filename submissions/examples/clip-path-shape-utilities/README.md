# Clip Path Shape Utilities

An overview and guide for using CSS `clip-path` utility classes to crop element boundaries into custom shapes.

## Core Questions

### What does this do?

These utility classes map CSS `clip-path` properties to define visible clipping regions, shaping rectangular elements into circles, ellipses, triangles, diamonds, hexagons, or stars.

### How is it used?

Apply the utility classes directly to wrapper containers or layout blocks (such as images, background grids, or cards):

```html
<div class="profile-card cp-circle">
  <img src="user-portrait.jpg" alt="User face" />
</div>
```

### Why is it useful?

It allows developer-controlled visual cropping directly in the HTML without needing graphics editing software (like Photoshop) or canvas elements, maintaining responsive element resizing automatically.

---

## Utility Classes

| Class          | CSS Declaration                                                             | Shape Rendered                                     |
| :------------- | :-------------------------------------------------------------------------- | :------------------------------------------------- |
| `.cp-circle`   | `clip-path: circle(50%);`                                                   | A perfect circle fitting inside the element's box. |
| `.cp-ellipse`  | `clip-path: ellipse(50% 35%);`                                              | A centered oval shape.                             |
| `.cp-triangle` | `clip-path: polygon(50% 0%, 0% 100%, 100% 100%);`                           | An upright symmetric triangle.                     |
| `.cp-diamond`  | `clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);`                   | A centered 4-point diamond.                        |
| `.cp-hexagon`  | `clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);` | A flat-topped symmetric hexagon.                   |
| `.cp-star`     | `clip-path: polygon(50% 0%, ...);`                                          | A classic 5-pointed star.                          |

---

## Detailed Explanation of `clip-path`

The `clip-path` property creates a clipping region that sets the visible area of an element. The area inside the region is shown, while the area outside is hidden from paint operations.

- **Interaction Boundaries**: Interaction events (like `hover`, `click`, and focus states) are also restricted to the clipped region. Clicking outside the clipped path area (even if inside the original rectangular element box) will not trigger click events.
- **Percentages vs Absolute Coordinate Units**: Using percentages (e.g. `50% 0%`) in polygons allows shapes to scale fluidly with element resizing, while pixel lengths (e.g. `50px 0px`) create rigid geometries.

---

## Usage Examples

### 1. Hexagon Social Avatar Card

```html
<div
  class="avatar-container cp-hexagon"
  style="width: 100px; height: 100px; overflow: hidden;"
>
  <img
    src="avatar.jpg"
    alt="User profile photo"
    style="width: 100%; height: 100%; object-fit: cover;"
  />
</div>
```

### 2. Triangular Media Play Button

```html
<button
  class="play-btn cp-triangle"
  style="width: 60px; height: 60px; background: #22c55e;"
>
  Play
</button>
```

### 3. Star Highlight Product Badge

```html
<div
  class="sale-badge cp-star"
  style="width: 80px; height: 80px; background: gold; display: flex; align-items: center; justify-content: center;"
>
  <span>New!</span>
</div>
```

---

## Accessibility Considerations

- **Alt Text Representation**: Keep relevant alternative labels (`alt` attributes on images, or descriptive `aria-label` indicators on buttons) active. Clipping an element does not impact screen reader text content, but changing the shape could change how users read text inside them.
- **Contrast Ratios**: Check that clipped elements maintain high contrast against parent container background colors.

---

## Common Use Cases

1. **Creative User Avatars**: Replacing standard circular profile photos with hexagons or octagons.
2. **Featured Product Labels**: Clipping discount badges into diamonds or stars to highlight sales items.
3. **Angled Landing Header Sections**: Clipping banner card edges using polygons to create diagonal borders.
4. **Custom Keycap / Icon Containers**: Framing navigation icons inside diamonds or circles.

---

## Browser Support Notes

CSS `clip-path` is fully supported across all modern mobile and desktop browsers:

- Chrome 55+
- Edge 79+
- Firefox 54+
- Safari 9.1+
- iOS Safari 9.3+
- Android Browser 55+

_Note: Older browsers like IE 11 did not support CSS shape functions. In unsupported environments, the crop falls back to standard rectangular border layouts._
