# Dropdown / Select Component — Issue #14162

## What does this do?
A CSS-only dropdown menu with slide+fade animation, using `:focus-within` for toggling. No JavaScript required.

## How is it used?
```html
<div class="ease-dropdown">
  <button class="ease-dropdown-trigger">
    Actions
    <span class="ease-dropdown-arrow">&#9660;</span>
  </button>
  <div class="ease-dropdown-menu">
    <button class="ease-dropdown-item active">Profile</button>
    <button class="ease-dropdown-item">Settings</button>
    <hr class="ease-dropdown-divider">
    <button class="ease-dropdown-item muted">Log out</button>
  </div>
</div>
```

## Classes
| Class | Description |
|---|---|
| `.ease-dropdown` | Wrapper with `position:relative` and `:focus-within` toggle |
| `.ease-dropdown-trigger` | Button that opens the menu on focus |
| `.ease-dropdown-arrow` | Arrow indicator; rotates 180° when menu is open |
| `.ease-dropdown-menu` | Absolutely positioned menu; hidden by default (opacity 0, translateY -6px, pointer-events none) |
| `.ease-dropdown-menu-right` | Aligns menu to the right edge |
| `.ease-dropdown-item` | Menu buttons with hover/focus-visible styling |
| `.ease-dropdown-divider` | `<hr>` separator between items |

## Behavior
- **Open:** Click the trigger (or Tab to it) — menu appears with opacity + translateY transition (150ms ease)
- **Close:** Click outside or Tab away — `:focus-within` no longer matches, menu hides
- **Selection:** Click any item to select it (JS event handling optional)
- **Keyboard:** Arrow keys navigate items, Tab/Shift+Tab moves focus in/out
- **Dark mode:** Via `[data-theme="light"]` CSS variables

## Why is it useful for EaseMotion CSS?
Dropdowns are essential for navigation menus, action menus, and form selects. This CSS-only approach provides consistent styling without JS dependencies.
