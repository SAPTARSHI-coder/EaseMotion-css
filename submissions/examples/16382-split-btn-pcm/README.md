# Split Button / Button Group / Segmented Control Component

1. **What does this do?** Provides three related button components: a **button group** that joins buttons without gaps, a **split button** combining a primary action with a dropdown menu of related options (with divider and danger item support), and a **segmented control** displaying mutually exclusive options as connected radio-based segments with active state highlighting.

2. **How is it used?** Add the appropriate HTML structure with classes. For split button, call `toggleSplit(id)` to open/close the menu. For segmented control, wrap radio inputs in `<label class="segment">` with `role="radiogroup"` on the container.

```html
<!-- Button Group -->
<div class="btn-group">
  <button class="btn primary">Save</button>
  <button class="btn primary">Edit</button>
  <button class="btn primary">Delete</button>
</div>

<!-- Split Button -->
<div class="split-btn">
  <button class="btn primary">Save</button>
  <button class="split-btn-toggle" onclick="toggleSplit(this)">
    <span class="split-btn-arrow">▾</span>
  </button>
  <div class="split-btn-menu">
    <button class="split-btn-item">Save as Draft</button>
    <hr class="split-btn-divider">
    <button class="split-btn-item danger">Discard</button>
  </div>
</div>

<!-- Segmented Control -->
<div class="segmented-control" role="radiogroup">
  <label class="segment">
    <input type="radio" name="view" value="list" checked hidden>
    <span class="segment-label">List</span>
  </label>
  <label class="segment">
    <input type="radio" name="view" value="grid" hidden>
    <span class="segment-label">Grid</span>
  </label>
</div>
```

3. **Why is it useful?** Split buttons and segmented controls are common UI patterns in dashboards, toolbars, and settings panels — but implementing the connected border radii, dropdown positioning, radio-based selection, and accessibility from scratch is tedious. These components provide production-ready implementations with proper ARIA roles, keyboard support, and visual states.

### Components

| Component | Classes | Features |
|---|---|---|
| Button Group | `.btn-group` | Connected buttons, 0 gaps, smart border-radius |
| Split Button | `.split-btn`, `.split-btn-toggle`, `.split-btn-menu`, `.split-btn-item` | Dropdown toggle, arrow rotation, divider, danger item, click-outside close |
| Segmented Control | `.segmented-control`, `.segment`, `.segment-label` | Hidden radio inputs, ARIA radiogroup, checked highlight, focus-visible |

Fixes #16382
