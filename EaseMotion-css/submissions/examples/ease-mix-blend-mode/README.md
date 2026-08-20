# Ease Mix Blend Mode Utilities

This feature introduces lightweight utility classes for the CSS `mix-blend-mode` property, enabling quick blending control over elements and their respective backgrounds.

## Utility Classes Available

| Class Name | CSS Property Value |
|--- |--- |
| `blend-normal` | `mix-blend-mode: normal;` |
| `blend-multiply` | `mix-blend-mode: multiply;` |
| `blend-screen` | `mix-blend-mode: screen;` |
| `blend-overlay` | `mix-blend-mode: overlay;` |
| `blend-darken` | `mix-blend-mode: darken;` |
| `blend-lighten` | `mix-blend-mode: lighten;` |
| `blend-color-dodge` | `mix-blend-mode: color-dodge;` |
| `blend-color-burn` | `mix-blend-mode: color-burn;` |
| `blend-difference` | `mix-blend-mode: difference;` |
| `blend-exclusion` | `mix-blend-mode: exclusion;` |
| `blend-hue` | `mix-blend-mode: hue;` |
| `blend-saturation` | `mix-blend-mode: saturation;` |
| `blend-color` | `mix-blend-mode: color;` |
| `blend-luminosity` | `mix-blend-mode: luminosity;` |

## How to Use

1. Ensure `style.css` is linked to your HTML file.
2. Apply the utility class to any child element you wish to blend with its container.

```html
<div class="background-container">
  <img class="blend-multiply" src="image.jpg" alt="Blended Image">
</div>
```
