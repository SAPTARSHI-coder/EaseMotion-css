# CSS Sliding Door Effect

A classic before-and-after image comparison slider built **entirely with pure CSS**. It leverages native CSS `resize` capabilities and modern CSS Container Queries to performantly clip and reveal images without a single line of JavaScript.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes the native CSS `resize: horizontal` property to create a functional drag handle.
- **Container Queries Masking**: Solves the classic CSS image-squishing problem by applying `container-type: inline-size` to the parent wrapper, and `width: 100cqw` to the foreground image. This ensures the inner image perfectly matches the parent width, allowing the resizable wrapper to act cleanly as a clipping mask.
- **Custom Drag Handle**: Overrides the default browser resizer (`::-webkit-resizer`) with a custom, sleek SVG indicator in the bottom right corner, while passing click events through via `pointer-events: none`.
- **Responsive Aspect Ratio**: Uses `aspect-ratio: 16 / 9` to ensure the layout remains perfectly proportioned across all screen sizes.
- **Accessible & Responsive**: Fully responsive via container queries. Respects user preferences out of the box (requires no motion transitions).

## Usage

Drop the HTML structure into your layout. Replace the `src` attributes of the `.img-before` and `.img-after` tags with your own images. Ensure the images are identical in resolution and aspect ratio for the best effect.

```html
<main class="slider-wrapper">
  <div class="slider-aspect">
    <img class="img-before" src="before.jpg" alt="Before" />
    <div class="resize-container">
      <img class="img-after" src="after.jpg" alt="After" />
      <div class="drag-indicator">...</div>
    </div>
  </div>
</main>
```

## CSS Custom Properties
Easily customize the visual styling using the root variables in `style.css`:
- `--bg-color`: Page background color (default: `#f8fafc`)
- `--text-color`: Text color for instructions and icons (default: `#334155`)
- `--handle-color`: Color of the dividing line and grab indicator (default: `#ffffff`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge) that support CSS Container Queries (`100cqw`).
