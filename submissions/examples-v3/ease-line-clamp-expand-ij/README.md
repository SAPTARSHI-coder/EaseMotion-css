# Line Clamp Expand (#36774)

A line-clamp component with a read-more / show-less toggle that expands smoothly.

## CSS Custom Properties

| Property          | Default   | Description             |
|-------------------|-----------|-------------------------|
| `--text-color`    | `#e0e0e0` | Text color              |
| `--bg-color`      | `#1a1a1a` | Card background color   |
| `--clamp-lines`   | `2`       | Lines to show collapsed |
| `--expand-duration` | `0.4s`  | Expand transition speed |

## Usage

```html
<div class="ease-line-clamp">
  <input type="checkbox" id="t1" class="clamp-trigger" hidden>
  <p class="clamp-text">Long text here...</p>
  <label for="t1" class="clamp-btn"></label>
</div>
```

The hidden checkbox drives the toggle state. The `clamp-btn` label shows "Read more" / "Show less" automatically.
