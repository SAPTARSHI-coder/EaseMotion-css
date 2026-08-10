# Blur-Entrance Popover for Interactive Interface Layouts

**Issue:** #46478

## Overview

A responsive **pure CSS Blur-Entrance Popover** designed for Interactive Interface layouts. The popover smoothly transitions into view with a blur-to-clear animation without requiring JavaScript.

## Features

- Pure CSS implementation
- Smooth Blur Entrance animation
- Responsive design
- Keyboard accessible (`:focus-visible`)
- CSS Custom Properties
- No JavaScript dependency

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="popover-wrapper">
    <button class="trigger-btn">Hover Me</button>

    <div class="popover">
        Popover Content
    </div>
</div>
```

## Custom Properties

```css
:root{
    --popover-duration:.4s;
    --popover-easing:ease;
    --popover-scale:.9;
    --blur-radius:10px;
}
```

## Accessibility

- Keyboard accessible
- Uses `:focus-visible`
- Semantic tooltip (`role="tooltip"`)
- Responsive across devices

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS principles by providing a lightweight, reusable, animation-first popover using only CSS. It emphasizes clean motion, readability, accessibility, and easy customization through CSS variables.