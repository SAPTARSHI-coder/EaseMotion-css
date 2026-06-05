# Liquid Reveal Typography Stagger (`ease-text-liquid`)

An ultra-premium, cinematic typography text reveal where an organic purple fluid wave sweeps completely in front of the interface workspace first, cleanly revealing sharp, legible pink header letters directly behind its trailing path.

## Operational Architecture

To prevent text readability degradation or jagged edge blurring across browser engines, the codebase isolates the design parameters across separate rendering layers:

1. **The Foreground Gooey Layer Overlay:** An independent layout container applying an SVG blur filter (`feGaussianBlur`) and contrast matrix (`feColorMatrix`) to synthesize a realistic fluid wave passing directly in front of the typography string plane.
2. **The Background Typography Mask:** The text layer initiates at `opacity: 0` and employs an entry `clip-path: inset()` reveal vector carefully synchronized right behind the foreground wave path timeline to ensure the text remains perfectly crisp and readable.

## Directory Tree Manifest

- `demo.html`: Independent standalone preview stage engine workspace.
- `style.css`: Composed native CSS animation classes and keyframes.

## Usage Layout Integration

```html
<div class="ease-liquid-text-stage">
  <div class="ease-liquid-filter-container">
    <div class="ease-liquid-wave-blob"></div>
  </div>
  <h1 class="ease-liquid-text-strata">Your Text Here</h1>
</div>
```

## Author

Pari Dubey
