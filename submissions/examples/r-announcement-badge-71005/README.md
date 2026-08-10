# CSS Announcement Badge

A responsive CSS-only announcement badge for highlighting new updates on navigation links and action buttons.

## Features

- Pure CSS implementation
- Animated `NEW` announcement badge
- Subtle pulse and expanding ring animation
- Navigation and button examples
- Responsive layout
- Keyboard accessible links
- Visible focus states
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

Add the `badge` element beside a navigation item or button:

```html
<a href="#updates" class="nav-link announcement">
  Updates
  <span class="badge" aria-label="New announcement">NEW</span>
</a>