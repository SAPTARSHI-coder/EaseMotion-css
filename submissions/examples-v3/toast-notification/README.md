# Toast Notification Component

## What does this do?
A fully animated toast notification system with stacking, 5 position
variants, 4 type variants (success, error, warning, info), auto-dismiss,
and manual close — pure CSS + minimal JS.

## Usage

```html
<link rel="stylesheet" href="style.css">

<script>
  showToast('File saved!', 'success', 3000, 'top-right');
</script>
```

## Position variants
| Class modifier         | Position       |
|------------------------|----------------|
| `--top-right`          | Top right      |
| `--top-left`           | Top left       |
| `--top-center`         | Top center     |
| `--bottom-right`       | Bottom right   |
| `--bottom-left`        | Bottom left    |

## Type variants
`success` · `error` · `warning` · `info`

## Why it fits EaseMotion CSS
Fills a gap in the submissions directory. Uses CSS animations, respects
`prefers-reduced-motion`, and follows the framework's dark-first design.