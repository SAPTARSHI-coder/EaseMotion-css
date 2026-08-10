# CSS Expandable Search Overlay

A pure CSS search component that expands from a compact search icon into a full-screen search overlay.

## Features

- Pure CSS implementation
- Full-screen search experience
- Smooth fade and slide animation
- Responsive design
- Accessible labels
- No JavaScript required

## File Structure

```text
css-expandable-search-overlay-68544/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Component markup:

```html
<input type="checkbox" id="search-toggle" hidden>

<label for="search-toggle" class="search-button">
  🔍
</label>

<div class="search-overlay">
  <label for="search-toggle" class="close-button">✕</label>

  <div class="search-box">
    <input type="search" placeholder="Search anything...">
  </div>
</div>
```

## Accessibility

- Keyboard accessible toggle
- ARIA labels included
- Responsive layout for mobile and desktop

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Author

Created for EaseMotion CSS contribution #68544.