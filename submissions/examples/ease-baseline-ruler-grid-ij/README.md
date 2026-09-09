# ease-baseline-ruler-grid

A visual baseline grid ruler overlay that displays a measurement grid of horizontal and vertical lines. Perfect for verifying vertical rhythm, alignment, and spacing consistency in layouts during development.

## HTML Structure

```html
<div style="position: relative; overflow: hidden;">
  <div class="ease-baseline-ruler"></div>
  <!-- your content here -->
</div>
```

The parent element should have `position: relative` (or any non-static position) and `overflow: hidden` so the ruler overlays correctly.

## CSS Variables

| Variable        | Default                   | Description                                 |
|-----------------|---------------------------|---------------------------------------------|
| `--grid-color`  | `rgba(79,70,229,0.15)`    | Color of the grid lines                     |
| `--grid-size`   | `16px`                    | Spacing between grid lines                  |
| `--ruler-height`| `120px`                   | Height of the ruler overlay area            |

## Example

```html
<div style="position: relative; height: 200px;">
  <div class="ease-baseline-ruler" style="--grid-color: rgba(220,38,38,0.12); --grid-size: 12px;"></div>
  <p>Content aligned to a 12px baseline grid.</p>
</div>
```
