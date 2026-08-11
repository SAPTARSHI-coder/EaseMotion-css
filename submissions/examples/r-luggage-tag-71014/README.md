# CSS Luggage Tag

A travel-inspired luggage tag component created with pure HTML and CSS.

## Features

- Traveler name and destination
- Airport information
- Decorative luggage tag styling
- CSS-only airplane icon
- Dashed inner border
- Hanging tag hole
- Subtle hover interaction
- Responsive layout
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styles
- `README.md` — Documentation

## Usage

The component can be added to a page using the `.luggage-tag` class.

```html
<article class="luggage-tag">
  <div class="tag-hole" aria-hidden="true"></div>

  <div class="tag-top">
    <span class="tag-brand">EASEMOTION</span>
    <span class="tag-code">TRAVEL / 26</span>
  </div>

  <div class="destination">
    <span class="small-label">DESTINATION</span>
    <strong>PARIS</strong>
    <span class="airport">CDG · FRANCE</span>
  </div>

  <div class="traveler">
    <span class="small-label">TRAVELER</span>
    <strong>Richa Chauhan</strong>
  </div>
</article>