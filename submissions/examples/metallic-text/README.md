# Metallic Reflection Text Effect

## Description
This submission resolves Issue #68973 by adding a CSS-only animated text effect that simulates light glinting off a metallic surface. This effect is perfect for highlighting premium tiers, special badges, or hero headings on dark backgrounds.

## Features
- Pure CSS implementation using gradients and animations.
- Uses `background: linear-gradient` mapped to the text via `background-clip: text`.
- Infinite `keyframes` animation moves the `background-position` across the text, creating the continuous "shine" or "glint" effect.
- Works well on both large headings and smaller UI elements like badges.

## Usage
Simply apply the `.ease-text-shine` class to any text element. For the best visual result, use this effect against a dark background so the bright white "glint" stands out.

```html
<!-- Large Heading -->
<h1 class="ease-text-shine">Premium Tier</h1>

<!-- Inline Badge -->
<span class="ease-text-shine" style="border: 1px solid #555; padding: 5px 10px; border-radius: 4px;">
  PRO
</span>
```

### Note on Browser Support
This effect uses `-webkit-background-clip: text;` which is widely supported across all modern browsers (including Chrome, Safari, Firefox, and Edge). A fallback `color: #fff;` is provided for any extremely old browsers that do not support clipping, ensuring the text remains readable (though static).
