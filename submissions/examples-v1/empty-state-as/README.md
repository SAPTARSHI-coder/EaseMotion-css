# Empty State Card

### What does this do?

It shows an empty state panel with a CSS drawn illustration that gently floats, a heading, a description, and a call to action, for when a list or search has no results.

### How is it used?

```html
<div class="empty">
  <div class="empty-art" aria-hidden="true"><!-- inline svg --></div>
  <h3>No results found</h3>
  <p>Try adjusting your filters or search terms.</p>
  <a href="#" class="empty-btn">Clear filters</a>
</div>
```

The illustration is an inline SVG so there are no images to load, and it floats with a small looping transform.

### Why is it useful?

Empty states guide users when there is nothing to show, in inboxes, searches, and dashboards. This adds a soft floating illustration and a clear message and action, using only CSS. The illustration is hidden from assistive tech, the action shows a focus ring, and the float is disabled under `prefers-reduced-motion: reduce`.
