# Ease Theme Aware Button (CSS Style Queries)

## 1. What does this do?
This component demonstrates how a button adapts its own UI based on the CSS custom properties of its parent container using `@container style()`. Without requiring extra CSS variant classes or JavaScript code, the component styling automatically reacts to its surrounding context.

## 2. How is it used?
Define custom properties on the parent container element:

```css
.dark-section {
  container-name: theme-container;
  --bg-context: dark;
}

.light-section {
  container-name: theme-container;
  --bg-context: light;
}
```

Then query the parent's custom property value using `@container style()`:

```css
@container style(--bg-context: dark) {
  .ease-smart-btn {
    background: #3b82f6;
    color: white;
    border: 2px solid transparent;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  }
  .ease-smart-btn:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }
}
```

## 3. Why is it useful?
It eliminates the need for JavaScript props like `<Button variant="dark">` or complex descendant CSS rules like `.dark-section .btn`, keeping component styles entirely decoupled from DOM placement.
