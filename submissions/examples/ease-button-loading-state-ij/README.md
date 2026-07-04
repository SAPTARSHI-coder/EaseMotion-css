# Button Loading State

Interactive buttons that display a CSS border-based spinner during an async operation, then resolve to a "Done" state.

## Usage

Add the `btn-loading` class to a `<button>`. When clicked, the button enters a loading state (inline spinner via `::after`), then transitions to a done state before resetting.

```html
<button class="btn-loading" data-duration="1500">Submit</button>
```

## Custom Properties

| Property                    | Default  | Description              |
| --------------------------- | -------- | ------------------------ |
| `--btn-load-duration`       | `0.35s`  | Transition timing        |
| `--btn-load-spinner-color`  | `#ffffff`| Spinner border-top color |
| `--btn-load-bg`             | `#4f46e5`| Button background        |
| `--btn-load-text-color`     | `#ffffff`| Button text color        |
| `--btn-load-radius`         | `8px`    | Button border-radius     |

## States

- **idle** — default appearance
- **is-loading** — spinner visible, pointer-events disabled
- **is-done** — green background with "Done ✓" text, then auto-resets
