# Animated Gradient Border

**What does this do?**
Creates a rotating conic-gradient border around cards, buttons, or any UI element using `@property --ease-angle` while keeping the inner background untouched.

**How is it used?**
Apply the `.ease-gradient-border` utility class and optionally customize using the custom properties:

```html
<article class="ease-gradient-border" style="--ease-gb-width: 4px; --ease-gb-speed: 6s;">
  <h2>Gradient border</h2>
  <p>The border rotates continuously without JavaScript.</p>
</article>
```

### Customization Options

You can override these properties on the element style:
- `--ease-gb-width`: Width of the border (default: `3px`)
- `--ease-gb-radius`: Border radius (default: `18px`)
- `--ease-gb-speed`: Rotation duration (default: `6s`)
- `--ease-gb-color-a`: First gradient stop color (default: `#2dd4bf`)
- `--ease-gb-color-b`: Second gradient stop color (default: `#3b82f6`)
- `--ease-gb-color-c`: Third gradient stop color (default: `#f43f5e`)
- `--ease-gb-fallback`: Fallback solid border color for unsupported browsers (default: `#3b82f6`)

**Why is it useful?**
Animated borders are a compact way to call attention to featured content, active states, and premium actions. This fits EaseMotion CSS by standardizing the effect into a readable utility with configurable properties while preserving a no-build, dependency-free workflow.
