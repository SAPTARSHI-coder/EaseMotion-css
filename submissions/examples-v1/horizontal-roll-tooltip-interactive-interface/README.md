# CSS Horizontal Roll Tooltip – Interactive Interface Layouts

## Issue

Implements **Issue #46267** for EaseMotion CSS.

## Overview

A lightweight, pure CSS tooltip featuring a smooth horizontal roll animation. The component is responsive, keyboard accessible, customizable using CSS custom properties, and requires no JavaScript.

## Features

- Pure CSS
- Horizontal roll entrance animation
- Responsive
- Keyboard accessible
- CSS Custom Properties
- Zero JavaScript

## Custom Properties

```css
:root{
  --tooltip-bg:#222;
  --tooltip-color:#fff;
  --duration:.45s;
  --ease:ease;
  --distance:35px;
}
```

## Usage

```html
<button class="tooltip-btn">
    Hover Me
    <span class="horizontal-roll-tooltip">
        Horizontal Roll Tooltip
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