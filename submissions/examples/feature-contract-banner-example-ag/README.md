# Contract Banner (Hover Effect)

1. **What does this do?**
   Applies a smooth contraction effect to a banner on hover or focus, shrinking the container size slightly while drawing a gradient border outline inward to focus user attention.

2. **How is it used?**
   Apply the `.contract-banner-example-ag` class to your banner container (e.g., `<div>` or native `<a>` / `<button>` elements):

   ```html
   <div class="contract-banner-example-ag">
     <!-- Content goes here -->
   </div>
   ```

   Or as implemented semantically in the demo:

   ```html
    <a href="https://github.com/saptarshi-coder/EaseMotion-css" class="contract-banner-example-ag">
      <span class="banner-badge-ag">Motion Example</span>
      <h2 class="banner-title-ag">Explore EaseMotion CSS</h2>
     <p class="banner-text-ag">Description text...</p>
     <span class="banner-cta-ag">Explore Repository &rarr;</span>
   </a>
   ```

3. **Why is it useful?**
   It provides a polished, modern micro-interaction for promotional cards, announcements, or CTAs. By utilizing CSS transitions and absolute-positioned elements, the contraction effect avoids reflows or layout shifts of surrounding page elements.

---

### Hover & Focus Behavior
- **Contraction**: On hover or keyboard focus, the container scale shrinks slightly (`transform: scale(0.985)`), and the decorative border contracts inward from `inset: 0` to `inset: 12px`.
- **Transitions**: The transition uses a custom cubic-bezier easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for a fluid and high-end feel.
- **Focus Indicators**: Includes a high-contrast focus outline using `:focus-visible` offset from the banner to preserve aesthetics while providing a clear visual focus indicator for keyboard users.

### Accessibility & Reduced Motion
- **Keyboard Access**: Keyboard-only users receive the identical focus treatment when tabbing.
- **prefers-reduced-motion**: The banner scale, decorative border inset, and title letter-spacing contraction are disabled when reduced motion is requested.
