# Spacing Scale Step 5 Utility Classes

## 1. What does this do?

Adds the missing `padding-5` and `margin-5` utility classes that correspond to the `--ease-space-5` (1.25rem / 20px) design token already defined in the framework's variable layer but never exposed as utility classes.

## 2. How is it used?

```html
<!-- Padding at scale step 5 -->
<div class="padding-5">
  This box has 1.25rem (20px) of padding on all sides.
</div>

<!-- Margin at scale step 5 -->
<div class="margin-5">
  This box has 1.25rem (20px) of margin on all sides.
</div>

<!-- Composing both -->
<section class="padding-5 margin-5">
  Consistent spacing at every scale step.
</section>

<!-- Directional variants -->
<div class="padding-x-5">Horizontal padding only</div>
<div class="padding-y-5">Vertical padding only</div>
<div class="margin-x-5">Horizontal margin only</div>
<div class="margin-y-5">Vertical margin only</div>
```

## 3. Why is it useful?

EaseMotion CSS defines a spacing scale with tokens `--ease-space-1` through `--ease-space-16`. Every step in that scale except step 5 has a corresponding padding and margin utility class. This creates a silent gap in the system — a developer using the spacing scale would reasonably expect `ease-padding-5` and `ease-margin-5` to exist, but applying them produces no styles and no warning.

Since `--ease-space-5` (1.25rem / 20px) is already a defined design token, the absence of the corresponding utilities appears to be an oversight rather than an intentional design choice.

Adding these two classes (plus directional variants):

- **Completes the spacing scale** — every defined token now has a matching utility
- **Maintains predictability** — developers can trust the system is consistent
- **Prevents silent layout bugs** — no more invisible no-op class names
- **Requires only lightweight additions** — two core rules, twelve directional variants

This directly aligns with EaseMotion CSS's philosophy that class names should be readable, predictable, and composable without requiring documentation lookup.

---

### Token Coverage After Fix

| Token | Value | Padding Class | Margin Class |
|---|---|---|---|
| `--ease-space-1` | 0.25rem | ✅ exists | ✅ exists |
| `--ease-space-2` | 0.5rem | ✅ exists | ✅ exists |
| `--ease-space-3` | 0.75rem | ✅ exists | ✅ exists |
| `--ease-space-4` | 1rem | ✅ exists | ✅ exists |
| `--ease-space-5` | 1.25rem | ❌ missing → ✅ **added** | ❌ missing → ✅ **added** |
| `--ease-space-6` | 1.5rem | ✅ exists | ✅ exists |
| `--ease-space-8` | 2rem | ✅ exists | ✅ exists |
