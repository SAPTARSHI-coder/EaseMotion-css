# List Group Component

### What does this do?

Adds `ease-list-group-az` — a versatile list group component for rendering navigation menus, settings panels, contact lists, and more. Supports badges, icons, linked items, title/subtitle pairs, flush borderless mode, and a dark mode variant.

### How is it used?

The maintainer should copy `style.css` into `components/list-group.css` and import it.

```html
<ul class="ease-list-group-az">
  <li class="ease-list-group-item-az active">Inbox</li>
  <li class="ease-list-group-item-az">Sent</li>
  <li class="ease-list-group-item-az disabled">Archived</li>
</ul>
```

Variants: `.flush` (no outer border), `.dark` (dark background). Item states: `.active` (highlighted with left bar), `.disabled`.

### Why is it useful?

1. **Active state** — highlighted item with a 3px left accent bar and primary color tint
2. **Rich content** — badges (with color variants), icons, title/subtitle pairs all slot in naturally
3. **Linked items** — use `<a>` tags instead of `<li>` for clickable navigation, with `:focus-visible` outline
4. **Dark mode** — the `.dark` variant works on dark backgrounds with adjusted hover and active states
