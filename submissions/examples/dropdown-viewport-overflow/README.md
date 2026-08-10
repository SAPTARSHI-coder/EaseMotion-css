# Dropdown Viewport Overflow Fix

## Description

This submission fixes an issue where dropdown menus overflow outside the viewport when opened near the screen edges. The menu remains fully visible on desktop and mobile screens.

## Features

- Prevents viewport overflow
- Responsive dropdown width
- Right-edge alignment
- Pure CSS implementation

## Usage

```html
<div class="dropdown">
  <button class="dropdown-btn">Menu</button>

  <ul class="dropdown-menu">
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
    <li><a href="#">Logout</a></li>
  </ul>
</div>
```

## Benefits

- Better mobile responsiveness
- Prevents clipped menu items
- Improves accessibility
- Easy to integrate into existing projects