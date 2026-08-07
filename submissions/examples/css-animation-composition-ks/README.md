# CSS animation-composition

A visual demonstration of the `animation-composition` CSS property — a Baseline 2024 feature that controls how multiple animations targeting the same property combine.

## What does this do?

Demonstrates the three `animation-composition` values (`replace`, `add`, `accumulate`) through side-by-side comparisons of dual-animation scenarios: translate + scale, translateX + translateY, and scale + opacity + translate. Each demo has two independent animations running on the same element — the only difference between columns is the composition mode.

## How is it used?

```html
<link rel="stylesheet" href="style.css">

<!-- A box that moves left-right AND grows simultaneously -->
<div class="box box--add"></div>
```

```css
.box {
  animation:
    move-left-right 2s ease-in-out infinite alternate,
    grow-shrink 2s ease-in-out infinite alternate;
}

.box--add {
  animation-composition: add;
}
```

Without `animation-composition`, only the last animation takes effect (default: `replace`). With `add`, both animations combine.

## Why is it useful?

Fits the EaseMotion philosophy by enabling **composable, readable animation layering** without wrapper divs or complex keyframe merging:

- **Replace** (default): Only the last animation wins — you can't stack independent movements
- **Add**: Both animation values add together — transforms, opacities, and other properties compose naturally
- **Accumulate**: Like add, but also accumulates on top of the element's base property value

Real-world applications: parallax + scroll-reveal, floating + pulsing badges, cursor-follow + idle animation, layered hero section entrances, and card animations with scroll parallax.

## Features demonstrated

- `animation-composition: replace | add | accumulate` — the core feature
- Three side-by-side comparison demos (box, ball, orb)
- `color-mix()` for adaptive surface colors
- Full dark mode (`prefers-color-scheme`)
- `prefers-reduced-motion` disables all animations
- `prefers-contrast` and `forced-colors` support
- Print styles with `break-inside: avoid`
- Zero JavaScript, zero dependencies
