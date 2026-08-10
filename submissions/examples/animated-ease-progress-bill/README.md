# ease-progress-fill

Animated progress bar that fills to a target width on load.

## Usage

```html
<div class="ease-progress">
  <div class="ease-progress-bar" style="--progress: 75%;"></div>
</div>
```

Set the `--progress` custom property to any percentage to control the fill target.

## Notes

- Animation runs once on load/render (fill from 0 to target).
- To re-trigger on demand, remove and re-append the `.ease-progress-bar` node.

## Browser support

All modern browsers with CSS custom property support.