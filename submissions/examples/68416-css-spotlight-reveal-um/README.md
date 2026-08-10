# CSS Hover Spotlight Reveal

An interactive card grid where a localized spotlight radial glow follows the cursor on hover, highlighting container borders and content.

## Features

- Dynamic cursor tracking (`--mouse-x` and `--mouse-y` variables mapping)
- Spotlight border masking utilizing WebKit mask XOR logic
- Smooth transitions for spotlight opacity on entry and exit
- Completely responsive grid layout
- Accessible focus outlines and `tabindex` parameters for key-navigators
- Automatically hidden overlays under `prefers-reduced-motion` settings
- Zero external Javascript library file size overhead

## Files

- `demo.html` — presentation page featuring grid cards tracking the cursor glow
- `style.css` — styling variables, border masking math, glow gradients, transitions, and accessibility options

## Usage

Include the structure below in your layout page and link `style.css`:

```html
<div class="ease-spotlight-card" tabindex="0"
     onmousemove="this.style.setProperty('--mouse-x', (event.clientX - this.getBoundingClientRect().left) + 'px'); this.style.setProperty('--mouse-y', (event.clientY - this.getBoundingClientRect().top) + 'px')">
  <div class="icon-wrapper" aria-hidden="true">
    <!-- SVG Icon -->
  </div>
  <h2>Card Header</h2>
  <p>Description goes here.</p>
</div>
```

## CSS Custom Properties

```css
:root {
  --glow-color:     rgba(59, 130, 246, 0.15); /* Spotlight radial mask color */
  --spotlight-sz:   300px;                    /* Spotlight diameter */
}
```

## Issue

EaseMotion CSS issue #68416.
