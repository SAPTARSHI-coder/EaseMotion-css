# Animation Delay Specificity Guide

## 1. What does this do?

This submission serves as a developer guide documenting the CSS cascade override issue where utility delay classes (such as `.ease-delay-300` or `.ease-delay-500`) are ignored on Firefox 106+ when combined with component shorthand animations, and details the specificity fix.

## 2. Why does the delay get ignored?

In CSS, shorthand properties like `animation` (or `background`, `margin`, etc.) define **all** sub-properties at once. If any sub-properties (such as `animation-delay`) are omitted from the shorthand, they are automatically reset to their initial/default value (which is `0s` for delay).

If a custom component class (such as a card or button) that utilizes the `animation` shorthand is declared **after** the utility delay classes in the CSS stylesheet cascade, the shorthand in the component class overrides the utility class delay setting, resetting it to `0s`.

---

## 3. The Fix: Specificity Enforcement

To ensure utility delay classes always take precedence and are not overridden by later-declared shorthand properties, define the utility classes with `!important`:

### CSS Implementation

```css
/* Enforces delay priorities over shorthand property resets */
.ease-delay-75 {
  animation-delay: 75ms !important;
}
.ease-delay-100 {
  animation-delay: 100ms !important;
}
.ease-delay-150 {
  animation-delay: 150ms !important;
}
.ease-delay-200 {
  animation-delay: 200ms !important;
}
.ease-delay-300 {
  animation-delay: 300ms !important;
}
.ease-delay-500 {
  animation-delay: 500ms !important;
}
.ease-delay-1000 {
  animation-delay: 1000ms !important;
}
```

Using `!important` ensures that the `animation-delay` property is prioritized by the browser cascade engine regardless of where component classes are imported.

---

## 4. Why is it useful?

Staggered animations are critical for smooth page loading, grid reveals, and lists. Enforcing animation-delay specificity ensures that layouts render identically across all browser engines (Chrome, Edge, and Firefox), improving framework stability and avoiding silent visual failures.
