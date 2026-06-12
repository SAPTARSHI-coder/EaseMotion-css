# Object-Fit Utilities (ease-object-fit)

Object-fit utilities for images — cover, contain, fill, and center.

## Files

| File                        | Description       |
| --------------------------- | ----------------- |
| 📄 [demo.html](./demo.html) | Interactive demo  |
| 🎨 [style.css](./style.css) | Object-fit styles |
| 📖 [README.md](./README.md) | Documentation     |

## Classes

| Class                 | CSS Value         | Effect                    |
| --------------------- | ----------------- | ------------------------- |
| `ease-object-cover`   | `cover`           | Fills container, may crop |
| `ease-object-contain` | `contain`         | Fits inside, letterboxed  |
| `ease-object-fill`    | `fill`            | Stretches to fill         |
| `ease-object-center`  | `none` + `center` | No scaling, centered      |

## Usage

```html
<!-- Cover - fills container, may crop -->
<img class="ease-object-cover" src="image.jpg" alt="Image" />

<!-- Contain - fits inside, may have letterbox -->
<img class="ease-object-contain" src="image.jpg" alt="Image" />

<!-- Fill - stretches to fill container -->
<img class="ease-object-fill" src="image.jpg" alt="Image" />

<!-- Center - no scaling, centered -->
<img class="ease-object-center" src="image.jpg" alt="Image" />
```
