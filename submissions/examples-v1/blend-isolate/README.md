# ease-blend-isolate

Mix-blend-mode utilities and isolation property. Part of `core/utilities.css`.

## Usage

```html
<div class="ease-blend-multiply">Blended content</div>
<div class="ease-isolate">Isolated stacking context</div>
```

## Variants

| Class                   | Description                  |
| ----------------------- | ---------------------------- |
| `ease-blend-normal`     | `mix-blend-mode: normal`     |
| `ease-blend-multiply`   | `mix-blend-mode: multiply`   |
| `ease-blend-screen`     | `mix-blend-mode: screen`     |
| `ease-blend-overlay`    | `mix-blend-mode: overlay`    |
| `ease-blend-difference` | `mix-blend-mode: difference` |
| `ease-blend-exclusion`  | `mix-blend-mode: exclusion`  |
| `ease-isolate`          | `isolation: isolate`         |

## Notes

- Blend modes affect how elements composite with their background
- `ease-isolate` creates a new stacking context to contain blend effects
- Great for creative overlays, image treatments, and hover effects

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** TBD
- **Files:** `style.css`, `demo.html`
