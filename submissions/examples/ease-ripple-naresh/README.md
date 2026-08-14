# EaseMotion CSS Material Ripple Animation Component

A lightweight, hardware-accelerated, pure CSS Material Design-style ripple click effect. It relies on the `:active` pseudo-class and a pseudo-element animation to create a clean, expanding ripple disk on buttons, links, or any clickable block with zero JavaScript overhead.

---

## Class Reference

- `.ease-ripple`: Apply this class to any clickable element (e.g. `<button>`, `<a>`, `<li>`). It configures the relative positioning context, clips overflowing borders, and adds the expanding ripple animation on active click states.

---

## Customization (CSS Variables)

Customize the ripple transition behavior inline or in stylesheets using these custom properties:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-ripple-color` | The background color of the expanding ripple circle | `rgba(255, 255, 255, 0.35)` |
| `--ease-ripple-duration` | The duration of the expanding ripple animation | `0.5s` |

---

## How to Use

### 1. Basic HTML Structure
Simply add the `.ease-ripple` class directly to your clickable element:

```html
<button class="ease-ripple">
  Click Me
</button>

<a href="#" class="ease-ripple">
  Link Action
</a>
```

### 2. Custom Theming Example
Define custom colors and durations inline using the CSS variables:

```html
<!-- Dark ripple for light background buttons -->
<button class="ease-ripple" style="--ease-ripple-color: rgba(0, 0, 0, 0.15); --ease-ripple-duration: 0.6s;">
  Submit Card
</button>

<!-- Colored ripple for brand matches -->
<button class="ease-ripple" style="--ease-ripple-color: rgba(167, 139, 250, 0.4); --ease-ripple-duration: 0.4s;">
  Purchase
</button>
```

---

## Accessibility & Performance
- **Reduced Motion**: Respects system preferences and disables the scale ripple transition if `prefers-reduced-motion: reduce` is detected, instantly switching background overlays instead.
- **Keyboard Navigation**: Standard focus rings and outline selectors remain untouched, ensuring high visual feedback for keyboard and screen reader actions.
