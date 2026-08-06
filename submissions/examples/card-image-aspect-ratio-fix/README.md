# ease-card-image Aspect Ratio Fix

**Fixes:** [#5173](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5173)  
**File affected:** `components/cards.css`

---

## Problem

`.ease-card-image .ease-card-img` uses a hardcoded `height: 200px`.
On wide containers this stretches the image horizontally at a fixed
200px height, completely destroying the aspect ratio.

There is no `aspect-ratio` property, no `max-height`, and no
responsive override in the existing code.

---

## Fix

Replace `height: 200px` with `aspect-ratio` and `height: auto`.
Expose a CSS variable so developers can override the ratio per card.

**Before (buggy):**
```css
.ease-card-image .ease-card-img {
  width: 100%;
  height: 200px;     /* distorts on wide cards */
  object-fit: cover;
  display: block;
  border-radius: var(--ease-radius-lg) var(--ease-radius-lg) 0 0;
}
```

**After (fixed):**
```css
.ease-card-image .ease-card-img {
  width: 100%;
  height: auto;
  aspect-ratio: var(--ease-card-img-ratio, 16 / 9);
  object-fit: cover;
  display: block;
  border-radius: var(--ease-radius-lg) var(--ease-radius-lg) 0 0;
}
```

---

## Custom ratio override

```html
<!-- Default 16:9 -->
<div class="ease-card ease-card-image">...</div>

<!-- Custom 4:3 -->
<div class="ease-card ease-card-image" style="--ease-card-img-ratio: 4/3">...</div>

<!-- Square -->
<div class="ease-card ease-card-image" style="--ease-card-img-ratio: 1/1">...</div>
```

---

## Demo

Open `demo.html` to see the before/after comparison across narrow,
medium, wide, and full-width cards.

---

## Checklist

- [x] No breaking changes — `object-fit: cover` still applies
- [x] Works at any container width
- [x] CSS variable allows custom ratios without specificity fights
- [x] Follows existing EaseMotion CSS variable naming convention
- [x] Includes `demo.html`, `style.css`, `README.md`