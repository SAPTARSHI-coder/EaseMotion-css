# Ease Circular Progress

## What does this do?

A circular progress indicator for displaying completion percentages with an animated progress ring.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="circular-progress">
    <span>50%</span>
</div>
```

### Custom progress

Change the `--progress` value in CSS:

```css
.circular-progress {
    --progress: 65%;
}
```

### Available sizes

```html
<div class="circular-progress small">
    <span>30%</span>
</div>

<div class="circular-progress">
    <span>50%</span>
</div>

<div class="circular-progress large">
    <span>75%</span>
</div>
```

### Features

- Percentage display
- Circular progress ring
- Animated entrance
- Multiple sizes
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Circular progress indicators are commonly used in dashboards, statistics, completion indicators, skill displays, and analytics interfaces.

This component provides a clean and reusable circular progress pattern using CSS `conic-gradient` while following the animation-first philosophy of EaseMotion CSS.