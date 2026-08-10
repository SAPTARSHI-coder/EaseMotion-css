# Status Indicator Chips

1. What does this do?

Provides a set of stylish status chips for dashboards, team directories, and monitoring interfaces. Each chip includes a small glowing status dot and hover lift for a polished SaaS UI feel.

2. How is it used?

Add the stylesheet and use the `status-chip` class with a variant class.

Example usage:

```html
<link rel="stylesheet" href="style.css">
<span class="status-chip online">
  <span class="status-dot"></span>
  Online
</span>
```

Other variants:

```html
<span class="status-chip offline">
  <span class="status-dot"></span>
  Offline
</span>
<span class="status-chip away">
  <span class="status-dot"></span>
  Away
</span>
<span class="status-chip busy">
  <span class="status-dot"></span>
  Busy
</span>
<span class="status-chip recording">
  <span class="status-dot"></span>
  Recording
</span>
<span class="status-chip success">
  <span class="status-dot"></span>
  Success
</span>
<span class="status-chip warning">
  <span class="status-dot"></span>
  Warning
</span>
<span class="status-chip gradient">
  <span class="status-dot"></span>
  Gradient
</span>
<span class="status-chip neon">
  <span class="status-dot"></span>
  Neon
</span>
```

3. Why is it useful?

- Ideal for modern dashboards, team overviews, and status panels.
- Pure HTML and CSS implementation with no external dependencies.
- Provides crisp, responsive chips with strong visual hierarchy and hover interaction.
