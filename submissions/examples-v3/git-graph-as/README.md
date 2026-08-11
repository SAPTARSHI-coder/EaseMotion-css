# Git Graph

### What does this do?

It shows a commit graph like the ones in Git clients. A main lane and a feature lane run down the left as colored paths with commit nodes; the feature branch diverges from main, gains two commits, and merges back into a highlighted merge node. Each commit hash and message lines up beside its node.

### How is it used?

```html
<svg class="gg-lines" viewBox="0 0 70 250">
  <path class="ln feat" d="M20 62 C20 92 50 82 50 108 V150 C50 178 20 198 20 222" />
  <circle class="node merge" cx="20" cy="222" r="7" />
</svg>
<ul class="gg-log"><li style="--y: 62px;"><b>7d3e10</b> Add README</li></ul>
```

The lanes and the branch curve are SVG paths, commits are `circle` nodes colored by lane, and each log row is positioned with `top: var(--y)` so it aligns to its node.

### Why is it useful?

Developer tools and dashboards visualize branch history as a graph. This renders one from inline SVG paths and nodes with a custom property aligned log, using only CSS and no graphing library.
