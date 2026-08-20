# Hover Rotate Effect

> **Track:** Standard (HTML/CSS Submission)  
> **Submission Directory:** `submissions/examples/hover-rotate-effect-em/`

---

## 1. What does this do?
The **Hover Rotate Effect** adds a smooth, subtle rotation micro-interaction to UI elements (such as cards, buttons, badges, and images) when a user hovers their cursor over them or focuses via keyboard.

---

## 2. How is it used?

Apply the `.hover-rotate` class (or one of its direction/intensity variants) directly to any HTML element:

```html
<!-- Standard Clockwise Rotation (+3deg) -->
<div class="card hover-rotate">
  <h3>Interactive Card</h3>
  <p>Hover over this card to see a smooth clockwise tilt.</p>
</div>

<!-- Counter-Clockwise Rotation (-3deg) -->
<button class="btn hover-rotate-left">
  Click Me
</button>

<!-- Ultra-subtle Variant (+1.5deg) -->
<span class="badge hover-rotate-sm">
  New Feature
</span>

<!-- Prominent Variant (+6deg) -->
<div class="card hover-rotate-lg">
  <h3>Prominent Tilt Card</h3>
</div>

<!-- 3D Perspective Rotation -->
<div class="card hover-rotate-3d">
  <h3>Spatial 3D Tilt Card</h3>
</div>
```

---

## 3. Why is it useful?

A lightweight hover rotation effect gives developers another simple, composable micro-interaction without writing custom CSS transforms. 

It fits EaseMotion CSS because it is:
- **Human-readable & Intuitive:** Class names describe exact behavior (`.hover-rotate`, `.hover-rotate-left`, `.hover-rotate-sm`, `.hover-rotate-lg`).
- **Animation-First & Hardware-Accelerated:** Utilizes CSS `transform` and `will-change` properties for silky 60fps rendering without layout reflows.
- **Composable:** Seamlessly combines with existing card, button, and flex/grid container utilities.
- **Accessible (A11y):** Includes built-in support for `@media (prefers-reduced-motion: reduce)` to respect user motion preferences.

---

## Class Variants Reference

| Utility Class | Description | Default Transform |
|---------------|-------------|-------------------|
| `.hover-rotate` | Standard clockwise hover rotation | `rotate(3deg) scale(1.02)` |
| `.hover-rotate-left` | Counter-clockwise hover rotation | `rotate(-3deg) scale(1.02)` |
| `.hover-rotate-sm` | Subtle, minimal rotation | `rotate(1.5deg)` |
| `.hover-rotate-lg` | Prominent hover rotation | `rotate(6deg) scale(1.04)` |
| `.hover-rotate-3d` | 3D perspective tilt & rotation | `perspective(600px) rotateY(8deg) rotateX(-4deg) scale(1.03)` |

---

## Files Included

- `demo.html` — Self-contained interactive showcase containing cards, buttons, badges, and media components.
- `style.css` — Core utility classes and demo presentation styles.
- `README.md` — Feature description, usage documentation, and class reference.
