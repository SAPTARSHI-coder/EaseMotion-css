# CSS Trigonometric Lissajous Loader

Loader dots positioned using CSS `sin()` and `cos()` trig functions with varying frequency ratios.

## Classes

| Class | Ratio | Shape |
|---|---|---|
| `lissajous-2-1` | 2:1 | Figure-8 |
| `lissajous-3-2` | 3:2 | Pretzel |
| `lissajous-1-1` | 1:1 | Circle |

## Usage

```html
<div class="lissajous-loader lissajous-2-1">
  <div class="dot" style="--i:0"></div>
  <div class="dot" style="--i:1"></div>
  <div class="dot" style="--i:2"></div>
</div>
```

## How it works

A `@property --t` typed as `<angle>` animates from `0turn` to `1turn`. Each dot's position is:

```css
transform: translate(
  calc(sin(var(--t)) * 55px),
  calc(cos(calc(var(--t) * 2)) * 35px)
);
```

The frequency ratio between X and Y axes determines the Lissajous figure shape.

Closes #9594
