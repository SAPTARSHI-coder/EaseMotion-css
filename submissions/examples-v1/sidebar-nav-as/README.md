# Sidebar Nav With Sliding Indicator

### What does this do?

It shows a vertical sidebar navigation where selecting an item slides an accent bar to it and highlights it.

### How is it used?

```html
<nav class="sidebar" aria-label="Main">
  <input type="radio" name="nav" id="n1" class="nav-input" checked />
  <label for="n1" class="nav-item">Dashboard</label>
  <input type="radio" name="nav" id="n2" class="nav-input" />
  <label for="n2" class="nav-item">Projects</label>
  <span class="nav-indicator" aria-hidden="true"></span>
</nav>
```

The radios share one `name`, and the checked one moves the `.nav-indicator` with a transform to the matching row.

### Why is it useful?

Sidebars are the main navigation in dashboards and admin panels. This moves an active indicator with a transform driven by radio inputs, so it needs no JavaScript. The items are keyboard reachable with a focus ring, and the indicator movement is disabled under `prefers-reduced-motion: reduce`.
