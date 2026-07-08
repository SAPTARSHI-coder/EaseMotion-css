# CSS-Only Animated Number Counter

A pure CSS animated number counter that counts from 0 to a target value using `@property` and CSS keyframe animations.

## What does this do?

Displays a number that animates from 0 to a specified target value. Uses the CSS `@property` rule to register a custom property as `<integer>`, enabling CSS-native number animation without any JavaScript.

## How is it used?

```html
<div
  class="css-counter css-counter--stat"
  style="--target: 2847"
>
</div>
```

### With prefix/suffix

```html
<div
  class="css-counter css-counter--stat css-counter-prefix css-counter-suffix"
  style="--target: 99"
  data-prefix="$"
  data-suffix="%"
>
</div>
```

### Variants

```html
<!-- Hero size with gradient -->
<div class="css-counter css-counter--hero" style="--target: 10000"></div>

<!-- Color variants -->
<div class="css-counter css-counter--primary" style="--target: 100"></div>
<div class="css-counter css-counter--success" style="--target: 100"></div>
<div class="css-counter css-counter--danger" style="--target: 100"></div>

<!-- Speed variants -->
<div class="css-counter css-counter--fast" style="--target: 100"></div>
<div class="css-counter css-counter--slow" style="--target: 100"></div>
```

## Why is it useful?

- **Zero JavaScript** — pure CSS number animation using `@property`
- **Accessible** — respects `prefers-reduced-motion` by instantly showing the final value
- **Tabular numbers** — uses `font-variant-numeric: tabular-nums` for stable digit widths
- **Customizable** — speed, color, size, and prefix/suffix are all configurable
- **Production-ready** — suitable for stat cards, dashboards, and landing pages
