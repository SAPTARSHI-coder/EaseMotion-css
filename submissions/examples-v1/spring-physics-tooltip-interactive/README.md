# CSS Spring Physics Tooltip – Interactive Interface Layouts

## Issue

Implements **Issue #46295** for EaseMotion CSS.

## Overview

A pure CSS tooltip featuring a spring physics animation that provides a natural bounce effect while appearing. The component is lightweight, responsive, keyboard accessible, and requires no JavaScript.

## Features

- Pure CSS implementation
- Spring physics animation
- Responsive design
- Keyboard accessible
- CSS Custom Properties
- Zero JavaScript

## Custom Properties

```css
:root{
  --tooltip-bg:#222;
  --tooltip-color:#fff;
  --duration:.55s;
  --spring:cubic-bezier(.18,1.6,.45,1);
  --translate:18px;
}
```

## Usage

```html
<button class="tooltip-btn">
    Hover Me
    <span class="spring-tooltip">
        Spring Physics Tooltip
    </span>
</button>
```

## Files

- demo.html
- style.css
- README.md

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

MIT