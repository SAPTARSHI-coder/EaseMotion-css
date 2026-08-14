# Issue #44669 — RTL Slide Direction Auto-Flipping Fix

## What does this do?
This submission fixes issue #44669, where horizontal slide animations (`ease-slide-in-left`, `ease-slide-in-right`, etc.) move in the wrong direction when used in Right-to-Left (RTL) layouts (`dir="rtl"`). 

Instead of adding duplicate keyframes or extensive override queries, it introduces a CSS custom variable `--ease-slide-dir` which automatically flips translation coordinates in RTL layouts.

## How is it used?

1. **Variables Addition (`core/variables.css`):**
   ```css
   :root {
     --ease-slide-dir: 1;
   }
   [dir="rtl"] {
     --ease-slide-dir: -1;
   }
   ```

2. **Keyframe Update (`core/animations.css`):**
   Slide animations multiply their horizontal translation offset by `var(--ease-slide-dir, 1)`:
   ```css
   @keyframes ease-kf-slide-in-left {
     from {
       opacity: 0;
       transform: translate3d(calc(-32px * var(--ease-slide-dir, 1)), 0, 0);
     }
     to {
       opacity: 1;
       transform: translate3d(0, 0, 0);
     }
   }
   ```

## Why is it useful?
- **RTL Language Accessibility:** Ensures Hebrew, Arabic, and Urdu layouts receive layout-relative sliding entries, maintaining consistent motion flow across layout directions.
- **Maintainable & Compact:** Leverages a single CSS Custom Property to mirror all horizontal sliding animations (standard slides, diagonal slides, slide-from-left/right) without adding lines of duplicated `@keyframes` or class overrides.
- **Backwards-Compatible:** Defaults to `1` so LTR environments remain completely unaffected and perform normally.
