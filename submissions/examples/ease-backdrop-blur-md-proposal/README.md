# Backdrop Blur Medium Utility (`backdrop-blur-md`)

This proposal introduces a medium backdrop-blur utility class, targeted for `core/utilities/filters.css`, perfectly balanced for frosted glass UI overlays.

## 📌 Feature Overview

Glassmorphism and frosted glass effects are a staple of modern web design. The `backdrop-filter: blur()` property achieves this effect natively. Having a predefined medium (`-md`) step in the blur scale allows developers to easily create legible overlays on complex or busy backgrounds without writing custom CSS.

Included class:
- `.backdrop-blur-md` (8px blur radius)

## ⚙️ How to Use

To test this feature locally, open the `demo.html` file in your web browser. The styles are contained in `style.css`.

Example structure:

```html
<div class="glass-card backdrop-blur-md">
  <h3>Frosted Overlay</h3>
  <p>The background behind this card is smoothly blurred by 8px.</p>
</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-backdrop-blur-md-proposal/` directory to avoid directly modifying core files and causing zero deletions.*

## 🔗 Related Issue
Closes Issue #15077
