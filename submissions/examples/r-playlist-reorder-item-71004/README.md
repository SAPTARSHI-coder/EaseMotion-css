# CSS Playlist Reorder Item

A responsive CSS-only playlist item featuring a drag handle and subtle hover lift interaction.

## Features

- Pure CSS implementation
- Playlist-style component
- Reorder drag-handle UI
- Smooth hover lift effect
- Multiple track examples
- Responsive layout
- Keyboard-accessible buttons
- Visible focus states
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

A playlist item can be structured using the following markup:

```html
<article class="track">
  <button
    class="drag-handle"
    type="button"
    aria-label="Reorder Midnight Drive"
  >
    <span aria-hidden="true">⋮⋮</span>
  </button>

  <div class="cover purple" aria-hidden="true">M</div>

  <div class="track-info">
    <h2>Midnight Drive</h2>
    <p>Neon Avenue</p>
  </div>

  <span class="duration">3:42</span>
</article>