# Fix: Dark Mode Heading Readability

1. **What does this do?** Fixes unreadable headings in dark mode by replacing `--ease-color-neutral-900` with the semantic `--ease-color-text` variable that updates correctly in both light and dark modes.

2. **How is it used?**
```html
   <h1 class="ease-h1">Heading H1</h1>
   <h2 class="ease-h2">Heading H2</h2>
   <h3 class="ease-h3">Heading H3</h3>

   <!-- Enable dark mode -->
   <html data-theme="dark">
```

3. **Why is it useful?** Ensures proper contrast and readability in dark mode for all heading levels — improves accessibility compliance and maintains consistent theming across light and dark modes.