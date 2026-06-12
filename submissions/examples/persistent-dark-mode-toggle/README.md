# Persistent Dark Mode Toggle

## What does this do?

Adds a visually polished dark mode toggle that persists the user's theme preference in `localStorage` and maps colors via CSS custom properties.

## How is it used?

Include the theme-locking script in your `<head>` to prevent unstyled flashes:

```javascript
(function () {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
})();
```

Use the `.dark` selector in your CSS to override your global variables:

```css
:root {
  --page-bg: #f8fafc;
  --text-primary: #0f172a;
}

:root.dark {
  --page-bg: #0f172a;
  --text-primary: #f8fafc;
}
```

## Why is it useful?

It fits EaseMotion CSS's philosophy of lightweight, high-impact utilities by providing a standardized way to handle theme state transitions. It improves accessibility and reduces eye strain for dashboard users by allowing them to work comfortably in low-light environments without losing their preference on page reload.
