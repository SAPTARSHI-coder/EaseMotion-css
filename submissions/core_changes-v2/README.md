# Theme Toggle Persistence with localStorage

## What does this do?
Persists the user's dark/light theme preference across page reloads using `localStorage`. On page load, an inline script checks `localStorage` before the page renders to prevent Flash of Unstyled Content (FOUC), falling back to `prefers-color-scheme` if no saved preference exists.

## How is it used?
Add this inline script synchronously in `<head>` before any CSS that depends on `data-theme`:
```html
<script>
  (function() {
    var key = "easemotion-theme";
    var saved = localStorage.getItem(key);
    var theme = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  })();
</script>
```

Toggle button handler:
```js
document.querySelector(".ease-theme-toggle").addEventListener("click", function() {
  var html = document.documentElement;
  var current = html.getAttribute("data-theme") || "light";
  var next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("easemotion-theme", next);
});
```

## Why is it useful?
Without persistence, users must toggle the theme on every page visit, creating poor UX. This fix:
- Saves preference to `localStorage` on every toggle
- Reads saved preference before render (no FOUC)
- Falls back to system `prefers-color-scheme` if no saved preference
- Updates toggle button ARIA label for accessibility
- Requires no external dependencies

Fixes #12448
