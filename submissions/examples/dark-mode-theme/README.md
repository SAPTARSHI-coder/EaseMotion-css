1. What does this do?

This submission demonstrates how to implement dark mode for EaseMotion CSS by overriding shared `--ease-*` design tokens with `@media (prefers-color-scheme: dark)` and a manual `data-theme="dark"` toggle.

2. How is it used?

Add a theme attribute to the page and override the core variables:

```html
<html data-theme="dark">
  <body>
    <button class="theme-toggle">Toggle dark mode</button>
    <div class="theme-card">...</div>
  </body>
</html>
```

3. Why is it useful?

Dark mode is a modern UI requirement, and EaseMotion's variable system makes it easy to swap theme colors globally without changing utility or component rules.
