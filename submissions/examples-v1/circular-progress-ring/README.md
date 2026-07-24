# Circular Progress Ring

## What does this do?
An animated circular/ring progress indicator built with CSS `conic-gradient` and `@property` — set the percentage via a single CSS custom property, and the ring animates to fill on page load.

## How is it used?
Add the progress ring element with a `--progress` custom property:

```html
<div class="progress-ring" style="--progress: 75;" data-value="75"></div>
```

Color variants:
```html
<div class="progress-ring ring-emerald" style="--progress: 64;" data-value="64"></div>
<div class="progress-ring ring-amber" style="--progress: 42;" data-value="42"></div>
<div class="progress-ring ring-rose" style="--progress: 95;" data-value="95"></div>
<div class="progress-ring ring-cyan" style="--progress: 23;" data-value="23"></div>
```

Size variants:
```html
<div class="progress-ring ring-sm" style="--progress: 50;" data-value="50"></div>
<div class="progress-ring ring-lg" style="--progress: 80;" data-value="80"></div>
```

Optional glow wrapper:
```html
<div class="progress-ring-wrapper">
  <div class="progress-ring" style="--progress: 75;" data-value="75"></div>
</div>
```

## Why is it useful?
Circular progress indicators are essential for dashboards, profile pages, stats sections, and loading states — yet EaseMotion CSS had no such component. This submission uses the modern CSS `@property` rule to animate `conic-gradient` smoothly (something not possible with regular CSS transitions), making it technically novel while staying true to the framework's zero-JS philosophy. Includes 5 color variants, 3 sizes, glow effects, ARIA attributes, and `prefers-reduced-motion` support.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see 5 animated rings in different colors and percentages.

## Browser Support
- Chrome 85+, Edge 85+, Opera 71+ (full `@property` support)
- Firefox 128+ (recently added `@property`)
- Safari 15.4+ (partial — `@property` supported, animation may vary)

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
