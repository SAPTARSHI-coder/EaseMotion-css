# Animated Chip Dismiss

1. What does this do?

Provides a collection of premium, dismissible chip components using only HTML and CSS. The chips include hover lift, subtle button feedback, and distinct visual variants for default, gradient, neon, success, and danger states.

2. How is it used?

Link the stylesheet and use the `chip` base class with optional modifier classes.

Example markup:

```html
<link rel="stylesheet" href="style.css" />
<label class="chip">
  <span>Design</span>
  <button class="chip-close" aria-label="Remove chip">×</button>
</label>
```

Gradient variant:

```html
<label class="chip chip-gradient">
  <span>React</span>
  <button class="chip-close" aria-label="Remove chip">×</button>
</label>
```

Neon variant:

```html
<label class="chip chip-neon">
  <span>Bug</span>
  <button class="chip-close" aria-label="Remove chip">×</button>
</label>
```

3. Why is it useful?

- Ideal for SaaS dashboards, filter UIs, tags, and selected state displays.
- Pure HTML + CSS implementation means no JavaScript or external dependencies.
- The dark theme demo and polished styling fit modern admin panels and product interfaces.

Variants included:

- Default Chip
- Gradient Chip
- Neon Chip
- Success Chip
- Danger Chip
