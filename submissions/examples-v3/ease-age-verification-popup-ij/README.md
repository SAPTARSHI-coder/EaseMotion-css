# Ease: Age Verification Popup

An age verification overlay that appears on page load. The popup scales in with a blur backdrop. Confirming hides the content; rejecting shows a sad animation. The choice can be remembered via `localStorage`.

## Features

- Scale + opacity popup entrance with elastic easing
- Backdrop blur overlay with fade transition
- Shake animation on rejection
- Confirm/reject buttons with hover scale effects
- `localStorage` persistence for remembered choice
- Fully customizable via custom properties

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--avp-duration` | `0.35s` | Transition duration |
| `--avp-popup-bg` | `#ffffff` | Popup background color |
| `--avp-overlay-bg` | `rgba(0,0,0,0.55)` | Overlay background color |
| `--avp-btn-color` | `#4f46e5` | Button accent color |
| `--avp-radius` | `16px` | Popup and button border radius |
| `--avp-shadow` | `0 20px 60px rgba(0,0,0,0.2)` | Popup box shadow |

## Usage

```html
<div class="avp-overlay" id="avpOverlay">
  <div class="avp-popup" id="avpPopup">
    <!-- content -->
  </div>
</div>
```

JavaScript controls `.avp-exit` and `.avp-rejected` classes. Import `style.css` and ensure Inter font is available.