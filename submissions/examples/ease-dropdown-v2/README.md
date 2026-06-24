# Animated Dropdown & Mega Menu

**Type:** New Component  
**Zero JavaScript — CSS-only**

## Overview
Fully animated dropdown and mega menu components using only
CSS `:hover` and `:focus-within`. No JS event listeners needed.

## Variants

| Class | Effect |
|---|---|
| `ease-dropdown-slide-up` | Slides up into position (default) |
| `ease-dropdown-slide-down` | Slides down (for mega menus) |
| `ease-dropdown-fade` | Fade only, no transform |
| `ease-dropdown-scale` | Scale + slide in |
| `ease-dropdown-menu--right` | Right-aligned panel |
| `ease-mega-menu` | Full-width mega menu panel |

## Basic Usage

```html
<div class="ease-dropdown-wrapper">
  <div class="ease-dropdown-trigger" tabindex="0">Account</div>
  <div class="ease-dropdown-menu ease-dropdown-slide-up">
    <a href="#" class="ease-dropdown-item">Profile</a>
    <a href="#" class="ease-dropdown-item">Settings</a>
    <div class="ease-dropdown-divider"></div>
    <a href="#" class="ease-dropdown-item ease-dropdown-item--danger">Logout</a>
  </div>
</div>
```

## Accessibility
- `:focus-within` opens dropdown on keyboard Tab
- `tabindex="0"` on trigger makes it focusable
- `prefers-reduced-motion` disables transforms
- Semantic link elements inside menu

## Files
| File | Purpose |
|---|---|
| `style.css` | Full component styles |
| `demo.html` | All variants live demo |
| `README.md` | This file |