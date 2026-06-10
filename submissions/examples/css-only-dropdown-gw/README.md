# CSS-Only Dropdown & Flyout Menu Component

## What does this do?

Introduces a pure CSS-only dropdown and nested flyout menu component (`.ease-dropdown`) with built-in accessibility focus hooks and entry animation support. 

No JavaScript is required. The menus activate automatically on mouse hover or when keyboard focus enters any of the elements inside (using `:focus-within`).

---

## How is it used?

### 1. Standard Dropdown

```html
<div class="ease-dropdown" tabindex="0">
  <button class="ease-dropdown-trigger">
    Menu Trigger
  </button>
  <div class="ease-dropdown-menu">
    <a href="#action-1" class="ease-dropdown-item">Action 1</a>
    <a href="#action-2" class="ease-dropdown-item">Action 2</a>
  </div>
</div>
```

### 2. Nested Submenu (Flyout)

To nest a submenu that flies out to the right (or left):

```html
<div class="ease-dropdown" tabindex="0">
  <button class="ease-dropdown-trigger">Main Menu</button>
  <div class="ease-dropdown-menu">
    
    <!-- Submenu item -->
    <div class="ease-dropdown-submenu" tabindex="0">
      <div class="ease-dropdown-item submenu-trigger">
        Hover for Submenu
      </div>
      <div class="ease-dropdown-submenu-menu">
        <a href="#sub-1" class="ease-dropdown-item">Sub-Action 1</a>
        <a href="#sub-2" class="ease-dropdown-item">Sub-Action 2</a>
      </div>
    </div>

  </div>
</div>
```

---

## Alignment Options

You can append class modifiers to alter the alignment relative to the trigger container:

| Class | Behavior |
|-------|----------|
| `.ease-dropdown` | Left-aligned menu (default) |
| `.ease-dropdown-right` | Right-aligned menu |
| `.ease-dropdown-center` | Horizontally centered menu |

---

## Why is this useful for EaseMotion CSS?

- **Zero JS overhead** — Zero runtime listeners or external library imports needed. Pure CSS transitions run fully hardware-accelerated.
- **Completely Accessible** — Adding `tabindex="0"` on container classes paired with CSS `:focus-within` selectors ensures full keyboard tab navigation natively.
- **Highly Composable** — Integrates seamlessly with existing buttons, navbars, sidebars, and card designs.
- **Premium Aesthetics** — Integrates with EaseMotion's design tokens (`--ease-space-*`, `--ease-radius-*`, `--ease-shadow-*`) and transition curves.

---

*Submitted by: gw*
