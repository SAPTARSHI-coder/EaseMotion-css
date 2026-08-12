# Button Group Select

A toggle-bar-style button group with a smooth background-color transition on the active state.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bg-select-duration` | `0.25s` | Transition duration for active state change |
| `--bg-select-active-bg` | `#3b82f6` | Background of the active button |
| `--bg-select-inactive-bg` | `#1e1e2e` | Background of inactive buttons |
| `--bg-select-text-color` | `#ffffff` | Button text color |
| `--bg-select-border-color` | `#334155` | Border color between buttons |
| `--bg-select-radius` | `8px` | Border-radius of the group container |

## Usage

```html
<div class="btn-group" role="group">
  <button class="btn-group__item btn-group__item--active">Day</button>
  <button class="btn-group__item">Week</button>
</div>
```

Toggle the `btn-group__item--active` class to mark the selected button.
