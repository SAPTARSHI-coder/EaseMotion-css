# Ease Dial Code Dropdown

## What does this do?
A country dial code picker dropdown with search filtering. Displays the selected country flag, name, and code in the trigger. Features a smooth fade+slide expand animation, real-time search filtering, and hover highlight on items.

## How is it used?
```html
<div class="ease-dial-dropdown">
  <div class="ease-dial-dropdown__trigger" data-trigger>
    <span class="ease-dial-dropdown__flag"> </span>
    <span data-trigger-name>United States</span>
    <span class="ease-dial-dropdown__code" data-trigger-code>+1</span>
    <svg class="ease-dial-dropdown__arrow">▾</svg>
  </div>
  <div class="ease-dial-dropdown__menu" data-menu>
    <input class="ease-dial-dropdown__search" type="text" placeholder="Search...">
    <div data-items>
      <div class="ease-dial-dropdown__item" data-code="+1" data-name="United States">...</div>
    </div>
  </div>
</div>
```
Toggle `is-open` on the container to show/hide. Set `is-selected` on the active item. The demo JS handles search filtering and selection sync.

## CSS Custom Properties
| Prop | Default | Description |
|------|---------|-------------|
| `--dropdown-bg` | `#1e293b` | Background of trigger and menu |
| `--flag-size` | `22px` | Width of flag elements |
| `--item-hover-bg` | `#334155` | Hover/selected item background |
| `--expand-duration` | `0.3s` | Dropdown expand animation speed |

## Why is it useful?
Dial code pickers are essential in international phone input forms, sign-up flows, and contact forms. The search filter makes it easy to find countries from a long list, and the flag + code display provides clear feedback on the current selection.
