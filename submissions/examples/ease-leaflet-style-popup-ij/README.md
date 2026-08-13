# Leaflet-Style Popup

Map marker-style popups that animate in with a scale + fade transition and feature a downward-pointing arrow.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lsp-duration` | `0.25s` | Popup open/close transition duration |
| `--lsp-popup-bg` | `#1e1e2a` | Popup background color |
| `--lsp-shadow` | `0 8px 30px rgba(0,0,0,0.45)` | Popup box shadow |
| `--lsp-radius` | `10px` | Popup border radius |
| `--lsp-arrow-size` | `12px` | Arrow dimension (border-width) |
| `--lsp-arrow-color` | `#1e1e2a` | Arrow fill color |

## Usage

```html
<div class="marker" data-popup="popup1">
  <div class="marker-pin"></div>
  <div class="popup" id="popup1">
    <button class="popup-close">&times;</button>
    <h3>Title</h3>
    <p>Description text.</p>
    <div class="popup-arrow"></div>
  </div>
</div>
```

Toggle the `popup--open` class to show/hide a popup.
