# 3D Perspective Tilt Product Tabs

A pure CSS animated tabs component designed for modern product catalog
interfaces.

The component uses a smooth 3D perspective tilt interaction when users
hover over or select product categories.

## Features

- Pure HTML and CSS
- No JavaScript
- 3D perspective tilt interaction
- Smooth tab transitions
- Responsive product catalog layout
- Keyboard focus support
- Reduced-motion support
- Customizable animation parameters
- Self-contained demo

## Demo

Open `demo.html` directly in a browser.

No server, build tool, CDN, or external framework is required.

## Usage

The tabs use native radio inputs and labels:

```html
<div class="tabs">

  <input
    type="radio"
    name="product-tab"
    id="featured-tab"
    checked
  >

  <label for="featured-tab" class="tab">
    Featured
  </label>

  <input
    type="radio"
    name="product-tab"
    id="new-tab"
  >

  <label for="new-tab" class="tab">
    New Arrivals
  </label>

</div>