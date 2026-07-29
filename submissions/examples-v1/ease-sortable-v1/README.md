# ease-sortable

Submission for Issue #51224

## What this adds

A drag-to-reorder sortable list pattern where CSS handles all
animation (FLIP technique) and a minimal documented JS hook
manages drag events and DOM reordering.

## Architecture

- **CSS** — all visual states, transitions, and FLIP animation
- **JS** — ~60 lines, handles only: `dragstart`, `dragover`, `drop`,
  DOM reorder, and FLIP position calculation

## HTML Structure

```html
<ul class="ease-sortable" id="my-list">
  <li class="ease-sortable__item" draggable="true" data-id="1">
    <div class="ease-sortable__handle" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <div class="ease-sortable__content">
      <p class="ease-sortable__title">Item Title</p>
      <p class="ease-sortable__meta">Subtitle or meta info</p>
    </div>
    <span class="ease-sortable__badge ease-sortable__badge--green">Tag</span>
  </li>
</ul>
```

## JS Hook Usage

```js
initSortable(document.getElementById('my-list'), (newOrder) => {
  console.log('New order:', newOrder); // array of data-id values
});
```

## FLIP Technique

1. **First** — record all item positions before DOM change
2. **Last** — reorder DOM (items jump to new layout position)
3. **Invert** — instantly translate items back to old positions
4. **Play** — remove translate, CSS transition animates to new position

## CSS Classes

| Class | Description |
|---|---|
| `ease-sortable` | List wrapper |
| `ease-sortable__item` | Draggable list item |
| `ease-sortable__item--dragging` | Applied to item being dragged |
| `ease-sortable__item--over` | Applied to drop target |
| `ease-sortable__item--flip` | Applied during FLIP animation |
| `ease-sortable__handle` | Grip handle (3-bar icon) |
| `ease-sortable__badge--green/blue/purple/red/gray` | Status badges |

## Accessibility

- `aria-label` on list wrapper
- `aria-hidden` on decorative handle
- Respects `prefers-reduced-motion`

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
