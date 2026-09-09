# Backdrop Filter Utilities

## What does this do?

Provides CSS utility classes for backdrop-filter effects including blur, brightness, contrast, saturation, and grayscale — enabling frosted glass and visual depth effects for modern UI.

## How is it used?

```html
<!-- Frosted glass card -->
<div class="glass-card backdrop-blur-md">
  This card has a frosted glass effect.
</div>

<!-- Full glassmorphism card -->
<div class="glass-card backdrop-glassmorphism">
  Full glassmorphism with blur + brightness + saturation.
</div>
```

### Available Blur Classes

| Class               | Effect           |
|---------------------|------------------|
| `.backdrop-blur-sm` | blur(4px)        |
| `.backdrop-blur-md` | blur(8px)        |
| `.backdrop-blur-lg` | blur(16px)       |
| `.backdrop-blur-xl` | blur(24px)       |

### Available Filter Classes

| Class                  | Effect                      |
|------------------------|-----------------------------|
| `.backdrop-brightness` | brightness(0.6)             |
| `.backdrop-contrast`   | contrast(1.2)              |
| `.backdrop-saturate`   | saturate(1.8)              |
| `.backdrop-grayscale`  | grayscale(0.6)             |
| `.backdrop-glassmorphism` | Combined blur + brightness + saturate |

## Why is it useful?

- Creates premium frosted glass and depth UI effects
- Works entirely in CSS — no canvas or WebGL required
- Hardware-accelerated on modern browsers
- Combined with semantic HTML structure for accessible overlays
- Useful for modals, toolbars, navigation overlays, and card backgrounds

## Browser Support

`backdrop-filter` is supported in Chrome 76+, Safari 9+, Edge 17+. WebKit prefix (`-webkit-backdrop-filter`) is included for Safari compatibility. Falls back to transparent/solid background on unsupported browsers.

## Tech Stack

Pure HTML + CSS. No JavaScript dependencies.
