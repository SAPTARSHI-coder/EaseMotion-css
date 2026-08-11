# Micro-Interaction Button Ripple Effect Mixins

> SCSS utility mixin module for EaseMotion CSS — adds smooth, customizable Material-style ripple click animations to any button or interactive element.

**Issue:** [#28404](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/28404)  
**Track:** SCSS Integration  
**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)

---

## What does this do?

This SCSS partial provides a set of reusable **mixins** that add a tactile, animated **ripple effect** to any clickable element. The ripple expands outward from the elements center on `:active`, giving immediate visual feedback to the user — a hallmark of polished micro-interactions used in Material Design and modern UI systems.

It is:

- **Lightweight** — uses only a single `::after` pseudo-element and one shared `@keyframes`
- **Configurable** — color, duration, easing, scale, and size are all parameterized
- **Accessible** — automatically respects `prefers-reduced-motion`
- **Composable** — three preset variants (default, centered/soft, fast) plus a fully customizable base mixin
- **Dependency-free** — no JavaScript required

---

## Installation

Copy the file `_micro-interaction-button-ripple-effect-mixins.scss` into your SCSS project (typically under `scss/utilities/` or `scss/mixins/`), then import it:

~~~scss
@use "utilities/micro-interaction-button-ripple-effect-mixins" as ripple;
~~~

Or with the older `@import` syntax:

~~~scss
@import "utilities/micro-interaction-button-ripple-effect-mixins";
~~~

---

## Usage

### 1. Basic ripple (default white ripple)

~~~scss
.btn-primary {
  background: #2563eb;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;

  @include ease-ripple-sou();
}
~~~

### 2. Custom-color ripple

~~~scss
.btn-danger {
  background: #dc2626;
  color: #fff;

  @include ease-ripple-sou(rgba(255, 255, 255, 0.5), 700ms);
}
~~~

### 3. Soft / centered ripple (for large CTAs)

~~~scss
.cta-hero {
  background: #f3f4f6;
  color: #111;

  @include ease-ripple-centered-sou(rgba(0, 0, 0, 0.15));
}
~~~

### 4. Fast ripple (for icon buttons / toolbar actions)

~~~scss
.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @include ease-ripple-fast-sou(rgba(255, 255, 255, 0.6));
}
~~~

---

## Mixin Parameters Reference

### `ease-ripple-sou($color, $duration, $timing, $scale, $size)`

| Parameter   | Type    | Default                              | Description                                  |
| ----------- | ------- | ------------------------------------ | -------------------------------------------- |
| `$color`    | Color   | `rgba(255, 255, 255, 0.55)`          | The ripples fill color                       |
| `$duration` | Time    | `600ms`                              | How long the ripple animation runs           |
| `$timing`   | String  | `cubic-bezier(0.4, 0, 0.2, 1)`       | CSS easing function                          |
| `$scale`    | Number  | `12`                                 | How much the ripple grows from its base size |
| `$size`     | Length  | `100px`                              | Initial diameter of the ripple element       |

### `ease-ripple-centered-sou($color)`

Pre-tuned soft and slow variant. Ideal for hero buttons and large CTAs.

| Parameter | Type  | Default                | Description       |
| --------- | ----- | ---------------------- | ----------------- |
| `$color`  | Color | `rgba(0, 0, 0, 0.15)`  | Ripple fill color |

### `ease-ripple-fast-sou($color)`

Pre-tuned snappy variant. Ideal for compact UI elements like icon buttons.

| Parameter | Type  | Default                     | Description       |
| --------- | ----- | --------------------------- | ----------------- |
| `$color`  | Color | `rgba(255, 255, 255, 0.6)`  | Ripple fill color |

---

## Compiled CSS Output

After SCSS compilation, the mixin produces clean, minimal CSS:

~~~css
@keyframes ease-ripple-expand-sou {
  0%   { transform: scale(0);  opacity: 1; }
  100% { transform: scale(12); opacity: 0; }
}

.btn-primary {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  --ease-ripple-scale: 12;
}

.btn-primary::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  pointer-events: none;
  z-index: 0;
}

.btn-primary:active::after {
  animation: ease-ripple-expand-sou 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  .btn-primary:active::after { animation: none; }
}
~~~

---

## Accessibility

The mixin automatically disables the ripple animation when the user has enabled **Reduce Motion** at the OS level — fully respecting `@media (prefers-reduced-motion: reduce)`. No additional configuration required.

---

## Why is this useful?

EaseMotion CSS is built around the philosophy that **motion should be effortless, expressive, and accessible**. Ripple feedback on click is one of the most universally recognized micro-interactions in modern UI — it confirms the users action without delay and adds polish to otherwise static buttons.

This utility brings that polish to EaseMotion in a **single import**, with **zero JavaScript**, **zero dependencies**, and **full motion-accessibility support** — staying true to the frameworks core values of lightweight, declarative motion design.

---

## License

Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) framework.
