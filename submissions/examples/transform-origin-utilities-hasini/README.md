# Transform Origin Utilities

An overview and guide for using CSS `transform-origin` utility classes to customize layout rotation and scaling anchor points.

## Core Questions

### What does this do?

These utility classes set the starting or anchor point (the origin) around which element transformations—such as rotations, scales, or skews—are calculated.

### How is it used?

Apply the utility classes directly to any element that has transform effects applied via CSS variables, hover styles, or keyframe animations:

```html
<div class="hover-scale to-top-left">
  <!-- Scales from the top-left corner on hover -->
  Hover Content
</div>
```

### Why is it useful?

It allows developers to adjust the visual flow of transitions (e.g. making drop-down menus fold down from the `top`, or making tooltip bubbles expand outwards from the `bottom`) without needing to code custom inline style coordinates.

---

## Utility Classes

| Class              | CSS Declaration                   | Pivot Point Location                             |
| :----------------- | :-------------------------------- | :----------------------------------------------- |
| `.to-center`       | `transform-origin: center;`       | The absolute geometric center (Initial default). |
| `.to-top`          | `transform-origin: top;`          | The top-center edge.                             |
| `.to-bottom`       | `transform-origin: bottom;`       | The bottom-center edge.                          |
| `.to-left`         | `transform-origin: left;`         | The left-center edge.                            |
| `.to-right`        | `transform-origin: right;`        | The right-center edge.                           |
| `.to-top-left`     | `transform-origin: top left;`     | The top-left corner.                             |
| `.to-top-right`    | `transform-origin: top right;`    | The top-right corner.                            |
| `.to-bottom-left`  | `transform-origin: bottom left;`  | The bottom-left corner.                          |
| `.to-bottom-right` | `transform-origin: bottom right;` | The bottom-right corner.                         |

---

## Detailed Explanation of `transform-origin`

The `transform-origin` CSS property sets the origin for an element's transformations.

- **Coordinate System**: It can accept percentage values, absolute lengths, or keyword keywords.
  - One-value syntax: E.g., `top` (computes to `50% 0%`).
  - Two-value syntax: E.g., `bottom left` (computes to `0% 100%`).
- **Effect on Layout**: Changing `transform-origin` modifies the rotation path (orbiting vs. spinning) and scaling direction (shrinking inward vs. collapsing toward an edge).

---

## Usage Examples

### 1. Dropdown Menu Fold (Top Anchor)

Expand dropdown menus down from the header bar edge:

```html
<div
  class="dropdown-menu to-top"
  style="transform: scaleY(0); transition: transform 0.3s;"
>
  <!-- Slides open downwards on hover -->
  Menu Items
</div>
```

### 2. Tooltip Speech Bubble (Bottom Anchor)

Make tooltips pop open from the pointer stem base:

```html
<div
  class="tooltip to-bottom"
  style="transform: scale(0); transition: transform 0.2s;"
>
  Tooltip Info Text
</div>
```

### 3. Visual Swing / Pendulum Card (Top Left Anchor)

Create a swinging card that pivots from the top corner:

```html
<div class="swing-card to-top-left" style="animation: swing 3s infinite;">
  Featured Banner
</div>
```

---

## Accessibility Notes

- **Reduced Motion Support**: Movement and scaling animations can trigger dizziness or vertigo in users with motion sensitivities. Always wrap intensive transform animations inside a `@media (prefers-reduced-motion: reduce)` block to either disable the movements or simplify the transitions.
- **Reading Order**: Ensure that elements scaled or rotated out of position remain clear and readable, and that tab order is not affected by layout transformations.

---

## Common Use Cases

1. **Dropdown & Collapsible Accordions**: Using `.to-top` or `.to-bottom` to scale panels vertically from their header borders.
2. **Tooltip & Popover Modals**: Using `.to-center` or `.to-bottom` to expand dialog bubbles outwards from their visual targets.
3. **Sidebar Drawer Transitions**: Using `.to-left` or `.to-right` to slide menus open from the screen borders.
4. **Visual Page Banners**: Using `.to-top-left` or `.to-top-right` to create decorative swinging tags or banners.

---

## Browser Support Notes

CSS `transform-origin` is fully supported across all modern mobile and desktop browsers:

- Chrome 36+
- Edge 12+
- Firefox 16+
- Safari 9+
- iOS Safari 9+
- Android Browser 4.4+

_For historical support in older browsers, vendor prefixes (e.g. `-webkit-transform-origin`, `-ms-transform-origin`) were required, which are now obsolete and not needed in modern stylesheets._
