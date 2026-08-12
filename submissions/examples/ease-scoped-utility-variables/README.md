# Scoped Utility Variables (`ease-scoped-utility-variables`)

A demonstration of resolving global cascade pollution by migrating static utility values into locally scoped CSS Custom Properties.

## 🚀 Features & EaseMotion Showcase

- **Defensive Scoping**: When building complex layouts, global utilities (like hardcoded `animation-duration: 150ms`) can easily leak and forcefully overwrite nested child components.
- **Dynamic Fallbacks**: By refactoring utilities to instead output `--ease-local-duration: 150ms`, components can consume these variables using CSS `var()` fallbacks (`var(--ease-local-duration, 0.3s)`).
- **Cascade Pollution Prevention**: This pattern ensures that a child component will *only* adopt the fast/slow timing if the utility class is applied directly to it, ignoring inherited pollution from a parent element.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To safely consume these utility variables in a component:
```css
.my-component {
  /* It will be 0.3s by default, unless .ease-duration-fast is applied */
  transition: all var(--ease-local-duration, 0.3s) ease;
}
