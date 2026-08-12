# Text Size Utility Fallbacks

A demo showing the importance of `var()` fallback values in text-size utility classes.

---

## What does this show?

Issue [#5959](https://github.com/anomalyco/easemotion/issues/5959) identified that several text-size utility classes in EaseMotion CSS use CSS custom properties without providing fallback values. When a custom property is undefined or the theme token is missing, the property falls through to `initial`, breaking the expected text sizing.

### Before (broken)

```css
.ease-text-xs { font-size: var(--ease-font-size-xs); }
```

If `--ease-font-size-xs` is not defined, the font-size becomes `initial` (medium), not a small size.

### After (fixed)

```css
.ease-text-xs { font-size: var(--ease-font-size-xs, 0.75rem); }
```

The fallback `0.75rem` ensures sensible default sizing regardless of theme state.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison page |
| `style.css` | Demo styles and comparison layout |
| `README.md` | This file — documentation and issue link |
