# Animated Fade Out Down (`ease-fade-out-down`)

A self-contained exit animation utility that translates elements downward while fading them out to `opacity: 0`.

---

## 1. What does this do?
It provides an exit animation utility (`ease-fade-out-down`) that transitions elements from fully visible to completely faded out (`opacity: 1` to `opacity: 0`) while translating them downward using standard ease-in timing (`cubic-bezier(0.4, 0, 1, 1)`).

---

## 2. How is it used?

Apply the base class `.ease-fade-out-down` to the element you want to animate out:

```html
<div class="toast-notification ease-fade-out-down">
  🚀 System deployment complete.
</div>
```

### Configurable Modifiers

You can combine the base class with speed and distance modifier classes:

- **Speed Modifiers**:
  - `.exit-fast`: Speeds up the exit transition to `0.2s`.
  - `.exit-slow`: Slows down the exit transition to `0.6s`.
  - *Default*: `0.35s`

- **Distance Modifiers**:
  - `.exit-translate-short`: Translates downward by `10px` (ideal for small tooltips and inline notifications).
  - `.exit-translate-long`: Translates downward by `50px` (ideal for larger drawers, banners, or card dismissals).
  - *Default*: `20px`

```html
<!-- Example of a fast-exiting toast with a short translation distance -->
<div class="toast-notification ease-fade-out-down exit-fast exit-translate-short">
  Dismissing toast...
</div>
```

### Custom Styling with CSS Variables
You can also override the defaults dynamically via inline styles or custom selectors using the following CSS custom properties:

- `--ease-fade-out-down-translate` (Default: `20px`)
- `--ease-fade-out-down-duration` (Default: `0.35s`)
- `--ease-fade-out-down-easing` (Default: `cubic-bezier(0.4, 0, 1, 1)`)

```html
<!-- Example of custom exit settings using inline variables -->
<div class="custom-card ease-fade-out-down" style="--ease-fade-out-down-translate: 40px; --ease-fade-out-down-duration: 0.5s;">
  Customized exit element.
</div>
```

---

## 3. Why is it useful?

- **Zero JavaScript**: The animation is fully CSS-driven, allowing for performant and clean exit animations without relying on scripting.
- **Highly Customizable**: Through helper classes and CSS Custom Properties, developers can easily customize duration, distance, and easing functions.
- **Accessibility Native**: Includes built-in support for `prefers-reduced-motion: reduce`, ensuring that the animation is safely disabled for users who prefer reduced motion.
