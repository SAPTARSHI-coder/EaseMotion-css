# Theme Toggle & Design Token Swapper

**Category:** Theme & Mode Utility  
**Type:** Pure CSS + Micro-JS  
**Folder:** `submissions/examples/theme-toggle/`

---

## Questions

### 1. What does this do?

This utility adds a premium, smooth-transitioning Dark and Light theme toggle that dynamically updates EaseMotion CSS design token parameters across an entire page.

### 2. How is it used?

Theme styles are declared inside standard CSS variables, and the system matches them by setting a `data-theme` attribute on the `<html>` or `<body>` element:

```html
<!-- HTML Structure -->
<html data-theme="dark">
  <body>
    <!-- Theme Toggle Button -->
    <button id="theme-toggle" class="theme-toggle-btn">
      <svg class="sun-icon">...</svg>
      <svg class="moon-icon">...</svg>
    </button>
  </body>
</html>
```

```javascript
// Toggle state controller
themeToggleBtn.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "dark"
      : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);
});
```

### 3. Why is it useful?

It fits EaseMotion CSS's philosophy because **it requires zero complex configurations or specificity wars**. Since EaseMotion components rely directly on standard custom property design tokens (e.g. `--ease-color-bg`, `--ease-color-surface`), swapping properties on `:root` instantly updates every element on the page naturally and cleanly, while preserving human-readable class setups.
