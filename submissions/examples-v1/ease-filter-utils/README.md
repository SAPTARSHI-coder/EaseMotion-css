# ease-filter utilities

Element-level CSS `filter` utilities for blur, brightness, and grayscale effects on images and other content.

## Class reference

| Class                 | CSS Value         | Visual Effect                     |
| --------------------- | ----------------- | --------------------------------- |
| `.ease-blur-sm`       | `blur(4px)`       | Light soft blur                   |
| `.ease-blur`          | `blur(8px)`       | Medium blur                       |
| `.ease-blur-lg`       | `blur(16px)`      | Strong blur                       |
| `.ease-brightness-50` | `brightness(0.5)` | Half brightness, darker image     |
| `.ease-grayscale`     | `grayscale(1)`    | Full grayscale (black and white)  |
| `.ease-grayscale-0`   | `grayscale(0)`    | Removes grayscale, restores color |

## Usage

```html
<img
  class="ease-grayscale grayscale-hover"
  src="photo.svg"
  alt="Hover to restore color"
/>
```

```css
.grayscale-hover {
  transition: filter 0.3s ease;
}
.grayscale-hover:hover {
  filter: grayscale(0); /* same as .ease-grayscale-0 */
}
```

## Combining filters

Multiple filters can be combined by stacking `filter` values in a custom inline style or a custom class:

```html
<img
  style="filter: blur(2px) brightness(0.7) grayscale(0.5);"
  src="photo.svg"
  alt="Combined"
/>
```

## Element vs backdrop

These utilities apply `filter` to the element itself. This is different from `backdrop-filter` (such as `.ease-backdrop-blur`), which blurs or modifies what appears **behind** the element. Use element-level filters to style photos, icons, and cards; use backdrop filters for glassmorphism overlays.
