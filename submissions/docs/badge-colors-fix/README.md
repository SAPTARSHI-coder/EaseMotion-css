# Badge Colors Fix (Issue #46213)

1. What does this do?
It fixes the hardcoded hex colors in the `.ease-badge-info` and `.ease-badge-warning` utility classes by replacing them with CSS variables for proper dark mode and theme support.

2. How is it used?
```html
<span class="ease-badge-info">Info Badge</span>
<span class="ease-badge-warning">Warning Badge</span>
```

3. Why is it useful?
It ensures badges respond correctly to theme variable overrides and dark mode, bringing them in line with the rest of the EaseMotion CSS framework's design token system.
