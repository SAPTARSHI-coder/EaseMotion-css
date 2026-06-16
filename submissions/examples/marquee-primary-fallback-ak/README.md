# Marquee Primary Fallback

A demo showing ease-marquee using the wrong primary color fallback `#6366f1` vs correct `#6c63ff`.

---

## What does this show?

Issue [#5752](https://github.com/anomalyco/easemotion/issues/5752) identified that the ease-marquee component uses the incorrect primary color value `#6366f1` (Tailwind Indigo-500) as its CSS custom property fallback, instead of EaseMotion's actual primary color `#6c63ff`.

### The bug

```css
.ease-marquee-primary {
  color: var(--ease-color-primary, #6366f1);
  /* Wrong fallback — #6366f1 is not EaseMotion's primary */
}
```

### The fix

```css
.ease-marquee-primary {
  color: var(--ease-color-primary, #6c63ff);
  /* Correct fallback — matches EaseMotion's primary color */
}
```

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison of marquee primary color fallback |
| `style.css` | Marquee styles with correct color |
| `README.md` | This file |
