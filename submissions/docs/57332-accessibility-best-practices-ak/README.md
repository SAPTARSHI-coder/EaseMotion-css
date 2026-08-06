# Accessibility Best Practices

This documentation explains how to build accessible and user-friendly interfaces using EaseMotion CSS.

## Best Practices

- Respect the `prefers-reduced-motion` media query.
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.).
- Maintain sufficient color contrast.
- Ensure keyboard accessibility.
- Use meaningful ARIA labels where required.
- Avoid excessive or distracting animations.

## Example

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Why It Matters

Following accessibility best practices improves usability and creates a better experience for all users, including those using assistive technologies.