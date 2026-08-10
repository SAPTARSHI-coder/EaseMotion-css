# CSS Relative Color Syntax (ps)

Dynamic UI cards that derive all their contextual colors (backgrounds, borders, hovers, text highlights) from a single `--base-color` variable using the modern CSS Relative Color Syntax.

## What does this do?

This component demonstrates how a single base color variable can dynamically generate an entire color scheme for a UI element (like a pricing card) using native CSS relative color syntax (`rgb(from ...)` and `hsl(from ...)`).

## How is it used?

```html
<div class="color-card-ps blue-ps">
  <!-- Content -->
</div>
```

```css
.color-card-ps {
  --surface-bg: rgb(from var(--base-color) r g b / 10%);
  --border-color: rgb(from var(--base-color) r g b / 25%);
  --btn-hover: hsl(from var(--base-color) h s calc(l - 10%));
}

.color-card-ps.blue-ps {
  --base-color: #3b82f6; 
}
```

## Why is it useful?

It significantly reduces the number of color variables needed in a design system. By defining just one base color, you can automatically generate accessible background tints, hover states, and border shades without requiring a CSS preprocessor like SCSS or JavaScript color manipulation libraries. This perfectly aligns with EaseMotion's philosophy of leveraging modern, pure CSS features for robust and maintainable UI development.
