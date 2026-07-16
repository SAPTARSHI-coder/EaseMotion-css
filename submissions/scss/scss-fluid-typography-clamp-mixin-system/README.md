# Fluid Typography & Clamp Mixin System

A set of reusable SCSS mixins for smoothly scaling font-size (or any CSS
property) between a minimum and maximum value across a viewport range —
using native CSS `clamp()`, with zero media queries.

## Files

- `_fluid-typography-clamp-mixin-system.scss` — mixins, predefined fluid
  type scale, and generated utility classes.
- `README.md` — this documentation.

## Usage

### As mixins

```scss
@import 'fluid-typography-clamp-mixin-system';

h1 {
  @include fluid-font(28px, 56px);
}

h2 {
  @include fluid-font(24px, 40px, 375px, 1600px);
}

.card {
  @include fluid-size(padding, 16px, 32px);
}
```

### As utility classes

```html
<h1 class="fluid-text-3xl">Hero Heading</h1>
<p class="fluid-text-base">Body copy that scales gently with viewport width.</p>
```

## Mixin reference

| Mixin         | Parameters                                              | Description                                              |
|---------------|----------------------------------------------------------|------------------------------------------------------------|
| `fluid-size`  | `$property, $min-size, $max-size, $min-vw, $max-vw` | Generates a `clamp()` value for any CSS property.        |
| `fluid-font`  | `$min-size, $max-size, $min-vw, $max-vw`             | Shorthand for `fluid-size` applied to `font-size`.        |

Defaults: `$min-vw: 320px`, `$max-vw: 1440px` — the viewport range the value scales across.

## Predefined fluid type scale

| Class               | Min size | Max size |
|---------------------|----------|----------|
| `.fluid-text-xs`     | 14px     | 16px     |
| `.fluid-text-sm`     | 16px     | 18px     |
| `.fluid-text-base`   | 16px     | 20px     |
| `.fluid-text-lg`     | 20px     | 28px     |
| `.fluid-text-xl`     | 28px     | 40px     |
| `.fluid-text-2xl`    | 36px     | 56px     |
| `.fluid-text-3xl`    | 48px     | 72px     |

## Compiled CSS example

```css
h1 {
  font-size: clamp(28px, 21.3333px + 3.3333vw, 56px);
}

.fluid-text-lg {
  font-size: clamp(20px, 15.4286px + 4vw, 28px);
}
```

## Browser support

`clamp()` is supported in all modern browsers (Chrome, Firefox, Safari, Edge — released 2020+). No fallback needed for current EaseMotion CSS target browsers.