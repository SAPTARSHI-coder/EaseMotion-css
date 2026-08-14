# CSS text-decoration Animation Collection

Native CSS underline animation using `text-decoration-thickness`, `text-underline-offset`, and `text-decoration-color` — all three properties are animatable without pseudo-elements or transforms.

## Variants

| Variant | Property animated | Trigger |
|---------|-------------------|---------|
| Thickness hover | `text-decoration-thickness` | `:hover` |
| Thickness pulse | `text-decoration-thickness` | `@keyframes` |
| Offset float | `text-underline-offset` | `@keyframes` |
| Offset spring | `text-underline-offset` | `:hover` |
| Color cycle | `text-decoration-color` | `@keyframes` |
| Color reveal | `text-decoration-color` | `:hover` |
| Wavy pulse | `text-decoration-thickness` + `text-underline-offset` | `@keyframes` |
| Wavy hover | `text-decoration-thickness` + `text-underline-offset` | `:hover` |

## Key technique

```css
.ease-underline-thickness {
  text-decoration: underline;
  text-decoration-color: #6c63ff;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition:
    text-decoration-thickness 0.3s ease,
    text-underline-offset 0.3s ease;
}

.ease-underline-thickness:hover {
  text-decoration-thickness: 8px;
  text-underline-offset: 6px;
}

@keyframes ease-underline-pulse {
  0%, 100% { text-decoration-thickness: 2px; }
  50%       { text-decoration-thickness: 6px; }
}
```

## Offset spring

A spring-style overshoot on `text-underline-offset` using a custom bezier:

```css
.ease-offset-hover {
  text-underline-offset: 4px;
  transition: text-underline-offset 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.ease-offset-hover:hover {
  text-underline-offset: 14px;
}
```

## Browser support

`text-decoration-thickness` and `text-underline-offset` are supported in all modern browsers (Chrome 89+, Firefox 70+, Safari 12.1+). Transitions and `@keyframes` on these properties work without prefixes.

## Accessibility

`prefers-reduced-motion: reduce` disables all animations and transitions. The underline decoration itself remains visible at rest.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-underline-pulse,
  .ease-underline-float,
  .ease-color-cycle,
  .ease-wavy-pulse { animation: none; }

  .ease-underline-thickness,
  .ease-offset-hover,
  .ease-color-hover,
  .ease-wavy-hover { transition: none; }
}
```
