# Responsive Badge Documentation

This component provides a responsive badge that dynamically scales its font size and padding based on the viewport width, ensuring optimal readability on both mobile and desktop screens.

### Usage:
```html
<span class="ease-badge ease-badge-responsive primary">New Feature</span>
<span class="ease-badge ease-badge-responsive warning">Warning</span>
<span class="ease-badge ease-badge-responsive success">Success</span>
```

### Why is it useful?
It allows for consistent UI sizing across all devices without relying on multiple complex media queries. By utilizing CSS `clamp()`, the responsive badge seamlessly fits into EaseMotion's responsive-first design philosophy.
