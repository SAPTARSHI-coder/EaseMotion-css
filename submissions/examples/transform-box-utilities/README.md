# Transform-Box Utilities

A lightweight collection of atomic CSS `transform-box` utility classes designed to control the layout box used to calculate transform origins and coordinates. These utilities are essential when working with CSS transitions and animations on SVG elements (e.g., shape-centered vs. viewport-centered rotation) or HTML box-model elements (e.g., content-based vs. border-inclusive pivot offsets).

## Features

- **Pure CSS implementation** (no JavaScript required for core functionality).
- **EaseMotion Naming Standard**: clear atomic classes with the `.ease-transform-box-` prefix.
- **SVG-Optimized**: supports `fill-box`, `stroke-box`, and `view-box` for complex path transformations.
- **HTML Box-Model Support**: supports `content-box` and `border-box` to adjust pivot coordinate offsets.
- **Developer-Friendly Documentation**: includes explicit use-cases and interactive layouts.

## Available Utility Classes

| Class Name | CSS Rule | Description / Use Case |
| :--- | :--- | :--- |
| `ease-transform-box-fill` / `ease-transform-box-fill-box` | `transform-box: fill-box;` | Uses the shape's object bounding box as the reference box. Ideal for rotating SVG paths/shapes around their own center. |
| `ease-transform-box-stroke` / `ease-transform-box-stroke-box` | `transform-box: stroke-box;` | Uses the shape's bounding box including its stroke width. Helpful for thick-bordered vector elements. |
| `ease-transform-box-view` / `ease-transform-box-view-box` | `transform-box: view-box;` | Uses the nearest SVG viewport container as the reference box. Ideal for orbital motions around the canvas center. |
| `ease-transform-box-border` / `ease-transform-box-border-box` | `transform-box: border-box;` | Uses the element's border box boundary for transform operations. Default behavior for HTML block-level elements. |
| `ease-transform-box-content` / `ease-transform-box-content-box` | `transform-box: content-box;` | Uses the element's content box (inside padding and border boundaries) for transform origin points. |

## Usage Examples

### 1. SVG Center Rotation (`fill-box`)
By default, SVG shapes calculate their `transform-origin` relative to the entire SVG canvas (`view-box`), causing them to orbit instead of spin. Adding `ease-transform-box-fill` centers the transformation inside the shape's own bounding box:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Gear rotates cleanly on its own axis -->
  <g class="ease-transform-box-fill" style="transform-origin: center; animation: spin 4s linear infinite;">
    <circle cx="140" cy="140" r="20" fill="indigo" />
    <!-- gear teeth paths here -->
  </g>
</svg>
```

### 2. SVG Orbital Rotation (`view-box`)
If you want an SVG element to orbit around the viewport's center, use `ease-transform-box-view`:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Planet orbits around the center of the SVG canvas -->
  <circle cx="150" cy="100" r="10" fill="orange"
          class="ease-transform-box-view" 
          style="transform-origin: center; animation: spin 8s linear infinite;" />
</svg>
```

### 3. HTML Box-Model Pivot Shift (`content-box`)
For HTML elements, you can shift the transform origin inside the padding and borders by changing the reference box to `content-box`:

```html
<!-- Rotates relative to the inner content area top-left corner (ignoring padding and borders) -->
<div class="ease-transform-box-content" style="transform-origin: 0 0; padding: 20px; border: 10px solid black;">
  旋转框 (Content Box Origin)
</div>
```

## Why is it Useful?

1. **Resolves SVG Origin Bugs**: Prior to CSS `transform-box`, animating individual SVG paths was notoriously difficult because browsers defaulted to canvas coordinate space.
2. **Eliminates Magic Spacing Offsets**: Using `fill-box` saves you from calculating absolute coordinate values for `transform-origin` on irregular shape groups.
3. **Ensures Box-Model Alignment**: When designing nested hover-scaling components, switching HTML reference boxes guarantees that elements scale from content areas rather than borders.

## Browser Support

| Browser | Supported | Notes |
| :--- | :---: | :--- |
| **Chrome** | ✅ | Full support (v55+) |
| **Firefox** | ✅ | Full support (v53+) |
| **Safari** | ✅ | Full support (v11+) |
| **Edge** | ✅ | Full support (v79+) |

---

**Submitted by:** @EaseMotion Community  
**Date:** 2026-06-23  
**Status:** Ready for review  
**Type:** Pure CSS Utilities / Layout  
