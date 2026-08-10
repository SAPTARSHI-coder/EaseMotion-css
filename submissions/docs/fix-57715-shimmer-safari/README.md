# Fix #57715: Skeleton Shimmer Animation - Safari 14 & Firefox ESR 102 Compatibility

## What does this do?

This submission fixes the `.ease-skeleton-shimmer` animation that was frozen on Safari 14, iOS 14, and Firefox ESR 102 by replacing the unsupported CSS Transforms Level 2 `translate` property with the widely-supported `transform: translateX()`.

## How is it used?

The fix applies to the existing `.ease-skeleton-shimmer` class used for skeleton loading animations:

```html
<!-- Before: Animation was frozen on older browsers -->
<div class="ease-skeleton-shimmer">
  <div class="skeleton-line"></div>
</div>

<!-- After: Animation now works smoothly on all browsers -->
<div class="ease-skeleton-shimmer">
  <div class="skeleton-line"></div>
</div>
```

The visual usage remains identical; only the internal CSS property changes from `translate` to `transform: translateX()`.

## Why is it useful?

1. **Browser Compatibility**: The `translate` property (CSS Transforms Level 2) is not supported in:
   - Safari 14 and earlier
   - iOS 14 and earlier
   - Firefox ESR 102
   
   On these browsers, the shimmer overlay appears frozen, creating a broken loading experience.

2. **Backward Compatibility**: `transform: translateX()` has broad support back to IE 11, ensuring smooth animations across all modern and legacy browsers.

3. **Performance**: `transform` properties benefit from hardware acceleration in all browsers, maintaining smooth 60fps animations without jank.

4. **User Experience**: Fixes loading experience for users on:
   - Older Mac devices running Safari 14
   - iPhones and iPads running iOS 14
   - Corporate environments using Firefox ESR

## Changes Required

**In `core/animations.css`:**

1. Change `@keyframes ease-kf-shimmer`:
   ```css
   /* Before */
   @keyframes ease-kf-shimmer {
     0% { translate: -100% 0; }
     100% { translate: 100% 0; }
   }

   /* After */
   @keyframes ease-kf-shimmer {
     0% { transform: translateX(-100%); }
     100% { transform: translateX(100%); }
   }
   ```

2. Change `.ease-skeleton-shimmer::before`:
   ```css
   /* Before */
   .ease-skeleton-shimmer::before {
     translate: -100% 0;
   }

   /* After */
   .ease-skeleton-shimmer::before {
     transform: translateX(-100%);
   }
   ```

3. Change `.ease-hover-shimmer::before`:
   ```css
   /* Before */
   .ease-hover-shimmer::before {
     translate: -100% 0;
     transition: translate var(--ease-speed-slow) var(--ease-ease);
   }

   .ease-hover-shimmer:hover::before {
     translate: 100% 0;
   }

   /* After */
   .ease-hover-shimmer::before {
     transform: translateX(-100%);
     transition: transform var(--ease-speed-slow) var(--ease-ease);
   }

   .ease-hover-shimmer:hover::before {
     transform: translateX(100%);
   }
   ```

## Browser Support Comparison

| Browser | translate (broken) | transform: translateX (fixed) |
|---------|-----|-----|
| Safari 14 | ❌ | ✅ |
| iOS 14 | ❌ | ✅ |
| Firefox ESR 102 | ❌ | ✅ |
| Chrome 104+ | ✅ | ✅ |
| Firefox 72+ | ✅ | ✅ |
| Safari 15.4+ | ✅ | ✅ |
| Internet Explorer 11 | ❌ | ✅ |

## Testing

- Open `demo.html` in Safari 14 or earlier and verify the shimmer animation plays smoothly
- Open `demo.html` in Firefox ESR 102 and verify the animation works
- Test on iOS 14 devices to confirm the animation is no longer frozen
- Verify animation performance remains smooth (60fps) on modern browsers

## Related Issues

- Closes #57715: [BUG] .ease-skeleton-shimmer::before uses the translate shorthand property, which is unsupported in Safari 14 and Firefox ESR 102, freezing the shimmer animation
