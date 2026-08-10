# Aurora Ambient Hero Backdrop & Text

## What does this do?

This is a premium hero banner component featuring slow-floating, blurry organic blobs that drift and blend like the Northern Lights in the background, overlayed by a text title with a continuously sweeping vibrant color gradient.

## How is it used?

1. Add the layout structure to your page:

```html
<div class="ease-aurora-container">
  <!-- Drifting Ambient Blurs -->
  <div class="ease-aurora-ambient">
    <div class="ease-aurora-blob blob-1"></div>
    <div class="ease-aurora-blob blob-2"></div>
    <div class="ease-aurora-blob blob-3"></div>
  </div>

  <!-- Hero Foreground Content -->
  <div class="ease-aurora-content">
    <h1 class="ease-aurora-text">Aurora Text Title</h1>
    <p>Hero description goes here...</p>
    <div class="btn-group">
      <button class="btn-primary">Get Started</button>
    </div>
  </div>
</div>
```

2. Link the stylesheet to your page:

```html
<link rel="stylesheet" href="style.css" />
```

## Why is it useful?

Most landing page hero banners rely on standard static backgrounds. This component provides an immersive organic drift effect using hardware-accelerated CSS keyframes and radial gradients, combined with an animated text gradient sweep. It creates a striking first impression without relying on heavy canvas scripts or external WebGL libraries.

## Tech Stack

- HTML
- CSS (filters, keyframes, radial gradients, custom properties)

## Customization

Override these properties in your styles to adjust the Northern Lights blurs:

- `--ease-aurora-blur`: Viscosity blur filter applied to the background blobs (default: `80px`).
- `--ease-aurora-opacity`: Intensity opacity of the background blurs (default: `0.55`).
- `--ease-aurora-speed`: Base floating animation drift duration (default: `24s`).

## Preview

Open `demo.html` directly in your browser to see the effect in action.

## Contribution Notes

- Class naming was handled by the contributor (prefixed with `ease-`)
- Maintainer will review and standardize before merging
