# CSS-Only Modals & Tooltips

Fixes #6946

## Overview

Pure CSS implementation of Modals and Tooltips with zero JavaScript, using EaseMotion CSS utility classes.

## Features

### Tooltips

- Reads text directly from `data-tooltip` HTML attribute via `::after` pseudo-element
- Smooth animated entrance with scale and translate
- Works on any element

### Modals

- Fully functional popup dialog using CSS `:target` pseudo-class
- Blurred backdrop via `backdrop-filter`
- Bouncy entrance animation
- Close via link to `#`

## Usage

### Tooltip

```html
<span class="ease-tooltip-trigger" data-tooltip="Your tooltip text">
  <button class="ease-btn ease-btn-primary">Hover me</button>
</span>
```

### Modal

```html
<a href="#my-modal" class="ease-btn ease-btn-primary">Open Modal</a>

<div id="my-modal" class="ease-modal-overlay">
  <div class="ease-modal-content">
    <a href="#" class="ease-modal-close-icon">&times;</a>
    <h3>Modal Title</h3>
    <p>Modal content here.</p>
    <a href="#" class="ease-btn ease-btn-outline">Close</a>
  </div>
</div>
```

## Files

- `style.css` — tooltip and modal styles
- `demo.html` — interactive demo with multiple tooltips and modals

## No JavaScript Required

Both components rely entirely on CSS pseudo-classes and pseudo-elements.
