# Position Utilities (Top / Right / Bottom / Left)

> Submission for issue [#16687](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16687)

## 1. What does this do?

Provides a complete set of utility classes for the CSS positioning offsets — `top`, `right`, `bottom`, and `left` — including a spacing scale, half offsets for centering, negative offsets for badge/sticker effects, and `inset` shorthands for filling a parent.

## 2. How is it used?

Add a position utility to any element that has `position: absolute`, `position: fixed`, `position: relative`, or `position: sticky`. The utility sets the corresponding offset.

```html
<!-- A parent with position: relative -->
<div style="position: relative;">

  <!-- A badge stuck to the top-right corner -->
  <span class="ease-top-0 ease-right-0" style="position: absolute;">New</span>

  <!-- A perfectly centered element -->
  <div class="ease-top-1/2 ease-left-1/2" style="position: absolute; transform: translate(-50%, -50%);">
    Centered
  </div>

  <!-- A sticker that overhangs the corner -->
  <span class="ease-top-n4 ease-right-n4" style="position: absolute;">-50%</span>

  <!-- An overlay that fills the parent -->
  <div class="ease-inset-0" style="position: absolute;">Overlay</div>

</div>
```

### Available scales

| Class suffix | Value      | Class suffix | Value      |
| ------------ | ---------- | ------------ | ---------- |
| `-0`         | `0`        | `-12`        | `3rem`     |
| `-1`         | `0.25rem`  | `-16`        | `4rem`     |
| `-2`         | `0.5rem`   | `-20`        | `5rem`     |
| `-4`         | `1rem`     | `-24`        | `6rem`     |
| `-6`         | `1.5rem`   | `-auto`      | `auto`     |
| `-8`         | `2rem`     | `-full`      | `100%`     |
| `-10`        | `2.5rem`   | `-1/2`       | `50%`      |

### Negative offsets (prefix `n` for negative)

`-n1`, `-n2`, `-n4`, `-n8` → `-0.25rem`, `-0.5rem`, `-1rem`, `-2rem`

### Inset shorthands

| Class             | Effect                          |
| ----------------- | ------------------------------- |
| `ease-inset-0`    | All 4 sides = `0`               |
| `ease-inset-2`    | All 4 sides = `0.5rem`          |
| `ease-inset-4`    | All 4 sides = `1rem`            |
| `ease-inset-auto` | All 4 sides = `auto`            |
| `ease-inset-x-0`  | `left: 0; right: 0`             |
| `ease-inset-y-0`  | `top: 0; bottom: 0`             |
| `ease-inset-x-4`  | `left: 1rem; right: 1rem`       |
| `ease-inset-y-4`  | `top: 1rem; bottom: 1rem`       |

> ℹ️ These utilities only take effect when the element has a `position` value other than `static`. Pair them with a position class such as `position: absolute`, `fixed`, `relative`, or `sticky`.

## 3. Why is it useful?

This utility set fits EaseMotion CSS's philosophy of **predictable, atomic, readable styling**:

- **Composable** — combine `top`, `right`, `bottom`, `left` freely to position anything precisely.
- **Sensible scale** — same `0.25rem` step pattern used by leading utility frameworks, so muscle memory carries over.
- **Centering made easy** — `1/2` offsets remove the need for memorizing magic numbers when paired with `transform: translate(-50%, -50%)`.
- **Sticker / badge support** — negative offsets (`-n4`, etc.) make it trivial to create overlay badges, notification dots, or "corner ribbons".
- **Inset shorthand** — `inset-0` is a one-class fill-the-parent pattern, perfect for overlays, modals, and full-bleed backgrounds.
- **Zero JavaScript, framework-agnostic** — pure CSS classes that work anywhere.

Use cases include notification badges, tooltips, dropdowns, modals, overlays, sticky elements, corner ribbons, floating action buttons, and perfectly centered hero content.