# Glass Card Contrast Patch (-pr)

This submission resolves a severe WCAG accessibility contrast failure in `components/cards.css` regarding the Glassmorphism card component.

## What does this do?
It introduces a new semantic modifier class: `.ease-glass-inverted`. When applied alongside `.ease-card-glass`, it intelligently inverts the text colors to white, brightens the translucent border, and adjusts the alpha background specifically for use over dark gradients or hero images.

## How is it used?
```html
<!-- Used over a dark background or image -->
<div class="ease-card ease-card-glass ease-glass-inverted">
  <div class="ease-card-body">
    <h3 class="ease-card-title">Readable Text!</h3>
  </div>
</div>
```

## Why is it useful?
The core framework's `.ease-card-glass` hardcodes the text color to `#1e293b` (slate-800). Because glass cards are transparent, placing them over a dark image causes the dark text to blend into the dark background, completely failing WCAG AA contrast ratios. By merging this patch, the maintainer provides developers with a much-needed tool to build accessible glass interfaces on dark canvases!
