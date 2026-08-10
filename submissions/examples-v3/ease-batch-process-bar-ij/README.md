# ease-batch-process-bar

A batch processing progress bar that visualizes multiple items being processed sequentially. Each item animates in with a slight overshoot effect, providing clear feedback on processing progress.

## HTML Structure

```html
<div class="ease-batch-process" id="myBatch">
  <div class="ease-batch-item"></div>
  <div class="ease-batch-item"></div>
  <div class="ease-batch-item"></div>
  <!-- ... one per item -->
</div>
```

Trigger by adding `ease-batch-item--active` class to items with staggered animation delays (`animation-delay: N * duration`). Mark completed items with `ease-batch-item--done`.

## CSS Variables

| Variable             | Default    | Description                            |
|----------------------|------------|----------------------------------------|
| `--bar-height`       | `24px`     | Height of the progress bar             |
| `--bar-bg`           | `#e5e7eb`  | Background color of the empty bar      |
| `--process-color`    | `#4f46e5`  | Color of the processing segments       |
| `--process-duration` | `2s`       | Duration of each item's processing     |

## Example

```html
<div class="ease-batch-process" style="--process-duration: 0.8s; --process-color: #059669;">
  <div class="ease-batch-item"></div>
  <div class="ease-batch-item"></div>
  <div class="ease-batch-item"></div>
</div>
```

With JS stagger: each item's `animation-delay = i * processDuration`.
