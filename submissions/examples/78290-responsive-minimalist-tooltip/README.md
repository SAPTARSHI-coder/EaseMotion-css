# Responsive Tooltip with Minimalist Styling

A clean, responsive and accessible tooltip component built entirely with HTML and CSS.

## Features

- Minimalist visual design
- Four tooltip positions:
  - Top
  - Right
  - Bottom
  - Left
- Responsive layout
- Mobile-friendly tooltip positioning
- Hover interaction
- Keyboard focus interaction
- Smooth entrance animation
- Accessible `role="tooltip"` markup
- `aria-describedby` relationships
- Reduced-motion support
- Pure HTML and CSS
- No JavaScript dependency

## Files

- `demo.html` — component markup and examples
- `style.css` — styling, positioning, animations and responsive behavior

## Usage

Open `demo.html` directly in a browser.

The tooltip can be reused by wrapping a trigger element inside `.tooltip-wrap` and positioning the tooltip using one of:

```html
<div class="tooltip-wrap tooltip-top">
  <button class="tooltip-trigger">
    Hover me
  </button>

  <span class="tooltip" role="tooltip">
    Helpful information
  </span>
</div>