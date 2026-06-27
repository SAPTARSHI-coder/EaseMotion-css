# RTL (Right-to-Left) Direction Support

## What does this do?

Adds RTL support to EaseMotion CSS by mirroring directional animations and providing utility classes (`ease-rtl`, `ease-ltr`, `ease-start`, `ease-end`) so that all slide, flip, and directional effects automatically respect the `dir` attribute — making the framework usable for Arabic, Hebrew, Persian, Urdu, and other RTL languages.

## How is it used?

**Enable RTL mirroring on the whole page:**

```html
<html dir="rtl">
```

All directional animations (`ease-slide-in-left` ↔ `ease-slide-in-right`) automatically swap.

**Force RTL mode on a specific element:**

```html
<div class="ease-rtl">
  <div class="ease-slide-in-left">Appears from the right</div>
</div>
```

**Logical alignment utilities:**

```html
<div class="ease-start">Aligned to inline-start (left in LTR, right in RTL)</div>
<div class="ease-end">Aligned to inline-end (right in LTR, left in RTL)</div>
```

## Why is it useful?

RTL support is essential for a global CSS framework. Over 400 million people use RTL scripts. Without it, directional animations break the user experience — slide-in-left brings content from the wrong side, and layout utilities produce incorrect alignment. This proposal makes EaseMotion CSS truly international by:

- Automatically mirroring directional animations based on `dir="rtl"`
- Providing explicit RTL/LTR override classes for fine-grained control
- Adding logical alignment utilities (`ease-start`/`ease-end`) that adapt to direction
- Extending utility classes like `ease-text-left`/`ease-text-right` with directional awareness
