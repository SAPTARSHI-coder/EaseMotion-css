# Tour Guide Popup

An interactive tour guide popup/modal that walks users through features with overlay blur, step counter, and arrow pointing to elements.

**Directory:** `ease-tour-guide-popup-ij`

## Features
- Overlay with backdrop blur
- Scale + opacity popup entrance
- Step counter (e.g. "1 / 4")
- Arrow pointing to highlighted element
- Skip button and Prev/Next navigation
- Keyboard support (Escape, Arrow keys)
- Staggered entrance animation

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--tgp-duration` | `0.35s` | Animation duration |
| `--tgp-popup-bg` | `#1e293b` | Popup background |
| `--tgp-overlay-bg` | `rgba(0,0,0,0.6)` | Overlay color |
| `--tgp-text-color` | `#e2e8f0` | Text color |
| `--tgp-radius` | `12px` | Border radius |
| `--tgp-shadow` | `0 16px 48px rgba(0,0,0,0.4)` | Box shadow |

## Usage
Open `demo.html` in a browser. Click "Start Tour" to begin the guided tour. Use Prev/Next buttons or arrow keys to navigate.
