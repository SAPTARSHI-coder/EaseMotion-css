# Dark Mode Data Theme

1. What does this do? Adds a `[data-theme="dark"]` CSS selector that lets users programmatically toggle dark mode by setting an attribute on `<html>`, complementing the existing `@media (prefers-color-scheme: dark)` automatic detection.

2. How is it used? Set `data-theme="dark"` on the `<html>` element to activate dark mode, or `data-theme="light"` to force light mode. A JavaScript toggle button with localStorage persistence is included in the demo.

3. Why is it useful? Many sites need a manual theme toggle (e.g., a sun/moon button) rather than relying solely on OS preference. The `[data-theme]` selector gives developers a standard hook for JS-driven theme switching.
