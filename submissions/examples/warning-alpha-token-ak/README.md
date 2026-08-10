# Warning Alpha Token

A demo comparing hardcoded `rgba()` warning colors vs a proper `--ease-color-warning-alpha` CSS custom property token.

---

## What does this show?

Issue [#5740](https://github.com/anomalyco/easemotion/issues/5740) identified that form warning states use hardcoded `rgba()` values instead of the `--ease-color-warning-alpha` design token, making them inconsistent with the theme system and hard to customize.

### Before (broken)

```css
.ease-form-warning {
  border-color: rgba(234, 179, 8, 0.5);
  background: rgba(234, 179, 8, 0.1);
}
```

### After (fixed)

```css
.ease-form-warning {
  border-color: var(--ease-color-warning-alpha, rgba(234, 179, 8, 0.5));
  background: var(--ease-color-warning-bg, rgba(234, 179, 8, 0.1));
}
```

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison of form warning states |
| `style.css` | Demo styles and warning token definitions |
| `README.md` | This file — documentation and issue link |
