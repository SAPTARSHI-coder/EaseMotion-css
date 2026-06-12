# Fix: Replace `transition: all` in Hover Classes

## What does this do?

Audits all `ease-hover-*` classes in `core/animations.css` and ensures no `transition: all` declarations exist — replacing them with specific property transitions for better performance and to avoid overriding user-defined transitions.

## Audit Results

After a full audit of `core/animations.css`, `core/base.css`, `components/buttons.css`, and `components/cards.css`, **no instances of `transition: all` were found in the framework core**. All hover classes already use specific property transitions:

| Class | Transition Properties |
|-------|----------------------|
| `.ease-hover-grow` | `transform` |
| `.ease-hover-shrink` | `transform` |
| `.ease-hover-glow` | `box-shadow` |
| `.ease-hover-lift` | `transform, box-shadow` |
| `.ease-hover-underline::after` | `width` |
| `.ease-card-lift` | `transform, box-shadow` |
| `.ease-hover-shimmer::before` | `left` |
| `.ease-hover-morph-card` | `border-radius, transform` |

## Submissions with `transition: all` (for maintainer reference)

The following submission files still use `transition: all` and could be updated when integrated:

- `submissions/examples/button-gradient-animation/style.css` (3 instances)
- `submissions/examples/spotlight-soft/style.css` (1 instance)
- `submissions/examples/interactive-docs/style.css` (1 instance)

## How to use (pattern reference)

```css
/* ❌ Bad — overrides user transitions, triggers layout on all properties */
.ease-hover-grow {
  transition: all 0.3s ease;
}

/* ✅ Good — only transitions the properties that actually change */
.ease-hover-grow {
  transition: transform var(--ease-speed-medium) var(--ease-ease-bounce);
  will-change: transform;
}
```

## Why is it useful?

- `transition: all` is a performance anti-pattern — it forces the browser to check every animatable property on every frame
- It overrides any user-defined transitions on the same element
- Specific property transitions are more predictable and composable
- This aligns with EaseMotion CSS's philosophy of clean, intentional design
