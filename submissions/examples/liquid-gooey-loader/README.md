# Liquid Gooey Loader Animation

A loading spinner where multiple circles rotate and merge organically, simulating fluid surface tension.

## Features
- Utilizes an inline SVG filter with `feGaussianBlur` and `feColorMatrix`
- Applies CSS `filter: url(#goo)` to create a liquid/gooey effect
- Smooth orbit animation using staggered delays

## Usage
Include the inline SVG definition anywhere in your HTML (usually right after `<body>`), and apply the `filter: url(#goo)` to a container with animated child elements.

```html
<svg style="width: 0; height: 0; position: absolute;">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
    </filter>
  </defs>
</svg>

<div class="gooey-loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

## Browser Support
- Chrome, Firefox, Safari, Edge (Modern versions supporting SVG filters in CSS)

## Tech Stack
- HTML + CSS (Inline SVG required for the filter definition)
