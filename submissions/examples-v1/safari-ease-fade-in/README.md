# Safari-Compatible Ease Fade In

## What does this do?

Demonstrates a Safari-compatible fade-in animation by adding the `-webkit-animation` property and `@-webkit-keyframes` alongside the standard CSS animation declarations.

This ensures the animation can run correctly on older Safari versions while remaining fully compatible with modern browsers.

---

## How is it used?

Apply the `ease-fade-in` class to any element that should smoothly fade into view.

```html
<div class="ease-fade-in">This content should fade in on Safari.</div>
```

The animation definition:

```css
.ease-fade-in {
  opacity: 0;
  -webkit-animation: fade-in 0.5s ease forwards;
  animation: fade-in 0.5s ease forwards;
}

@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

---

## Why is it useful?

CSS animations generally work across modern browsers, but older Safari versions may require WebKit-prefixed animation declarations to render correctly.

Adding the prefixed properties provides a lightweight compatibility layer with no JavaScript, no additional dependencies, and no impact on browsers that already support the standard syntax.

This example serves as a reference implementation for ensuring fade-in animations remain functional across Safari, Chrome, Firefox, Edge, and other modern browsers.
