# ease-morph-shape

Shape smoothly morphs between different geometries (circle, triangle, square, hexagon, star) on button click.

## Usage

Include `style.css` in your page. The SVG path morphs using CSS `transition: d 0.5s cubic-bezier(...)` when the `d` attribute is updated via JavaScript.

### HTML Structure

```html
<div class="container">
  <div class="morph-wrapper">
    <div class="morph-preview">
      <svg viewBox="0 0 200 200">
        <path id="morphPath" fill="var(--accent)" />
      </svg>
    </div>
    <div class="morph-controls">
      <button data-shape="circle">Circle</button>
      <button data-shape="triangle">Triangle</button>
    </div>
  </div>
</div>
```

### JavaScript API

```js
const path = document.getElementById('morphPath');
path.setAttribute('d', 'M100,20 L180,170 L20,170 Z'); // morphs to triangle
```

Key uses `d` attribute transitions — works in Chromium browsers. For full cross-browser support, consider a library like `flubber`.
