# Dropdown Menu Component with Hover and Click Variants

A dropdown menu component for navigation submenus, user menus, and action menus with hover trigger and click trigger variants, right-alignment, dividers, and fade + slide-down entrance animation.

## Features

- **`.ease-dropdown`** — relative inline-block container
- **`.ease-dropdown-trigger`** — styled trigger button
- **`.ease-dropdown-menu`** — absolutely positioned menu panel with z-index, shadow, border-radius
- **`.ease-dropdown-item`** — individual menu items with hover highlight
- **`.ease-dropdown-item-danger`** — destructive action item (red hover)
- **`.ease-dropdown-divider`** — visual separator between menu groups
- **`.ease-dropdown-label`** — section label (uppercase, muted)
- **`.ease-dropdown-right`** — right-aligns the menu panel
- **Hover variant** — `.ease-dropdown:hover .ease-dropdown-menu` shows on hover
- **Click variant** — `.ease-dropdown.open .ease-dropdown-menu` toggled via JavaScript
- **Entrance animation** — fade in + slide down on open (transition on opacity, transform, visibility)

## Files

- `style.css` — all dropdown styles and demo layout
- `demo.html` — working demo with hover, click, and right-aligned variants
- `README.md` — this file

## Usage

```html
<!-- Hover dropdown -->
<div class="ease-dropdown">
  <span class="ease-dropdown-trigger">Hover ▼</span>
  <div class="ease-dropdown-menu">
    <a class="ease-dropdown-item" href="#">Profile</a>
    <div class="ease-dropdown-divider"></div>
    <a class="ease-dropdown-item ease-dropdown-item-danger" href="#">Logout</a>
  </div>
</div>

<!-- Click dropdown -->
<div class="ease-dropdown" id="dd">
  <button class="ease-dropdown-trigger">Click ▼</button>
  <div class="ease-dropdown-menu">...</div>
</div>

<script>
  document.querySelector('#dd > .ease-dropdown-trigger')
    .addEventListener('click', (e) => {
      e.currentTarget.closest('.ease-dropdown').classList.toggle('open');
    });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#dd')) {
      document.querySelector('#dd').classList.remove('open');
    }
  });
</script>
```
