# .ease-aspect-{auto,square,video,4-3,3-2,21-9} Utility Classes

Adds standalone `aspect-ratio` utility classes for images, videos, and media containers — no more custom CSS needed for common ratios.

## Problem

The card component uses `aspect-ratio: 16/9` internally for images, but there are no standalone `.ease-aspect-*` utilities. Users must write custom CSS for common ratios like 1:1, 4:3, 3:2, or 21:9.

## Proposed CSS to Add to `core/utilities.css`

```css
.ease-aspect-auto   { aspect-ratio: auto !important; }
.ease-aspect-square { aspect-ratio: 1 / 1 !important; }
.ease-aspect-video  { aspect-ratio: 16 / 9 !important; }
.ease-aspect-4-3    { aspect-ratio: 4 / 3 !important; }
.ease-aspect-3-2    { aspect-ratio: 3 / 2 !important; }
.ease-aspect-21-9   { aspect-ratio: 21 / 9 !important; }
```

## Usage

```html
<!-- Video thumbnail -->
<img class="ease-aspect-video" src="thumbnail.jpg" alt="Video">

<!-- Square profile photo -->
<img class="ease-aspect-square" src="avatar.jpg" alt="Avatar">

<!-- Cinematic 21:9 banner -->
<div class="ease-aspect-21-9 ease-bg-primary ease-center">
  Ultra-wide banner content
</div>

<!-- Classic 4:3 photo -->
<img class="ease-aspect-4-3" src="photo.jpg" alt="Photo">
```

## Benefits
- covers the most common web ratios (1:1, 16:9, 4:3, 3:2, 21:9)
- `auto` restores intrinsic sizing
- composes with `.ease-object-cover`, `.ease-w-full`, etc.
- uses `!important` to match EaseMotion utility convention

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — proposed CSS
