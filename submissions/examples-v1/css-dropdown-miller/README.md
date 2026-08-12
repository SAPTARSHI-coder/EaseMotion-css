# Dropdown Menu Component

A CSS-only dropdown menu using `:hover` and `:focus-within`, with nested
submenus, arrow indicators, and slide/fade animations. No JavaScript
required.

## Files
- `demo.html` - Working demo with a 3-item menu and a nested submenu
- `style.css` - Component styles
- `README.md` - This file

## Usage

```html
<ul class="ease-dropdown">
  <li class="ease-dropdown-item">
    <button class="ease-dropdown-trigger" aria-haspopup="true" aria-expanded="false">
      File
      <span class="ease-dropdown-arrow"></span>
    </button>
    <ul class="ease-dropdown-menu">
      <li><a href="#" class="ease-dropdown-link">New File</a></li>
      <li><a href="#" class="ease-dropdown-link">Open...</a></li>

      <!-- Nested submenu -->
      <li class="ease-dropdown-item">
        <a href="#" class="ease-dropdown-link ease-dropdown-trigger">
          Export As
          <span class="ease-dropdown-arrow ease-dropdown-arrow--side"></span>
        </a>
        <ul class="ease-dropdown-menu ease-dropdown-menu--submenu">
          <li><a href="#" class="ease-dropdown-link">PDF</a></li>
          <li><a href="#" class="ease-dropdown-link">PNG</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

## Features
- Pure CSS, no JavaScript
- Opens on `:hover` (mouse) and `:focus-within` (keyboard/Tab) for accessibility
- Slide + fade animation on open/close
- Arrow indicator that rotates on open (top-level) or points sideways (submenus)
- Nested submenu support via `.ease-dropdown-menu--submenu`
- Responsive: stacks vertically and adjusts submenu position on small screens
