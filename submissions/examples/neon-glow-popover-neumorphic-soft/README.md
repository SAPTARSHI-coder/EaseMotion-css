# Neon Glow Popover for Neumorphic Soft Layouts

**Issue:** #46488

## Overview

A pure CSS Neon Glow Popover designed for Neumorphic Soft layouts with smooth glow animation. No JavaScript required.

## Features

- Pure HTML & CSS
- Neon Glow Animation
- Neumorphic Design
- Responsive
- Keyboard Accessible
- CSS Custom Properties
- Lightweight

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
<div class="popover-container">
  <button class="popover-btn">
    Hover Me
    <span class="popover">
      Neumorphic Neon Glow Popover
    </span>
  </button>
</div>
```

## Customization

Modify CSS variables:

```css
:root{
    --glow:#00e5ff;
    --duration:.35s;
    --radius:18px;
}
```

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari