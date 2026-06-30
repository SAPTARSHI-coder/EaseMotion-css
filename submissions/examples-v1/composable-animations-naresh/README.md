# Composable Animations (Fix for overlapping classes)

## What does this do?

Refactors shorthand animation utility declarations to individual sub-properties coupled with a CSS custom property pipeline, allowing developers to combine multiple animations (like fade and slide) simultaneously on a single element.

## How is it used?

Apply multiple animation classes from different categories to the same element:

```html
<div class="ease-fade-in ease-slide-up">
  I fade in and slide up simultaneously!
</div>
```

## Why is it useful?

It prevents CSS classes from silently overriding each other's animation configuration (such as duration, delay, or keyframe settings), allowing native multi-animation composition directly in EaseMotion without needing custom combined keyframes or wrapper nesting.
