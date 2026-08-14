# Theme Toggle Persistence Fix

## What does this do?
Persists the user's dark/light theme choice to `localStorage` so the selected theme survives page refreshes — and restores it on load with zero flash of the wrong theme.

## How is it used?

**Step 1 — Add the restore script as the very first thing inside `<head>` (before any CSS):**

```html
<head>
  <!-- Must be first — runs before CSS to prevent flash of wrong theme -->
  <script>
    (function () {
      var saved = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', saved);
    })();
  </script>
  <!-- rest of <head> … -->
```

**Step 2 — In the toggle click handler, write the new theme to `localStorage`:**

```js
themeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // ← ADD THIS LINE
});
```

That's the complete fix — two places, two lines.

## Why is it useful?

EaseMotion CSS already supports full dark/light theming via the `data-theme` attribute and CSS custom properties. The docs site has a working toggle button — but the choice is never saved. Every page refresh silently resets back to dark mode, which is jarring for users who prefer light mode.

This fix closes the loop:

- **No flash of wrong theme** — the restore script is synchronous and runs before any stylesheet is parsed, so the correct theme is applied before a single pixel renders.
- **Zero dependencies** — uses only `localStorage` and `setAttribute`, both universally supported.
- **Respects the existing default** — if no preference is saved, dark mode is used (current behavior preserved).
- **Fits EaseMotion's "zero dependencies, no build step" philosophy** — pure vanilla JS, no frameworks, no external libraries.
