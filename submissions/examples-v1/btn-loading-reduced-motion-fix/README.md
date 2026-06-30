# Button Loading Reduced Motion Fix

This submission fixes an accessibility bug where `.ease-btn-loading` would completely freeze into a static circle when `prefers-reduced-motion: reduce` was active.

## What it does

Instead of aggressively disabling the animation (`animation: none !important;`), this override safely replaces the rotational spin with a gentle opacity pulse. This ensures users still receive clear visual feedback that a background process is loading, without triggering motion sickness or displaying a broken visual state.

## How to use it

To use this fix, include the `style.css` provided in this directory _after_ you include the main `easemotion.css` framework:

```html
<link rel="stylesheet" href="path/to/easemotion.css" />
<link
  rel="stylesheet"
  href="path/to/btn-loading-reduced-motion-fix/style.css"
/>
```

## Why it fits EaseMotion CSS

EaseMotion prioritizes both beautiful hardware-accelerated animations and strict accessibility. Providing a safe fallback animation for reduced motion (rather than simply breaking the animation entirely) aligns perfectly with the framework's core philosophies.
