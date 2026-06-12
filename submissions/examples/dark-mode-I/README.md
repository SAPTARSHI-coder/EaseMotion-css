# Dark Mode CSS Variables

Automatic dark mode support using CSS custom properties and prefers-color-scheme media query.

## Files

- demo.html - Interactive demo
- style.css - Theme variables and styles
- README.md - Documentation

## Implementation

```css
/* Light mode variables (default) */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  --primary-color: #667eea;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --text-primary: #f1f5f9;
    --primary-color: #818cf8;
  }
}
```
