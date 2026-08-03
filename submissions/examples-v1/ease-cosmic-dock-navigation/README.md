# Cosmic Dock Navigation

## Description
A desktop-inspired floating dock navigation component styling with a smooth space/nebula theme. Features fluid magnetic scaling transitions, ambient glows, status dots, and complete accessibility support.

## Installation
Add the HTML markup and include `style.css` in your project.

## Usage
Include the CSS stylesheet:
```html
<link rel="stylesheet" href="style.css">
```

Add the semantic markup:
```html
<nav class="cosmic-dock" role="navigation" aria-label="Desktop shortcuts">
  <ul class="dock-list" role="menubar">
    <li role="none">
      <a href="#home" class="dock-item" role="menuitem" aria-label="Home Workspace">
        <span class="icon home-icon"></span>
        <span class="tooltip">Home Workspace</span>
        <span class="status-dot active"></span>
      </a>
    </li>
  </ul>
</nav>
```

## Accessibility
- Implements ARIA `menubar` and `menuitem` roles.
- Full keyboard focus handling with `:focus-visible` outline rings.
- Supports `prefers-reduced-motion` media queries.
