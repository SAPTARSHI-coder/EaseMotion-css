# Z-Index Architecture Fix

This submission documents and provides the architectural fix for the disastrous CSS layering conflicts currently present in over 2,001 components across the framework.

## Issue Description
Currently, contributors are hardcoding arbitrary, "magic number" `z-index` values (like `z-index: 9999;` or `z-index: 99;`) across more than 2,000 components in the `submissions/` directory. This creates a completely broken architecture. When developers attempt to combine multiple EaseMotion components in a real-world production project, the hardcoded z-indexes fight each other, resulting in catastrophic layering conflicts (e.g., a simple dropdown menu rendering on top of a critical modal overlay).

## Proposed Fix
To completely obliterate these layering conflicts, all hardcoded `z-index` values must be strictly banned. Instead, the framework must enforce a centralized CSS Custom Property scale.

### The Centralized Scale
```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-toast: 600;
  --z-tooltip: 700;
}
```

### Example

**❌ Incorrect (Current Architecture):**
```css
.dropdown { z-index: 9999; }
.modal { z-index: 99; }
/* The dropdown breaks the UI by rendering over the modal. */
```

**✅ Correct (New Architecture):**
```css
.dropdown { z-index: var(--z-dropdown); }
.modal { z-index: var(--z-modal); }
/* The modal mathematically guarantees it stays on top. */
```

The `demo.html` and `style.css` in this folder provide a live, interactive demonstration of this architectural fix. All 2,001+ existing unoptimized components and all future submissions must adopt this pattern to ensure framework-wide layering predictability.
