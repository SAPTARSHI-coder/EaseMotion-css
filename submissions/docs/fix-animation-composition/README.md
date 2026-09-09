# Bug Fix: Animation Composition

Fixes Issue #77530: Applying multiple EaseMotion classes on the same element causes only the last animation to play.

### What does this do?
Refactors the core animation utility classes to set `animation-name`, `animation-duration`, and `animation-timing-function` individually rather than using the `animation` shorthand.

### How is it used?
You can now apply multiple animation classes to a single element, and they will compose smoothly without completely overwriting each other's configurations:

```html
<div class="ease-fade-in ease-slide-up">
  This element will both fade in and slide up.
</div>
```

### Why is it useful?
Using the `animation` shorthand in utility classes overwrites all animation properties (including name, duration, and fill-mode) when multiple classes are combined. Setting individual properties enables proper composition of animation effects, allowing developers to combine EaseMotion utilities seamlessly.
