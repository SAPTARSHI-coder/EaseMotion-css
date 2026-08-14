# CSS Elastic Scroll Indicator

A responsive CSS-only scroll panel with elastic visual indicators at the top and bottom of the content area.

## Features

- Pure CSS implementation
- Elastic top and bottom indicators
- Smooth animated indicator bars
- Scrollable content panel
- Responsive layout
- Custom scrollbar styling
- Hover feedback on content cards
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styles
- `README.md` — Documentation

## Usage

Create a scrollable container with the following structure:

```html
<div class="scroll-demo">
  <div class="elastic-top" aria-hidden="true">
    <span></span>
  </div>

  <div class="scroll-content">
    <!-- Scrollable content -->
  </div>

  <div class="elastic-bottom" aria-hidden="true">
    <span></span>
  </div>
</div>