# Link Underline Slide (#36777)

A link with an animated underline that slides in from the left on hover.

## CSS Custom Properties

| Property           | Default   | Description           |
|--------------------|-----------|-----------------------|
| `--link-color`     | `#e0e0e0` | Link text color       |
| `--underline-color`| `#7aa2f7` | Underline color       |
| `--underline-height` | `2px`   | Underline thickness   |
| `--slide-duration` | `0.35s`   | Slide animation speed |

## Usage

```html
<a href="#" class="ease-link-underline">Link text</a>
```

Apply the class to any `<a>` element. The underline animates from 0 to full width on hover.
