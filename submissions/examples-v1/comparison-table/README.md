# Comparison Matrix Table Component

An encapsulated matrix table interface coupling smooth multi-column highlights with staggered line-item arrival entry animations.

## Functional Controls

- **Staggered Entry Keyframes:** Non-blocking translation delays fading rows sequentially during initial render cycles.
- **Symmetric Column Brackets:** Isolated target highlight cells retaining independent color values during structural row mouse movements.
- **Fluid Horizontal Bounds:** Scalable layout scroll footprints preventing table border breakage across narrow viewport breakpoints.

## Usage Layout Structure

```html
<div class="ease-comparison-viewport">
  <table class="ease-compare-table">
    <tr class="ease-table-row-animated">
      <td class="ease-highlight-col">...</td>
    </tr>
  </table>
</div>
```

Closes #12484
