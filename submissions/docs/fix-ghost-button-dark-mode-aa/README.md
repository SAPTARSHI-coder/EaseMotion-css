# What does it do?

It solves the visibility bug of the ghost button component (`.ease-btn-ghost`) where the text remains dark gray in dark mode, making it hard to see. It also ensures it behaves correctly when the theme is explicitly toggled to light mode.

# How is it used?

Simply define CSS variables for the color and hover states on `.ease-btn-ghost`, and override them in prefers-color-scheme/data-theme media queries:

```css
.ease-btn-ghost {
  --ease-btn-ghost-color: var(--ease-color-neutral-700, #334155);
  --ease-btn-ghost-hover-bg: var(--ease-color-neutral-100, #f1f5f9);
  --ease-btn-ghost-hover-color: var(--ease-color-neutral-900, #0f172a);

  background-color: transparent;
  color: var(--ease-btn-ghost-color);
  border-color: transparent;
}

@media (prefers-color-scheme: dark) {
  .ease-btn-ghost {
    --ease-btn-ghost-color: #ffffff;
    --ease-btn-ghost-hover-bg: rgba(255, 255, 255, 0.1);
    --ease-btn-ghost-hover-color: #ffffff;
  }
}
```

# Why is it useful?

It ensures that the ghost button is perfectly visible and premium in both dark mode and light mode, adhering to standard theme settings and preventing contrast/accessibility issues.
