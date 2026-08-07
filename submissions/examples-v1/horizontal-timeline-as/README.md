# Horizontal Timeline

### What does this do?

It lays out milestones along a horizontal line with dot markers, a date, and a short title for each. Completed milestones use a green dot, and the row scrolls sideways when it runs out of width.

### How is it used?

```html
<ol class="h-timeline">
  <li class="is-done"><time>2021</time><h3>Founded</h3><p>...</p></li>
  <li><time>2024</time><h3>Series A</h3><p>...</p></li>
</ol>
```

Each `li` becomes an evenly spaced step with a connector drawn to the next one. Add `is-done` to mark a milestone complete.

### Why is it useful?

Horizontal timelines suit roadmaps and process histories that read left to right. This lays out evenly spaced milestones along a spine with markers and labels, using only CSS, and it scrolls horizontally on small screens instead of squashing the content.
