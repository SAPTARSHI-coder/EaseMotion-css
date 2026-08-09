# Neon Glow Popover for Responsive Dashboard Layouts

Issue: #46489

## Overview

A pure CSS Neon Glow Popover designed for responsive dashboard interfaces. The popover appears with a glowing neon animation and requires no JavaScript.

## Features

- Pure CSS
- Responsive layout
- Keyboard accessible
- Neon glow animation
- CSS Custom Properties
- Easy to customize

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

```html
<button class="popover-btn">
    Dashboard Info
    <span class="popover">
        Analytics updated successfully.
    </span>
</button>
```

## Custom Properties

```css
:root{
    --glow:#00f5ff;
    --duration:.35s;
    --radius:12px;
}
```

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅