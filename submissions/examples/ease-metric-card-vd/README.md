# Ease Metric Card

## What does this do?

A compact metric card for displaying an important value together with its label, trend, and supporting information.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<article class="metric-card">
    <div class="metric-top">
        <span class="metric-label">Total Revenue</span>
        <span class="trend positive">↑ 12.5%</span>
    </div>

    <strong class="metric-value">$24,680</strong>

    <span class="metric-description">
        Compared with last month
    </span>
</article>
```

### Trend variants

Positive:

```html
<span class="trend positive">↑ 12.5%</span>
```

Negative:

```html
<span class="trend negative">↓ 3.4%</span>
```

### Features

- Metric value
- Label
- Trend indicator
- Supporting description
- Hover animation
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Metric cards are commonly used in analytics dashboards, reporting interfaces, admin panels, and business intelligence applications to highlight important numerical information.

This component provides a clean and reusable metric display with subtle hover feedback while following the animation-first philosophy of EaseMotion CSS.