# ease-card-stat

A lightweight dashboard statistic card displaying a label, large value, and trend indicator.

## Features

- Pure HTML & CSS
- Hover lift animation
- Large statistic display
- Trend indicator (▲ / ▼)
- Green for positive trends
- Red for negative trends
- Configurable background color
- Simple count-up entrance animation

## Usage

```html
<div class="ease-card-stat positive">
    <span class="label">Revenue</span>

    <div class="value">
        <span class="count">24,580</span>
    </div>

    <div class="trend up">
        ▲ 12.4%
    </div>
</div>
```

## CSS Variables

```css
:root{
    --ease-card-bg:#ffffff;
    --ease-success:#22c55e;
    --ease-danger:#ef4444;
}
```

