# ease-btn-loading

A pure-CSS loading spinner state for EaseMotion CSS buttons.

## Usage

Add the `.ease-btn-loading` class to any `.ease-btn` element:

```html
<button class="ease-btn ease-btn-primary ease-btn-loading">
  Submit
</button>
```

## How it works

- Hides button text via `color: transparent`
- Hides child elements via `visibility: hidden`
- Shows a spinning circle using the `::after` pseudo-element
- Disables clicks via `pointer-events: none`
- Respects `prefers-reduced-motion`

## Works with all variants

| Class | Works with loading |
|---|---|
| `ease-btn-primary` | ✅ |
| `ease-btn-success` | ✅ |
| `ease-btn-danger` | ✅ |
| `ease-btn-outline` | ✅ |
| `ease-btn-ghost` | ✅ |
| `ease-btn-sm / lg / xl` | ✅ |
| `ease-btn-pill` | ✅ |

## Accessibility

- Spinner animation is disabled for users with `prefers-reduced-motion: reduce`
- `pointer-events: none` prevents accidental double-clicks