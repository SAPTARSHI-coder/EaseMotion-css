# Tab Label Overflow Fix

## Description

This example prevents long tab labels from overflowing on smaller screens. Tabs remain on a single row, support horizontal scrolling, and truncate long labels with an ellipsis.

## Usage

```html
<div class="tabs">
  <button class="tab active">Overview</button>
  <button class="tab">
    Very Long Tab Label That Should Not Overflow
  </button>
</div>
```

## CSS

```css
.tabs {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
}

.tab {
  flex: 0 0 auto;
  max-width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## Benefits

- Prevents tab label overflow
- Maintains a single-row tab layout
- Mobile-friendly with horizontal scrolling
- Pure CSS implementation
- Reusable for responsive navigation components