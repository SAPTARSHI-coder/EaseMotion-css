# Dropdown Menu Expand

A lightweight, pure CSS dropdown menu component with smooth expand/collapse transitions.

## Features

| Feature | Description |
|---------|-------------|
| Smooth Animation | Uses `max-height` transition for fluid open/close |
| Hover Feedback | Menu items highlight on hover with background and indent |
| Accessible | ARIA attributes managed via JavaScript |
| Click-Outside | Closes menu when clicking outside |
| Customizable | Easily themed via CSS custom properties |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--dd-transition-duration` | `300ms` | Duration of open/close and hover transitions |
| `--dd-bg` | `#ffffff` | Background color of dropdown trigger and menu |
| `--dd-hover-bg` | `#f0f4ff` | Background color of menu item on hover |
| `--dd-border-color` | `#e0e0e0` | Border color of the dropdown trigger |
| `--dd-text-color` | `#1a1a2e` | Text color for all dropdown elements |

## How to Use

1. Include `style.css` in your HTML file.
2. Add the Inter font (optional — used in demo).
3. Structure your HTML as follows:

```html
<div class="dropdown">
  <button class="dd-trigger" aria-expanded="false">Label</button>
  <div class="dd-menu">
    <div class="dd-item" data-value="option1">Option 1</div>
    <div class="dd-item" data-value="option2">Option 2</div>
  </div>
</div>
```

4. Add the JavaScript to toggle the `.open` class and manage `aria-expanded`.
5. Customize using the CSS custom properties above.
