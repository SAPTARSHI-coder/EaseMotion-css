# Gradient Text

Submission for [issue #2704](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2704) — adds a pure-CSS, zero-JavaScript utility for animated gradient text effects.

## What it does

Applies a gradient color fill to text using `background-clip: text`, with an optional animation modifier that smoothly shifts the gradient position, plus three ready-made color themes.

## Classes

| Class                    | Effect                                |
| ------------------------ | -------------------------------------- |
| `.gradient-text`         | Static purple → blue gradient on text  |
| `.gradient-text-animate` | Modifier — smoothly shifting gradient  |
| `.gradient-sunset`       | Orange → pink → purple gradient        |
| `.gradient-ocean`        | Cyan → blue → indigo gradient          |
| `.gradient-forest`       | Green → teal → emerald gradient        |

`.gradient-text-animate` is a **modifier**: stack it with `.gradient-text` or any of the color variants to animate that theme.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<h1 class="gradient-text">Hello EaseMotion</h1>

<h2 class="gradient-sunset gradient-text-animate">
  Animated Gradient
</h2>
```

## How it works

The text color comes from a `background` gradient that is clipped to the text shape and made visible by setting `-webkit-text-fill-color` (and `color` as a fallback) to transparent.

## Browser support

`background-clip: text` is supported in all modern evergreen browsers. The `-webkit-` prefix is included for broader Safari/older-Chromium support. Browsers that don't support it fall back to the solid `color` value.

## Accessibility

The animation respects `prefers-reduced-motion: reduce`.

## Files

- `style.css` — the utility classes and keyframes
- `demo.html` — live preview of every class and combination
- `README.md` — this file
