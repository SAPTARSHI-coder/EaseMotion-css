# Ease Status Ring

## What does this do?

A circular ring indicator for displaying different status levels with multiple variants and sizes.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="status-ring success">
    <span>85%</span>
</div>
```

### Status variants

Success:

```html
<div class="status-ring success">
    <span>85%</span>
</div>
```

Warning:

```html
<div class="status-ring warning">
    <span>55%</span>
</div>
```

Danger:

```html
<div class="status-ring danger">
    <span>25%</span>
</div>
```

### Custom progress

Change the `--progress` value:

```css
.status-ring {
    --progress: 70%;
}
```

### Features

- Circular status ring
- Multiple status variants
- Animated ring entrance
- Multiple sizes
- Hover interaction
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Status rings are useful for displaying health levels, system conditions, resource usage, monitoring data, and dashboard metrics.

This component provides a compact and reusable status visualization with smooth animation while following the animation-first philosophy of EaseMotion CSS.