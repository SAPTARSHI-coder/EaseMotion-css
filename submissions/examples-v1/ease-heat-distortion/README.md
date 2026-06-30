# ease-heat-distortion

Shimmering heat-wave distortion on hover using an SVG `feTurbulence` + `feDisplacementMap` filter.

## Usage

Include the hidden SVG filter definition once in your HTML, then add `.ease-heat-distortion` to any element.

```html
<svg class="ease-heat-filter" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="heat" ...>...</filter>
  </defs>
</svg>

<div class="ease-heat-distortion">Content</div>
```

## Why it fits EaseMotion CSS

SVG filter + CSS class. The distortion intensity and frequency are SVG attributes — easy to tune. The class itself is a single line.
