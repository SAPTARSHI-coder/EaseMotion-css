# Shape Margin Utilities

Configure standard CSS spacing/margins around floated elements that use the CSS Shapes `shape-outside` property.

This utility module lets developers control how close inline wrapping text flows relative to circles, ellipses, triangles, and complex custom polygons, aligning shapes perfectly with the project's design system spacing scale.

---

## Table of Contents

1. [What does this do?](#what-does-this-do)
2. [Utility Class Reference](#utility-class-reference)
3. [Why is it useful?](#why-is-it-useful)
4. [How is it used?](#how-is-it-used)
   - [Circular Avatar Layout](#circular-avatar-layout)
   - [Polygonal Triangle Wrapping](#polygonal-triangle-wrapping)
5. [Technical Requirements & Constraints](#technical-requirements--constraints)
   - [1. Elements Must Be Floated](#1-elements-must-be-floated)
   - [2. Explicit Dimensions are Required](#2-explicit-dimensions-are-required)
   - [3. clip-path vs shape-outside](#3-clip-path-vs-shape-outside)
6. [Spacing Scale Reference](#spacing-scale-reference)
7. [Accessibility & UX Best Practices](#accessibility--ux-best-practices)
8. [Tech Stack](#tech-stack)
9. [Contribution Notes](#contribution-notes)

---

## What does this do?

Configure the distance between text wrapping boundaries and floated shape outlines. In traditional layouts, elements are rectangular bounding boxes. CSS Shapes (`shape-outside`) allow text to wrap along curved or diagonal contours.

The `shape-margin` utilities define the thickness of the invisible buffer margin surrounding that shape outline, pushing the text away by standard scale intervals:

1. **Zero Spacing**: Text fits tight against the shape contour.
2. **Compact Spacing**: Small gaps (4px - 12px) for neat, close text flow.
3. **Editorial Spacing**: Large margins (16px - 64px) for artistic magazines and landing page showcases.

---

## Utility Class Reference

| Utility Class     | CSS Property Applied                             | Spacing Equivalent (rems) | Spacing Equivalent (pixels) |
| :---------------- | :----------------------------------------------- | :------------------------ | :-------------------------- |
| `shape-margin-0`  | `shape-margin: 0 !important;`                    | `0rem`                    | 0px                         |
| `shape-margin-1`  | `shape-margin: var(--ease-space-1) !important;`  | `0.25rem`                 | 4px                         |
| `shape-margin-2`  | `shape-margin: var(--ease-space-2) !important;`  | `0.5rem`                  | 8px                         |
| `shape-margin-3`  | `shape-margin: var(--ease-space-3) !important;`  | `0.75rem`                 | 12px                        |
| `shape-margin-4`  | `shape-margin: var(--ease-space-4) !important;`  | `1rem`                    | 16px                        |
| `shape-margin-5`  | `shape-margin: var(--ease-space-5) !important;`  | `1.25rem`                 | 20px                        |
| `shape-margin-6`  | `shape-margin: var(--ease-space-6) !important;`  | `1.5rem`                  | 24px                        |
| `shape-margin-8`  | `shape-margin: var(--ease-space-8) !important;`  | `2rem`                    | 32px                        |
| `shape-margin-10` | `shape-margin: var(--ease-space-10) !important;` | `2.5rem`                  | 40px                        |
| `shape-margin-12` | `shape-margin: var(--ease-space-12) !important;` | `3rem`                    | 48px                        |
| `shape-margin-16` | `shape-margin: var(--ease-space-16) !important;` | `4rem`                    | 64px                        |

---

## Why is it useful?

1. **Typographic Legibility**: If text sits directly against a curved border or circular image, it becomes difficult to read because the line starts and ends are uneven. Shape margins introduce consistent spacing.
2. **Editorial Layouts**: Web typography often feels flat. Wrapping content around polygonal badges, circular team portraits, or organic background blobs creates an engaging, print-magazine feel on web pages.
3. **Design System Alignment**: Applying arbitrary margins like `shape-margin: 17px;` breaks visual rhythm. These utilities leverage EaseMotion's standard space values (`var(--ease-space-*)`) to ensure your shapes align with the rest of your layout spacing.
4. **Simple API**: Writing shape-margin rules manually in CSS is tedious. Utility classes make styling rapid and responsive.

---

## How is it used?

### Circular Avatar Layout

To float a user portrait on the left and wrap text cleanly around it with a `16px` margin:

```html
<div class="article-container">
  <!-- Floated circular profile image with shape margin -->
  <img
    src="avatar.jpg"
    class="float-left shape-circle shape-margin-4"
    style="width: 120px; height: 120px;"
    alt="User Avatar"
  />

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nibh
    interdum, molestie erat a, egestas erat. Vivamus ac risus sed lacus accumsan
    elementum porta nec magna.
  </p>
</div>
```

### Polygonal Triangle Wrapping

To wrap text along a diagonal cut (e.g. a right triangle on the left side) with `24px` spacing:

```html
<div class="article-container">
  <div
    class="float-left shape-triangle shape-margin-6"
    style="width: 150px; height: 150px; background: #8b5cf6;"
  >
    Triangle Title
  </div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet,
    magna in convallis euismod, felis lectus congue mi, ut eleifend leo sapien
    eget nisl.
  </p>
</div>
```

---

## Technical Requirements & Constraints

For CSS shapes and shape margins to work in the browser, you must meet the following three CSS conditions:

### 1. Elements Must Be Floated

The CSS Shapes specification states that `shape-outside` (and therefore `shape-margin`) has no effect on elements unless they are floated. The element must have:

- `float: left;` OR
- `float: right;`

If you remove the float, wrapping calculations collapse back into a standard block grid.

### 2. Explicit Dimensions are Required

You must provide explicit dimensions to floated elements utilizing CSS shapes:

- `width: <length>;` AND
- `height: <length>;`

Without declared dimensions, the browser cannot locate the coordinate points for circle radius, ellipse axes, or polygon arrays.

### 3. clip-path vs shape-outside

`shape-outside` defines **how surrounding content behaves**, but it does not clip the element's actual visual box (backgrounds, border colors, images).
To clip the floated element's visual graphic to match the text wrap outline, you should pair it with a matching `clip-path`:

```css
/* Custom class pairing clip-path and shape-outside */
.my-triangle-badge {
  shape-outside: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

---

## Spacing Scale Reference

The spacing parameters are driven by EaseMotion's variables file, referencing these rem configurations:

- `1` &rarr; `0.25rem` (4px)
- `2` &rarr; `0.5rem` (8px)
- `3` &rarr; `0.75rem` (12px)
- `4` &rarr; `1rem` (16px)
- `5` &rarr; `1.25rem` (20px)
- `6` &rarr; `1.5rem` (24px)
- `8` &rarr; `2rem` (32px)
- `10` &rarr; `2.5rem` (40px)
- `12` &rarr; `3rem` (48px)
- `16` &rarr; `4rem` (64px)

---

## Accessibility & UX Best Practices

- **Reading Order**: Floats change the visual position of elements, but they do not change the DOM order. Ensure that screen readers still read the text in a logical, coherent hierarchy.
- **Justification & Alignment**: Symmetrical text wraps are easiest to read when the text is justified (`text-align: justify;`) or aligned cleanly along the float boundary.
- **Responsive Collapsing**: On very narrow mobile screens, floating a wide shape can squeeze the text container into a column that is too thin to read. Use responsive media queries to disable the float (e.g. `float: none; width: 100%;`) on small screens, which automatically disables the shape-outside wrapping.

---

## Tech Stack

- **HTML5**: Semantic tags.
- **CSS3**: Layout properties, CSS Shapes Level 1, clip-paths, and variables.
- **Pure CSS**: Zero dependencies or frameworks required.

---

## Contribution Notes

- The classes have been added in an isolated directory structure to prevent global regressions.
- Class naming matches project spacing standards and will be prefixed by the maintainers if required during compilation.
