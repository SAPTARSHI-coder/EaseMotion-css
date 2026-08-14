# Ease Dynamic Theme (`ease-dynamic-theme`)

## 1. What does this do?
`ease-dynamic-theme` demonstrates how a single CSS base variable (`--ease-primary`) can dynamically derive an entire harmonious UI color palette—including hover states, subtle badge backgrounds, border accents, muted text shades, and drop shadows—in real time using native CSS `color-mix()`.

## 2. How is it used?
Define your primary base color in `:root`, then derive related shades using `color-mix(in srgb, ...)`:

```css
:root {
  --ease-primary: #3b82f6;
  --ease-surface: #1e293b;
  --ease-text: #f8fafc;
}

:root {
  --ease-primary-hover: color-mix(in srgb, var(--ease-primary) 80%, black);
  --ease-primary-soft: color-mix(in srgb, var(--ease-primary) 15%, transparent);
  --ease-primary-border: color-mix(in srgb, var(--ease-primary) 40%, transparent);
  --ease-primary-muted: color-mix(in srgb, var(--ease-primary) 70%, #94a3b8);
}
```

Whenever `--ease-primary` is updated (e.g., via JavaScript or theme toggles), all derived colors recalculate automatically without extra scripting.

## 3. Why is it useful?
Using native CSS `color-mix()` permanently eliminates the need for Sass preprocessors, build-time color functions, or external JavaScript color manipulation libraries (like `chroma-js` or `tinycolor2`) to construct robust dynamic theme systems.
