# .ease-object-{fill,contain,cover,none,scale-down} & .ease-object-{center,top,bottom,left,right}

Adds `object-fit` and `object-position` utility classes for images and videos.

## Problem

Images in EaseMotion card layouts use `object-fit: cover` internally, but the property is never exposed as a reusable utility. Media outside `.ease-card-image` reverts to `object-fit: fill`, causing distortion when constrained by aspect-ratio utilities or grid cells.

## Proposed CSS to Add to `core/utilities.css`

```css
.ease-object-fill       { object-fit: fill !important; }
.ease-object-contain    { object-fit: contain !important; }
.ease-object-cover      { object-fit: cover !important; }
.ease-object-none       { object-fit: none !important; }
.ease-object-scale-down { object-fit: scale-down !important; }

.ease-object-center { object-position: center !important; }
.ease-object-top    { object-position: top !important; }
.ease-object-bottom { object-position: bottom !important; }
.ease-object-left   { object-position: left !important; }
.ease-object-right  { object-position: right !important; }
```

## Usage

```html
<!-- Cover image in a square aspect ratio -->
<img class="ease-aspect-square ease-object-cover ease-w-full"
     src="wide-photo.jpg" alt="Cover">

<!-- Contain with top alignment -->
<img class="ease-h-48 ease-object-contain ease-object-top"
     src="tall-artwork.png" alt="Artwork">

<!-- Fill (default, explicit) -->
<img class="ease-aspect-video ease-object-fill"
     src="banner.jpg" alt="Banner">
```

## Benefits
- Mirrors CSS property naming for discoverability
- Composes with `.ease-aspect-*`, `.ease-w-full`, `.ease-h-*` utilities
- Uses `!important` to match EaseMotion utility convention

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — proposed CSS
