# CSS @property Typed Animation Tokens

## What does this do?
Introduces `@property` typed custom properties that unlock direct animation of CSS variables — something impossible with regular `var()`. Enables smooth tweening of progress values, angles, hues, and more without JavaScript animation loops.

## Why this is unique
Regular CSS custom properties cannot be animated:
```css
/* This does NOT animate — browser can't interpolate */
:root { --progress: 0; }
.bar { width: calc(var(--progress) * 1%); transition: --progress 0.5s; }
```

With `@property`, it works:
```css
@property --ease-progress {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
/* Now this DOES animate smoothly */
.bar { transition: --ease-progress 0.5s ease; }
```

## Typed properties included

| Property | Syntax | Powers |
|---|---|---|
| `--ease-progress` | `<number>` | Progress rings, bars, fills |
| `--ease-angle` | `<angle>` | Spinning gradient borders |
| `--ease-hue` | `<number>` | Animated hsl() color shifts |
| `--ease-opacity-val` | `<number>` | Tweened opacity via var |
| `--ease-scale-val` | `<number>` | Tweened transform scale |

## How to use

```html
<!-- Animated progress ring -->
<div class="ease-progress-ring" style="--ease-progress: 75"></div>

<!-- Spinning gradient border -->
<div class="ease-gradient-spin">
  <div class="ease-gradient-spin-inner">Content</div>
</div>

<!-- Animated hue shift background -->
<div class="ease-hue-shift">Content</div>

<!-- Typed progress bar -->
<div class="ease-typed-progress" style="--ease-progress: 60"></div>
```

```js
// Update progress with smooth CSS transition — no requestAnimationFrame needed
element.style.setProperty('--ease-progress', 80);
```

## Browser support
Chrome 85+, Edge 85+, Firefox 128+, Safari 15.4+. Graceful fallback for older browsers via `@supports`.

## Why it fits EaseMotion CSS?
`@property` is the most powerful CSS animation primitive available today. Typed tokens make EaseMotion's design token system animatable — any `--ease-*` value can now tween smoothly. Animation-first, composable, zero JavaScript animation loops required.
