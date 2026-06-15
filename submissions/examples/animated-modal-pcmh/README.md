# Animated Modal — Issue #7521

## Overview

Modal/dialog with backdrop overlay, slide-down entrance, close button, click-outside-to-close, Escape key, scroll lock, and 3 sizes.

## Sizes

| Size | Class | Max Width |
|------|-------|-----------|
| Small | `.ease-modal-sm` | 320px |
| Default | `.ease-modal` | 480px |
| Large | `.ease-modal-lg` | 640px |

## Features

- Fade-in backdrop overlay
- Slide-down entrance animation
- Close button (×) in header
- Click outside to close
- Escape key support
- Body scroll lock
- Header, body, footer sections

## Usage

```html
<div class="ease-modal-overlay" id="overlay"></div>
<div class="ease-modal" id="modal">
  <div class="ease-modal-header">
    <span class="ease-modal-title">Title</span>
    <button class="ease-modal-close">&times;</button>
  </div>
  <div class="ease-modal-body"><p>Content</p></div>
  <div class="ease-modal-footer">
    <button class="btn">Cancel</button>
    <button class="btn btn-primary">Confirm</button>
  </div>
</div>
```

## Files

- `demo.html` — Three modals (sm, md, lg) with examples
- `style.css` — Overlay, modal, animations, header/body/footer
- `README.md` — This documentation
