# VHS Rewind Animation (`ease-vhs-rewind`)

### 1. What does this do?
The `ease-vhs-rewind` utility applies a retro, nostalgic VHS-style distortion effect. It features horizontal jittering "bands", chromatic aberration (color channel separation), and a brief scanline-like contrast boost.

### 2. How is it used?
Add the `ease-vhs-rewind` class to any text element. For the best effect, ensure the element has a `data-text` attribute matching its content (used for the glitch layers).

```html
<h1 class="ease-vhs-rewind" data-text="RETRO">
  RETRO
</h1>
```

### 3. Why is it useful?
This advanced animation is perfect for media-heavy or entertainment-focused UIs that want to evoke a nostalgic, 80s/90s aesthetic. It's highly effective for:
- Hover effects on video thumbnails.
- Loading states for retro-themed apps.
- Transitions between different sections of a website.
- Emphasizing "old school" brand identities.

---
**Implementation Details:**
- Follows specification from Issue #11899.
- Duration: 0.5s.
- Uses `clip-path` and `pseudo-elements` to create horizontal distortion bands.
- Employs `text-shadow` for high-performance chromatic aberration.
- Includes an optional `.ease-vhs-scanlines` helper for full-page or full-container atmospheric scanlines.
