# Animated Circular Progress Ring

> Submission for GitHub Issue **#51223** — *[FEATURE] Add Animated Circular Progress Ring Component*
> Folder suffix `-cr` added per CONTRIBUTING.md to avoid collision with the existing `progress-ring/` submission.

A reusable, fully responsive **circular progress ring** built with nothing but
**HTML and CSS** — no SVG, no `<canvas>`, no JavaScript, and no external
libraries. The ring is drawn with a single `conic-gradient()` driven by a CSS
custom property and animates smoothly whenever its value changes.

> Component class: `.ease-progress-ring`

---

## What does this do?

It renders a hollow, animated circular progress indicator using a pure-CSS
`conic-gradient()` sweep, with the percentage centered inside the ring.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<div
  class="ease-progress-ring"
  style="--progress: 75"
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="75"
>
  <span class="ease-progress-ring__label">75%</span>
</div>
```

No scripts to wire up. Set the value with the `--progress` custom property
(0–100) and mirror it in `aria-valuenow`.

## Why is it useful?

It captures EaseMotion's philosophy: expressive motion with **zero JavaScript**,
driven entirely by CSS custom properties and transitions. A single animatable
`@property` turns a plain number into a smoothly interpolating ring, and the
whole component is themeable through a small, predictable variable API.

---

## ✨ Features

- Pure CSS ring rendered with `conic-gradient()` (no SVG / Canvas).
- Value controlled by a single custom property: `--progress` (`0`–`100`).
- Smooth animated sweep on change via CSS transitions (animatable
  `@property --progress`).
- Hollow center created by layering an inner circle over the gradient.
- Centered percentage label.
- Hover scaling for tactile UI feedback.
- Fully responsive — scales to its container and stays perfectly circular.
- Themeable through CSS variables.
- Accessible: exposes `role="progressbar"` with ARIA value attributes.
- Honors `prefers-reduced-motion`.

---

## ⚙️ How It Works

1. **The ring** — A `conic-gradient()` fills the primary color from `0deg` up to
   `calc(var(--progress) * 1%)`, then fills the rest with the track color:

   ```css
   background: conic-gradient(
     var(--ease-primary) calc(var(--progress) * 1%),
     var(--track-color) 0
   );
   ```

2. **The hollow center** — A `::before` pseudo-element sits on top of the
   gradient, inset by `--thickness` on all sides, so only a ring of exactly
   `--thickness` remains visible.

3. **Smooth animation** — `--progress` is registered with `@property` as a
   `<number>`, which makes it interpolatable. A `transition` on `--progress`
   then animates the sweep instead of snapping between values.

4. **The label** — The percentage text is placed above the inner circle with
   `position: relative; z-index: 1` and centered using a `grid` +
   `place-items: center` layout on the container.

---

## 🎛️ CSS Variables

| Variable          | Default     | Description                                  |
| ----------------- | ----------- | -------------------------------------------- |
| `--progress`      | `0`         | Progress value, `0`–`100`.                   |
| `--size`          | `160px`     | Outer diameter of the ring.                  |
| `--thickness`     | `14px`      | Ring stroke width.                           |
| `--ease-primary`  | `#6366f1`   | Filled / progress color.                     |
| `--track-color`   | `#e5e7eb`   | Unfilled track color.                        |

Override any of them inline or in a wrapping rule:

```html
<div class="ease-progress-ring"
     style="--progress: 60; --size: 220px; --ease-primary: #10b981;">
  <span class="ease-progress-ring__label">60%</span>
</div>
```

---

## 📁 Folder Structure

```
submissions/
└── examples/
    └── conic-gradient-progress-ring-cr/
        ├── demo.html     # Live examples: 0, 25, 50, 75, 90, 100%
        ├── style.css     # The .ease-progress-ring component
        └── README.md     # This file
```

---

## 🖼️ Screenshot

<!-- Replace with an actual screenshot of demo.html -->
![Animated Circular Progress Ring preview](./screenshot.png)

_Open `demo.html` in any modern browser to see the rings in action._

---

## 🌐 Browser Support

Requires support for `conic-gradient()` and the `@property` at-rule.

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 85+             |
| Edge    | 85+             |
| Safari  | 16.4+           |
| Firefox | 128+            |

In browsers without `@property`, the ring still renders correctly at the given
`--progress` value — only the animated sweep between values gracefully falls
back to an instant change.

---

## ♿ Accessibility

Each ring is marked up as a progress bar:

```html
role="progressbar"
aria-valuemin="0"
aria-valuemax="100"
aria-valuenow="75"
```

The component also respects `prefers-reduced-motion: reduce` by disabling
transitions for users who request reduced motion.
