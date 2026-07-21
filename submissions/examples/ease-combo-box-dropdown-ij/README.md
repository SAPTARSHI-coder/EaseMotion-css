# ease-combo-box-dropdown

> Issue #36562 — Combo box dropdown with smooth expand.

A read-only combo-box (select-like) input that reveals a dropdown list with a smooth scale + fade transition.

## CSS Custom Properties

| Property           | Default    | Description                                 |
| ------------------ | ---------- | ------------------------------------------- |
| `--input-bg`       | `#1e1e2e`  | Background of the text input                |
| `--dropdown-bg`    | `#181825`  | Background of the dropdown panel            |
| `--expand-duration`| `0.25s`    | Duration of the expand/collapse transition  |
| `--item-hover-bg`  | `#313244`  | Background of a dropdown item on hover      |

## Usage

```html
<link rel="stylesheet" href="https://unpkg.com/easemotion/css/combo-box-dropdown.css" />

<div class="combo-box-dropdown">
  <input class="combo-input" type="text" readonly />
  <div class="dropdown-list">
    <div class="dropdown-item" data-value="react">React</div>
    <div class="dropdown-item" data-value="vue">Vue</div>
  </div>
</div>
```

Toggle the dropdown by adding/removing class `open` on `.dropdown-list`. Item highlighting uses `.dropdown-item:hover` and an optional `.highlighted` class for keyboard navigation.

## Animation

`.dropdown-list` transitions from `opacity: 0; translateY(-8px) scaleY(0.96)` to full visibility using `--expand-duration` with an `ease` timing. `transform-origin: top center` makes it expand downward from the input.
