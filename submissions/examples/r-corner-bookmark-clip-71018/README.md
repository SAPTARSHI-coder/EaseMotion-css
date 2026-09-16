# CSS Corner Bookmark Clip

A responsive card component featuring a decorative corner bookmark created entirely with CSS `clip-path`.

## Features

- Pure CSS implementation
- Corner bookmark using `clip-path`
- Three reusable card variations
- Smooth hover interaction
- Animated bookmark and icon
- Keyboard-accessible cards
- Visible `:focus-visible` state
- Responsive desktop, tablet, and mobile layouts
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Interactive component demonstration
- `style.css` — Component styling and clip-path bookmark
- `README.md` — Feature documentation

## Usage

Add the `bookmark-card` class to an anchor element:

```html
<a
  class="bookmark-card"
  href="#featured"
  aria-label="View featured design"
>
  <span class="bookmark" aria-hidden="true">
    <span>NEW</span>
  </span>

  <span class="card-content">
    <span class="card-label">Featured</span>
    <span class="card-title">Creative Motion</span>
    <span class="card-description">
      Explore smooth CSS interactions.
    </span>
  </span>
</a>