# ease-lightbox

Pure CSS interactive lightbox gallery using URL fragment identifiers for state management.

## Issue Reference

Issue: #63668

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--lightbox-bg` | `rgba(0,0,0,0.92)` | Modal background |
| `--lightbox-transition` | `0.3s ease` | Animation duration |
| `--lightbox-overlay` | `rgba(0,0,0,0.85)` | Backdrop color |
| `--lightbox-caption-color` | `#c8c8d8` | Caption text color |
| `--lightbox-thumbnail-active-border` | `#667eea` | Active thumbnail border |

## How It Works

Uses CSS `:target` pseudo-class — clicking an anchor with `href="#lightbox-N"` sets that ID as the URL fragment, triggering `:target` styles that show the modal. The close button is a bare `href="#"` that clears the fragment.

## Features

- Pure CSS open/close via `:target`
- Prev/next navigation between images
- Thumbnail strip at bottom
- Caption text per image
- Blurred backdrop overlay
- Hover zoom effect on thumbnails
- Active thumbnail highlighting
- Dark/light mode support
- Reduced motion support
- Mobile responsive layout
