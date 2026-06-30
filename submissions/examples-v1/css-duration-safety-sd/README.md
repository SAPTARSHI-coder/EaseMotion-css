# CSS Duration Safety

## What does this do?

This demo shows how to safely accept a user-provided animation duration before writing it into a CSS custom property.

## How is it used?

```html
<div class="preview-card" style="--ease-duration: 1.2s">
  <span class="pulse-dot"></span>
  <p>Animated content</p>
</div>
```

The JavaScript validates input with a strict time-value allowlist before calling:

```js
previewCard.style.setProperty("--ease-duration", safeDuration);
```

## Why is it useful?

CSS custom properties are flexible, but user-provided values should not be copied directly into style declarations. This pattern keeps motion customization safe by accepting only bounded `ms` and `s` duration values and falling back when unsafe input is entered.
