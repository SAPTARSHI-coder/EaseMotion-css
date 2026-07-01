# Sidebar Collapse Icon

## What does this do?

It provides a sidebar navigation that collapses to an icon-only state when toggled. The sidebar width smoothly transitions, labels fade out, and the toggle icon rotates to indicate the collapsed state.

## How is it used?

Add the `sci-sidebar` class to your sidebar element and toggle the `sci-collapsed` class via JavaScript:

```html
<aside class="sci-sidebar" id="sidebar">
  <button class="sci-toggle" id="toggleBtn">&#9664;</button>
  <nav>
    <a href="#" class="sci-nav-item">
      <span class="sci-icon">&#8962;</span>
      <span class="sci-label">Dashboard</span>
    </a>
  </nav>
</aside>

<script>
  document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("sci-collapsed");
  });
</script>
```

You can customize the following CSS custom properties:
- `--sci-sidebar-width`: Expanded width (default `240px`).
- `--sci-sidebar-collapsed-width`: Collapsed width (default `64px`).
- `--sci-transition-duration`: Transition speed (default `0.3s`).
- `--sci-hover-bg`: Nav item hover background (default `#f1f5f9`).
- `--sci-primary`: Brand and accent color (default `#6366f1`).

## Why is this useful?

This pattern is common in dashboard layouts and admin panels where screen real estate is valuable. By keeping icons visible in the collapsed state, users retain quick access to navigation while gaining more space for content. The CSS transitions are compositor-friendly and respect the user's reduced-motion preference.
