# Auto Complete Input

An input with autocomplete suggestions that filter as the user types. Selected items become chips.

## Features

- Filtered dropdown with fade + scale animation
- Chip display for selected items with scale-in animation
- Simulated async loading spinner
- Clear button and keyboard support (Enter, Escape)
- Click-outside to close

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--aci-duration` | `0.2s` | Animation duration |
| `--aci-input-bg` | `#1e293b` | Input background |
| `--aci-dropdown-bg` | `#1e293b` | Dropdown background |
| `--aci-highlight-color` | `#f59e0b` | Highlight / focus color |
| `--aci-chip-color` | `#f59e0b` | Chip background |
| `--aci-radius` | `8px` | Border radius |

## Usage

```html
<div class="aci-wrapper">
  <div class="aci-input-wrap">
    <input class="aci-input" ...>
  </div>
  <ul class="aci-dropdown"></ul>
</div>
```

Populate the dropdown dynamically with `.open` class to show.
