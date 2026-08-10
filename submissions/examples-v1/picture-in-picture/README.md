# :picture-in-picture

Demonstrates styling video elements while they are in Picture-in-Picture mode using the `:picture-in-picture` pseudo-class.

## Usage

```css
video:picture-in-picture {
  border-radius: 0;
  box-shadow: none;
}

/* Show a PiP badge when the video enters PiP */
.container:has(video:picture-in-picture) .pip-badge {
  display: block;
}
```

## What's Shown

- **Border radius removed** in PiP mode for cleaner floating window
- **PiP overlay badge** — appears only when video is in PiP, using `:has()`
- **Bordered variant** — border color changes and outline appears in PiP

## Key Insight

`:picture-in-picture` lets you strip away chrome (rounded corners, shadows) that looks awkward in the small PiP floating window, and show contextual overlays (badges, controls) that only make sense during PiP playback. Combined with `:has()` on the parent container, you can create rich PiP-aware UI.

## Browser Support

- Chrome 69+, Edge 79+, Safari 13.1+, Firefox 132+
- Not supported in some mobile browsers

## Submission

- **Issue:** #12304
- **Files:** style.css, demo.html
