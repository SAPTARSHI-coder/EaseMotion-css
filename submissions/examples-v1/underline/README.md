# ease-underline

Animated underline effects for links and text using CSS ::after pseudo-elements and scaleX transitions. Zero JS required.

## Classes

| Class | Effect |
|---|---|
| `.ease-underline` | Slides in from left on hover |
| `.ease-underline-center` | Expands from center outward |
| `.ease-underline-right` | Slides in from right |
| `.ease-underline-thick` | 3px underline |
| `.ease-underline-primary` | Uses `--ease-color-primary` |
| `.ease-underline-gradient` | Gradient colored underline |
| `.ease-underline-always` | Always visible, animates on hover |

## Usage

```html
<a href="#" class="ease-underline ease-underline-primary">Learn more</a>

<h2 class="ease-underline-center ease-underline-gradient ease-underline-thick">
  Section Title
</h2>

<nav>
  <a href="#" class="ease-underline ease-underline-always">Home</a>
  <a href="#" class="ease-underline ease-underline-always">About</a>
</nav>
```

## How it works

Uses a `::after` pseudo-element with `scaleX` transform and `transform-origin` to create smooth directional underline animations on hover. No JavaScript needed.
