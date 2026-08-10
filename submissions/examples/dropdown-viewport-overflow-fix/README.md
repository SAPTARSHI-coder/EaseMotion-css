# Dropdown Viewport Overflow Fix

## Description

This example fixes the issue where dropdown menus are clipped when the trigger is placed near the bottom of the viewport. The menu opens upward so all menu items remain visible.

## Features

- Prevents viewport overflow
- Opens menu above the trigger
- Responsive design
- Pure HTML & CSS
- Lightweight implementation

## Usage

```html
<div class="dropdown">
  <button class="dropdown-btn">Menu</button>

  <div class="dropdown-menu">
    <a href="#">Profile</a>
    <a href="#">Settings</a>
    <a href="#">Logout</a>
  </div>
</div>
```

## Fix Applied

- Positioned the dropdown menu above the trigger using `bottom`.
- Added spacing between the trigger and the menu.
- Preserved responsive behavior for smaller screens.
- Ensured the menu remains fully visible near the bottom of the viewport.

## Files

- demo.html
- style.css
- README.md