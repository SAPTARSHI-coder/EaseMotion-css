# Chip Primary Fallback

A demo showing the chip component using the wrong primary color fallback `#6366f1` vs the correct `#6c63ff`.

---

## What does this show?

Issue [#5751](https://github.com/anomalyco/easemotion/issues/5751) identified that the chip component uses the incorrect primary color value `#6366f1` (Indigo-500 from Tailwind) as its CSS custom property fallback, instead of EaseMotion's actual primary color `#6c63ff`.

### The bug

```css
.ease-chip-primary {
  background: var(--ease-color-primary, #6366f1);
  /* Wrong fallback — #6366f1 is not EaseMotion's primary */
}
```

### The fix

```css
.ease-chip-primary {
  background: var(--ease-color-primary, #6c63ff);
  /* Correct fallback — matches EaseMotion's primary color */
}
```

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison of chip primary color fallback |
| `style.css` | Chip component styles with correct color |
| `README.md` | This file |
