# Diamond Facet Edge Hover

A geometric pure CSS hover effect inspired by the sharp reflective facets and edges of a diamond.

## Features

- Pure HTML and Vanilla CSS
- No JavaScript
- Diamond-inspired geometric animation
- Animated facet borders
- Glowing edge effect
- Smooth hover transitions
- Dark mode compatible
- Responsive layout
- Keyboard focus support
- Reduced-motion accessibility support
- Hardware-friendly CSS transforms

## Demo

The demo contains three variations:

- Blue Diamond Facet
- Purple Diamond Facet
- Cyan Diamond Facet

Hover over any card to reveal the animated geometric facets and glowing edges.

## Technologies

- HTML5
- CSS3
- CSS Transforms
- CSS Transitions
- CSS Media Queries
- CSS `color-mix()`

## Usage

Open `demo.html` in a modern browser.

Example:

```html
<a class="facet-card facet-blue" href="#">
  <span class="facet-glow"></span>

  <span class="facet-edge edge-top"></span>
  <span class="facet-edge edge-right"></span>
  <span class="facet-edge edge-bottom"></span>
  <span class="facet-edge edge-left"></span>

  <span class="card-content">
    <span class="card-icon">◇</span>
    <strong>Explore</strong>
    <small>Diamond Facet</small>
  </span>
</a>