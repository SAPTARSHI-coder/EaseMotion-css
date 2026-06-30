# ease-dropdown

## What does this do?

CSS dropdown/select menu component with **click** and **hover** trigger modes, nested submenus, and smooth fade+slide animation.

## How is it used?

```html
<div class="ease-dropdown">
  <button class="ease-dropdown-trigger">Trigger</button>
  <ul class="ease-dropdown-menu">
    <li><button class="ease-dropdown-item">Item</button></li>
  </ul>
</div>
```

### Trigger modes

| Mode  | Class                                 | Behavior                         |
| ----- | ------------------------------------- | -------------------------------- |
| Click | `.ease-dropdown` (default)            | Toggle via JS `.ease-open` class |
| Hover | `.ease-dropdown.ease-dropdown--hover` | Pure CSS hover + focus-within    |

### Available Classes

| Class                            | Purpose                                 |
| -------------------------------- | --------------------------------------- |
| `.ease-dropdown`                 | Wrapper (position: relative)            |
| `.ease-dropdown-trigger`         | Button/link that opens the menu         |
| `.ease-dropdown-menu`            | The dropdown list (absolute positioned) |
| `.ease-dropdown-menu--right`     | Right-aligned variant                   |
| `.ease-dropdown-menu--top`       | Opens upward                            |
| `.ease-dropdown-menu.ease-open`  | Visible state (JS toggle)               |
| `.ease-dropdown-item`            | Individual menu item                    |
| `.ease-dropdown-item--active`    | Highlighted selected item               |
| `.ease-dropdown-item--disabled`  | Non-interactive item                    |
| `.ease-dropdown-divider`         | Horizontal separator                    |
| `.ease-dropdown-header`          | Section label (uppercase, muted)        |
| `.ease-dropdown-submenu`         | Nested submenu wrapper                  |
| `.ease-dropdown-submenu--hover`  | Submenu opens on hover (CSS only)       |
| `.ease-dropdown-submenu-trigger` | Button with chevron arrow               |

### Responsive

- No specific breakpoint overrides (menus work at all widths)
- For mobile, use click mode (hover has no effect on touch)

### Animation

- Open: fade in `opacity: 0 → 1` + slide `translateY(-6px) → 0`
- Close: reverse
- Duration: `var(--ease-speed-fast, 150ms)`
- Timing: `var(--ease-ease)`
- `prefers-reduced-motion: reduce` disables transitions

### Design Tokens Used

| Token                      | Fallback              | Purpose                 |
| -------------------------- | --------------------- | ----------------------- |
| `--ease-color-surface`     | `#fff` / `#141e33`    | Menu background         |
| `--ease-color-text`        | `#1e293b` / `#e2e8f0` | Item text               |
| `--ease-color-neutral-100` | `#f1f5f9`             | Item hover bg           |
| `--ease-color-neutral-200` | `#e2e8f0`             | Border, divider         |
| `--ease-color-neutral-400` | `#94a3b8`             | Header text             |
| `--ease-color-neutral-500` | `#64748b`             | Dark header text        |
| `--ease-color-neutral-700` | `#334155`             | Dark border             |
| `--ease-color-neutral-800` | `#1e293b`             | Dark item hover bg      |
| `--ease-color-primary`     | `#6c63ff`             | Active bg               |
| `--ease-radius-md`         | `0.75rem`             | Menu/item border radius |
| `--ease-shadow-lg`         | `0 10px 30px...`      | Menu shadow             |
| `--ease-speed-fast`        | `150ms`               | Transition duration     |
| `--ease-ease`              | cubic-bezier          | Transition timing       |
| `--ease-font-sans`         | sans-serif            | Item font               |

Fixes #25554
