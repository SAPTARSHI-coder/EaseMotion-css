# Sortable List

### What does this do?

It styles a reorderable list where each row has a grab handle, an icon, a title, and a subtitle. Rows lift and cast a stronger shadow while grabbed, showing the visual state of a sortable list using only CSS.

### How is it used?

```html
<ul class="sortable">
  <li class="sort-row">
    <span class="sort-handle" aria-label="Drag to reorder"><svg>...</svg></span>
    <span class="sort-icon">A</span>
    <div class="sort-body"><strong>Welcome email</strong><small>Sends on sign up</small></div>
  </li>
</ul>
```

The grip uses a grab cursor and the row shows a lift on `:active`. A developer can attach real drag and drop or a library on top of this styling.

### Why is it useful?

Settings and playlists let users reorder items by dragging a handle. This styles a sortable list with grab handles, a grabbed lift state, and clear row structure, using only CSS, so real drag behavior can be layered on top. The lift is removed under reduced motion.
