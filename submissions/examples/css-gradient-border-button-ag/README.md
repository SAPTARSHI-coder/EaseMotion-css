# CSS Gradient Border Button

1. **What does this do?**  
   Creates a button with an animated rotating gradient border and ambient glow using pure CSS without JavaScript.

2. **How is it used?**  
   Apply the `.gradient-border-btn` class to any `<button>` or `<a>` element.

```html
<button type="button" class="gradient-border-btn">
  Get Started
</button>
```

3. **Why is it useful?**  
   It provides a modern, eye-catching interactive button effect with zero JavaScript dependencies, full keyboard accessibility, and respect for user reduced-motion preferences.

---

## Features

- **Pure CSS Animation**: Driven by modern CSS `@property` and `conic-gradient()` for smooth 360° continuous rotation.
- **Ambient Glow**: Includes a subtle blurred background pseudo-element that enhances hover depth.
- **Accessible Design**: Uses native `<button>` semantics, clear `:focus-visible` focus rings, and readable color contrast.
- **Responsive**: Adjusts seamlessly across all device screen sizes.
- **Reduced Motion Support**: Automatically disables continuous animation when `@media (prefers-reduced-motion: reduce)` is active.

---

## Variations & Modifiers

| Class Modifier | Description |
|---|---|
| `.gradient-border-btn` | Base button with default indigo/violet/pink rotating gradient border |
| `.gradient-border-btn--sunset` | Warm amber/rose/purple gradient color palette |
| `.gradient-border-btn--pill` | Fully rounded pill shape button (`border-radius: 9999px`) |
| `.gradient-border-btn--light` | High-contrast light surface button background (`#ffffff`) |

---

## Customization

The component can be customized via standard CSS properties or modifying the `@property --gradient-angle` duration:

```css
/* Adjust rotation speed */
.gradient-border-btn {
  animation-duration: 6s; /* Slower 6s spin */
}
```
