# Magnetic Pull Tooltip – Dashboard Analytics Layout

**Issue:** #46297

## Description

A pure CSS **Magnetic Pull Tooltip** designed for Dashboard Analytics interfaces. The tooltip smoothly moves toward the trigger element, creating a subtle magnetic pull animation without JavaScript.

## Features

- Pure HTML & CSS
- Magnetic Pull animation
- Dashboard Analytics styling
- Responsive layout
- Keyboard accessible
- CSS Custom Properties
- No JavaScript required

## Usage

```html
<div class="tooltip-wrapper">
    <button class="info-btn">ⓘ</button>
    <span class="tooltip">Revenue increased by 18% this month.</span>
</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

```css
:root{
    --primary:#2563eb;
    --secondary:#60a5fa;
    --duration:.35s;
    --pull-distance:18px;
}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

MIT