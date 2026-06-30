# Gradient Text Animation Documentation

### What does this do?
Provides a complete, self-contained example and documentation for the `.ease-gradient-text-animated` utility class, which applies a rotating multi-color gradient animation to any text element.

### How is it used?
Apply the class to any text element:

```html
<h1 class="ease-gradient-text-animated">Animated Gradient Heading</h1>
```

The animation uses a linear gradient (135°) cycling through primary and secondary theme colors with a 3-second infinite loop. Customize by overriding CSS variables:

- **Speed**: Change the animation duration (e.g. `5s` instead of `3s`).
- **Colors**: Redefine `--ease-color-primary` and `--ease-color-secondary`.
- **Reduced Motion**: Animation is automatically disabled when the user has `prefers-reduced-motion: reduce` enabled, falling back to a static gradient.

Open `demo.html` directly in a browser to see the effect.

### Why is it useful?
The `.ease-gradient-text-animated` utility is one of the most visually striking classes in EaseMotion CSS, but it currently lacks dedicated documentation. This submission provides a ready-to-integrate demo and explanation that the maintainer can promote to the official docs site, helping new users discover and use the utility correctly.
