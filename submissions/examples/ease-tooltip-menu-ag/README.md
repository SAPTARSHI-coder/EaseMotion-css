# Interactive Tooltip Menu

A tooltip menu that reveals contextual action buttons on hover/focus,
built entirely in CSS and HTML — no JavaScript.

## Features
- Hover and keyboard-focus triggered reveal (`:hover`, `:focus-within`)
- Smooth fade + scale-in transition
- Small pointer arrow anchoring the menu to its trigger
- Fully keyboard accessible via `tabindex`

## Usage
```html
<div class="tooltip-menu-wrapper" tabindex="0">
  <button class="tooltip-menu-trigger">Options</button>
  <div class="tooltip-menu">
    <button class="tooltip-menu-item">Edit</button>
    <button class="tooltip-menu-item">Duplicate</button>
    <button class="tooltip-menu-item">Share</button>
    <button class="tooltip-menu-item">Delete</button>
  </div>
</div>
```

## Files
- `demo.html` — standalone demo page
- `style.css` — all styles and transitions
- `README.md` — this file