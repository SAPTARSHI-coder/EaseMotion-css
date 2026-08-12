# CSS Sortable Column Header

A beautifully animated, accessible table column header that simulates sorting state toggles using purely CSS.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript event listeners or state management.
- **The Checkbox Hack**: Uses a visually hidden `<input type="checkbox">` coupled with a semantic `<label>` to store the Ascending/Descending sort state natively in the DOM. CSS sibling selectors (`:checked + .sort-header`) trigger the state transitions.
- **Micro-Interactions**: Clicking the header subtly scales down the sort icon (`:active`), before transitioning it through a playful 180-degree `cubic-bezier` rotation. The active sorted column is highlighted with an accent color.
- **Accessible & Responsive**: The hidden checkbox remains in the focus flow, allowing perfect keyboard navigation. `focus-visible` styles are properly forwarded to the label via sibling selectors. Screen readers can toggle the checkbox natively. Respects user preferences by gracefully disabling the scale and rotation animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your `<thead>` elements.

```html
<th>
  <!-- Hidden Checkbox for State -->
  <input type="checkbox" id="sort-name" class="sort-checkbox">
  
  <!-- The clickable Header Label -->
  <label for="sort-name" class="sort-header" aria-label="Sort by Name">
    Name
    <span class="sort-icon-wrapper">
      <svg>...</svg> <!-- Chevron Down -->
    </span>
  </label>
</th>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--header-bg`: Background color of the table header (default: `#f8fafc`)
- `--header-hover`: Hover state color for the header (default: `#f1f5f9`)
- `--accent-color`: Active sorted highlight color (default: `#3b82f6`)
- `--text-muted`: Default un-sorted text color (default: `#64748b`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The checkbox sibling selector hack is a universally supported standard CSS technique.
