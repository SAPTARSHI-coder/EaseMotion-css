# Image Rendering Utilities (`ease-image-rendering-utilities-proposal`)

This proposal introduces a set of CSS utility classes to manage the `image-rendering` property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over how browsers scale images. 
Included classes:
- `.rendering-auto` (Default bilinear scaling, softens/blurs images when upscaled)
- `.rendering-pixelated` (Nearest-neighbor scaling, keeps pixel art, QR codes, and tiny icons perfectly crisp when upscaled)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any `<img>`, `<canvas>`, or element with a `background-image`:

```html
<!-- Perfect for blowing up a low-res pixel art avatar without it getting blurry -->
<img src="8x8-avatar.png" class="rendering-pixelated w-32 h-32" />
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-image-rendering-utilities-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16434
