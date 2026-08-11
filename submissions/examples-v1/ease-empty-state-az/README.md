# Empty State Component

### What does this do?
Adds `ease-empty-state-az` — an empty state placeholder component for no-data, no-results, and zero-state screens. Includes a circular icon container, title, description, and an optional call-to-action button.

### How is it used?
The maintainer should copy `style.css` into `components/empty-state.css` and import it.

```html
<div class="ease-empty-state-az">
  <div class="ease-empty-state-icon-az"><!-- icon --></div>
  <div class="ease-empty-state-title-az">No results found</div>
  <p class="ease-empty-state-desc-az">Try adjusting your search filters.</p>
  <button class="ease-empty-state-action-az">Clear Filters</button>
</div>
```

Variants: `.sm` (compact), `.bordered` (dashed border for drop zones).

### Why is it useful?
1. **Clear hierarchy** — large icon circle, bold title, muted description, primary CTA
2. **Two sizes** — default and `.sm` for embedding inside cards or small panels
3. **Bordered variant** — dashed border for drop-zone style empty states
