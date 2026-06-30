# Background Blend Mode Utilities

An isolated styling package delivering comprehensive layout blend-mode primitives to composite multi-layer graphical textures inside standard native browser elements without canvas manipulation scripts.

## Utility Roster API

- `.ease-bg-blend-multiply`: Multiplies background color and image layers, generating dense darkened values ideal for text masks.
- `.ease-bg-blend-screen`: Inverts, multiplies, and re-inverts pixel maps, creating lightened image structures.
- `.ease-bg-blend-overlay`: Toggles multiply or screen logic depending on the base texture values to preserve highlights and dark points.
- `.ease-bg-blend-darken`: Retains the darkest color channels across intersecting visual points.
- `.ease-bg-blend-lighten`: Retains the lightest color channels across intersecting visual points.
- `.ease-bg-blend-color-dodge`: Brightens the base layer color value based on the overlay texture configurations.
- `.ease-bg-blend-luminosity`: Matches the luminosity values of the blending layer while tracking hue and saturation from beneath.
- `.ease-bg-blend-normal`: Resets compositing rules back to standard occlusion behavior layers.

## Usage Layout Structure

```html
<div
  class="ease-bg-blend-multiply"
  style="background-image: url(...); background-color: #2563eb;"
></div>
```

Closes #13481
