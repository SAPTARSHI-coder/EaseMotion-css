# Visual Comparison: CSS mask vs clip-path

This module presents a side-by-side technical exploration of `clip-path` and `mask` properties in CSS, outlining rendering engines, performance behaviors, and structural differences.

## Quick Core Differences

| Feature | `clip-path` | `mask-image` / `mask` |
| :--- | :--- | :--- |
| **Edge Type** | Hard, aliased vector edges. | Soft, antialiased alpha edges. |
| **Source Inputs** | Basic shapes (`circle()`, `polygon()`), SVG paths. | Gradients, PNG images, SVG elements. |
| **Transparency** | Binary (inside is visible, outside is hidden). | Continuous (supports varying opacity/alpha levels). |
| **Performance** | High (hardware accelerated via GPU path rasterization). | Moderate (requires paint layers blending computation). |

## Key Use Cases

### Choose `clip-path` when:
1. You need clean geometric shapes like triangles, hexagons, or diagonals.
2. Performance is a high priority, especially during fast UI transitions or animations.
3. You only want to crop elements cleanly without needing smooth opacity fades at the edges.

### Choose `mask` when:
1. You need a smooth vignette, fade-out effect, or smoky transparency gradient.
2. You want to shape an element using a custom image file (like an irregular paint-splatter PNG background).
3. You want to repeat structural frame slicing patterns via properties like `mask-size` and `mask-repeat`.

## File Contents
- `demo.html`: The markup grid displaying responsive visual comparison cases.
- `style.css`: Layout variables, masking definitions, vendor prefix configurations, and transition bindings.
