# CSS Zebra Striped List

A polished, highly interactive data list utilizing CSS pseudo-classes for automatic zebra striping and smooth hover reveals.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Uses the standard CSS `:nth-child(even)` and `:nth-child(odd)` selectors to dynamically apply alternating row colors regardless of how many items are rendered.
- **Micro-Interactions**: Hovering or focusing a list item triggers a suite of synchronized interactions: the background smoothly transitions to a highlight color, the row slightly indents (via `padding-left`), an accent border grows from the center (`scaleY`), and a right-arrow action icon fades and slides into view.
- **Accessible**: Built using standard semantic HTML `<ul>` and `<li>` lists, wrapped around interactive `<a>` tags for perfect tab navigation. Includes appropriate `aria-label`s. Respects user preferences by gracefully disabling the padding indent, icon sliding, and scaling animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your application for leaderboards, contact lists, or data tables.

```html
<ul class="zebra-list" aria-label="List Title">
  <li>
    <a href="#" class="zebra-item">
      <div class="item-avatar">...</div>
      <div class="item-content">...</div>
      <div class="item-action">...</div>
    </a>
  </li>
  <!-- Repeat for more items. Colors alternate automatically! -->
</ul>
```

## CSS Custom Properties
Easily customize the color palette using the root variables in `style.css`:
- `--row-odd`: Background color for odd rows (default: `#ffffff`)
- `--row-even`: Background color for even rows (default: `#f1f5f9`)
- `--row-hover`: Background color when a row is hovered (default: `#e0e7ff`)
- `--text-hover`: Primary text color on hover (default: `#3730a3`)
- `--accent-color`: Highlight color for avatars and borders (default: `#6366f1`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge). The `:nth-child` selector is universally supported.
