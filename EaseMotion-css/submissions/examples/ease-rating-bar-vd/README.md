# Ease Rating Bar

## What does this do?

A horizontal visual rating bar for displaying numeric scores with animated progress.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="rating-item">
    <div class="rating-header">
        <span>Product Quality</span>
        <strong>4.5 / 5</strong>
    </div>

    <div class="rating-bar">
        <span class="rating-fill" style="width: 90%;"></span>
    </div>
</div>
```

### Custom rating

Change the displayed rating and progress width:

```html
<strong>3 / 5</strong>

<div class="rating-bar">
    <span class="rating-fill" style="width: 60%;"></span>
</div>
```

### Available sizes

```html
<div class="rating-bar small">
    <span class="rating-fill" style="width: 60%;"></span>
</div>

<div class="rating-bar">
    <span class="rating-fill" style="width: 80%;"></span>
</div>

<div class="rating-bar large">
    <span class="rating-fill" style="width: 90%;"></span>
</div>
```

### Features

- Numeric rating
- Visual progress
- Multiple sizes
- Smooth fill animation
- Responsive layout
- Hover interaction
- Pure CSS
- No JavaScript required

## Why is it useful?

Rating bars are commonly used for product reviews, analytics dashboards, feedback summaries, skill ratings, and performance metrics.

This component provides a clean and reusable visual rating pattern with smooth progress animation while following the animation-first philosophy of EaseMotion CSS.