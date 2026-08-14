# Sidebar Animations Link

## 1. What does this do?

Adds a dedicated, scroll-spy-tracked sidebar navigation link for the main "Animations" section to improve accessibility and ease of navigation across the documentation.

## 2. How is it used?

Include a link pointing to the `#animations` section inside the `.sidebar-nav` container in the sidebar:

```html
<div class="sidebar-group">
  <div class="sidebar-group-label">Core</div>
  <ul class="sidebar-nav">
    <li><a href="#variables">Variables</a></li>
    <li><a href="#dark-mode">Dark Mode</a></li>
    <li><a href="#utilities">Utilities</a></li>
    <li><a href="#animations">Animations</a></li>
    <li><a href="animation-combo.html">Animation Builder</a></li>
  </ul>
</div>
```

## 3. Why is it useful?

While EaseMotion CSS provides a builder tool, users primarily visit the docs to view available animations and class names. A top-level sidebar link to the core Animations section prevents tedious manual scrolling, ensuring a more intuitive, responsive, and structured browsing experience that aligns with EaseMotion's focus on user accessibility.
