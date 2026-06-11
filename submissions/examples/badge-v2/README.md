# ease-badge

Animated status/notification badges with pulse ring, color variants, and positioning helpers. Zero JavaScript required.

## Usage

```html
<!-- Standalone badge -->
<span class="ease-badge ease-badge-danger">3</span>

<!-- Badge on an element -->
<span class="ease-badge-wrapper">
  <button>Inbox</button>
  <span class="ease-badge ease-badge-danger">9</span>
</span>
```

## Color Variants

| Class | Color |
|---|---|
| `ease-badge-danger` | Red `#ef4444` |
| `ease-badge-success` | Green `#22c55e` |
| `ease-badge-warning` | Amber `#f59e0b` |
| `ease-badge-info` | Blue `#3b82f6` |

## Style Variants

| Class | Description |
|---|---|
| `ease-badge-dot` | Dot indicator (no number) |
| `ease-badge-pulse` | Animated pulse ring |
| `ease-badge-sm` | Small size |
| `ease-badge-lg` | Large size |

## Positioning Helpers

Wrap the target element with `ease-badge-wrapper`, then add a position modifier:

| Class on wrapper | Badge position |
|---|---|
| (none) | Top-right (default) |
| `ease-badge-top-left` | Top-left |
| `ease-badge-bottom-right` | Bottom-right |
| `ease-badge-bottom-left` | Bottom-left |

## Example — Live indicator dot

```html
<span class="ease-badge-wrapper ease-badge-bottom-right">
  <img src="avatar.png" />
  <span class="ease-badge ease-badge-dot ease-badge-success ease-badge-pulse"></span>
</span>
```

## Submission

- **Author:** sudha09-git
- **Issue:** #3827
- **Files:** `style.css`, `demo.html`
