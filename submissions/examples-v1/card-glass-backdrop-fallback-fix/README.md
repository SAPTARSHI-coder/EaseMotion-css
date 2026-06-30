# Fix: ease-card-glass Missing @supports Fallback for backdrop-filter

**Issue:** [#7848](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/7848)

## Problem

`.ease-card-glass` used `backdrop-filter: blur(16px)` with no `@supports`
fallback. On Firefox without flags (and other unsupported browsers), the card
rendered as a nearly invisible `rgba(255,255,255,0.12)` surface — 12% opacity
with white text, making content completely unreadable.

## Fix

Use **progressive enhancement** — set a solid readable background first,
then layer the glass effect only when `backdrop-filter` is supported:

```css
/* ✅ Step 1: Solid fallback — readable on ALL browsers */
.ease-card-glass {
  background: var(--ease-card-glass-fallback-bg); /* rgba(30,30,60,0.92) */
  color: #ffffff;
  border: 1px solid var(--ease-card-glass-fallback-border);
}

/* ✅ Step 2: Glass enhancement — only when supported */
@supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
  .ease-card-glass {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
}
```

## CSS Variables Added

```css
:root {
  --ease-card-glass-fallback-bg: rgba(30, 30, 60, 0.92);
  --ease-card-glass-fallback-border: rgba(255, 255, 255, 0.15);
}
```

## Browser Support

| Browser           | Before Fix          | After Fix         |
| ----------------- | ------------------- | ----------------- |
| Chrome / Edge     | ✅ Glass effect     | ✅ Glass effect   |
| Firefox 103+      | ✅ Glass effect     | ✅ Glass effect   |
| Firefox (no flag) | ❌ Nearly invisible | ✅ Solid fallback |
| Older Safari      | ❌ Nearly invisible | ✅ Solid fallback |

## How to Verify

1. Open `demo.html`
2. Browser support indicator shows if your browser supports `backdrop-filter`
3. The **simulated Firefox section** shows both cards without blur
4. Before fix: 12% opacity — nearly invisible
5. After fix: 92% opacity fallback — fully readable

## Files

- `style.css` — the fix using `@supports` progressive enhancement
- `demo.html` — live support detection + simulated unsupported browser view
