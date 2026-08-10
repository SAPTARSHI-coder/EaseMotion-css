# Particle QR Code Display

## What does this do?

The Particle QR Code Display adds a reusable particle animation, soft glow, module entrance effect, and vertically moving horizontal scanner beam around any QR image or inline SVG.

## How is it used?

Wrap any QR image or inline SVG inside the component.

```html
<div class="ease-particle-qr">
  <div class="ease-particle-qr__particles">
    <!-- Decorative particles -->
  </div>

  <div class="ease-particle-qr__code">
    <!-- Replace the sample SVG with your QR -->

    <!-- Example -->
    <!-- <img src="your-qr.svg" alt="QR Code"> -->
    <!-- or -->
    <!-- <svg>...</svg> -->

    <span class="ease-particle-qr__scanner"></span>
  </div>
</div>
```

## Why is it useful?

QR codes are commonly used for payments, authentication, event registration, downloads, contact sharing, and navigation. This component gives any QR code a polished animation-first presentation while keeping the code replaceable, responsive, dependency-free, and compatible with EaseMotion CSS design variables.

## Features

- Works with any QR image or inline SVG
- Pure HTML and CSS
- No JavaScript
- No external dependencies
- Horizontal scanner beam moving from top to bottom
- Floating particle animation
- Staggered module assembly for inline SVG demos
- Responsive sizing
- Hover enhancement
- Reduced-motion accessibility support
- EaseMotion CSS variables with fallback values

