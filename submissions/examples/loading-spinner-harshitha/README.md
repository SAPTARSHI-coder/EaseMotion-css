# Loading Spinner (Pure CSS)

A responsive, pure CSS loading spinner example.

## Features
- No JavaScript (HTML + CSS only)
- Smooth infinite rotation animation
- Responsive sizing
- Customizable via CSS variables

## Folder
`submissions/examples/loading-spinner-harshitha/`

## Usage
### 1) Include the CSS
```html
<link rel="stylesheet" href="./style.css" />
```

### 2) Add the spinner element
```html
<div class="ease-loading-spinner-harshitha" role="status" aria-label="Loading"></div>
```

### Customization (CSS variables)
- `--size`: sets width/height
- `--color`: sets spinner accent color

Example:
```html
<div
  class="ease-loading-spinner-harshitha"
  style="--size: 3rem; --color: #4f46e5;"
  role="status"
  aria-label="Loading"
></div>
```

## Accessibility
Use `role="status"` and `aria-label` (or `aria-live`) so screen readers understand it indicates loading.

