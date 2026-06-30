# border-image-mp

## What does this do?

A comprehensive set of CSS utility classes for `border-image` — covering linear, radial, conic, and repeating gradient borders, slice/width/outset/repeat control, an animated rotating border, and dark mode + reduced motion support.

## How is it used?

```html
<!-- Linear gradient border -->
<div class="border-image-mp border-image-mp-linear">Linear gradient border</div>

<!-- Radial gradient border -->
<div class="border-image-mp border-image-mp-radial">Radial gradient border</div>

<!-- Conic gradient border -->
<div class="border-image-mp border-image-mp-conic">Conic gradient border</div>

<!-- Repeating dashed pattern border -->
<div class="border-image-mp border-image-mp-repeat">
  Repeating pattern border
</div>

<!-- Border with outset (extends outside the box) -->
<div class="border-image-mp border-image-mp-outset">Outset border</div>

<!-- Slice fill — fills the interior with the gradient -->
<div class="border-image-mp border-image-mp-slice-fill">Slice fill border</div>

<!-- Animated rotating conic border -->
<div class="border-image-mp border-image-mp-animated">Animated border</div>

<!-- Width modifiers -->
<div class="border-image-mp border-image-mp-linear border-image-mp-thin">
  1px
</div>
<div class="border-image-mp border-image-mp-linear border-image-mp-thick">
  6px
</div>
<div class="border-image-mp border-image-mp-linear border-image-mp-heavy">
  10px
</div>

<!-- Speed modifiers (for animated) -->
<div class="border-image-mp border-image-mp-animated border-image-mp-fast">
  Fast
</div>
<div class="border-image-mp border-image-mp-animated border-image-mp-slow">
  Slow
</div>
```

### CSS Variables

| Variable          | Default         | Description                           |
| ----------------- | --------------- | ------------------------------------- |
| `--bi-mp-slice`   | `1`             | `border-image-slice` value            |
| `--bi-mp-width`   | `3px`           | `border-image-width` value            |
| `--bi-mp-outset`  | `0`             | `border-image-outset` value           |
| `--bi-mp-speed`   | `3s`            | Animation duration (animated variant) |
| `--bi-mp-padding` | `1.2rem 1.5rem` | Inner padding                         |

### Class Reference

| Class                                   | Purpose                        |
| --------------------------------------- | ------------------------------ |
| `border-image-mp`                       | Required base class            |
| `border-image-mp-linear`                | Linear gradient border         |
| `border-image-mp-radial`                | Radial gradient border         |
| `border-image-mp-conic`                 | Conic gradient border          |
| `border-image-mp-multi`                 | Five-stop linear gradient      |
| `border-image-mp-repeat`                | Repeating dashed pattern       |
| `border-image-mp-outset`                | Border extends outside the box |
| `border-image-mp-slice-fill`            | Gradient fills interior region |
| `border-image-mp-animated`              | Rotating conic gradient        |
| `border-image-mp-thin/base/thick/heavy` | Width modifiers                |
| `border-image-mp-slow/normal/fast`      | Animation speed modifiers      |

## Why is it useful?

`border-image` is one of CSS's most powerful but underused properties. These utilities expose its full range — source, slice, width, outset, and repeat — through composable classes, making gradient borders and animated borders accessible without any JavaScript or pseudo-element hacks. This aligns with EaseMotion CSS's goal of providing expressive, production-ready visual utilities built entirely in CSS.
