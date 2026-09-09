# Ribbon Badge Strap

A ribbon/badge component with a smooth fold animation. The ribbon appears to unfold from a folded state with rotation, revealing badge text. Supports multiple positions and a remove animation.

## Features

- Fold/unfold rotation animation
- Top-left and top-right positioning
- Toggle and remove controls
- Pseudo-element for the folded corner
- Customizable via CSS custom properties

## Usage

```html
<div class="ribbon-wrap top-left">
  <div class="ribbon" id="myRibbon">
    <span class="ribbon-text">New!</span>
    <div class="ribbon-fold"></div>
  </div>
</div>
```

Add the `active` class to show the ribbon, `inactive` to hide it.

## Custom Properties

| Property            | Default         | Description                  |
|---------------------|-----------------|------------------------------|
| `--rbs-duration`    | `0.5s`          | Fold/unfold animation duration|
| `--rbs-ribbon-color`| `#e74c3c`       | Ribbon background color      |
| `--rbs-text-color`  | `#ffffff`       | Badge text color             |
| `--rbs-fold-color`  | `#c0392b`       | Fold triangle color          |
| `--rbs-shadow`      | `rgba(0,0,0,0.2)` | Ribbon box-shadow color   |
