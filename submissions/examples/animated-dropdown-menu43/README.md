# Animated Dropdown Menu

A modern animated dropdown menu component built with pure HTML and CSS. It uses a checkbox toggle to open and close the menu without JavaScript.

## Features

- Pure HTML and CSS dropdown.
- Smooth open/close animation.
- Modern glassmorphism design.
- Hover effects on menu items.
- Keyboard focus support.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<div class="dropdown">
  <input type="checkbox" id="dropdown-state" class="dropdown-state" />

  <label for="dropdown-state" class="dropdown-toggle">
    <span>Options</span>
    <span class="dropdown-arrow"></span>
  </label>

  <ul class="dropdown-menu">
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>