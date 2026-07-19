# Fix: Focus-visible Regression

## 1. What does this do?

Demonstrates that `.ease-input:focus`
restores focus rings for every mouse click,
and shows how restricting the selector to

```css
[type="file"]:focus-visible
```

preserves the intended accessibility behavior.

---

## 2. Proposed Fix

```diff
- .ease-input:focus {
+ .ease-input[type="file"]:focus-visible {
```

Use existing design tokens instead of hardcoded colors.

---

## 3. Why is it useful?

The framework already documents
`:focus-visible` usage.

This restores that behavior while preserving
the original file-input fix.