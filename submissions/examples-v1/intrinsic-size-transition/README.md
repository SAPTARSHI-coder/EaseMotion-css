# Intrinsic Size Transition Utilities

1. **What does this do?** Provides CSS utility classes that enable smooth transitions between intrinsic sizes — such as `height: auto`, `width: max-content`, and `fit-content` — using the modern CSS `interpolate-size: allow-keywords` property. Includes graceful `@supports` fallbacks for browsers that don't yet support the feature.

2. **How is it used?** Add `interpolate-size: allow-keywords` to `:root`, then use the provided classes:
   - **`.ease-expand-content`** — collapses an element to `block-size: 0` and transitions to `block-size: auto` when the parent receives hover or an `.is-open` class toggle.
   - **`.ease-expand-card`** — parent wrapper that triggers `.ease-expand-content` to expand on `:hover`.
   - **`.ease-expand-width-tag`** — transitions `inline-size` from a fixed width to `max-content` on hover.

   ```html
   <!-- Hover expand card -->
   <div class="ease-expand-card">
     <button>Show Details</button>
     <div class="ease-expand-content">
       <p>Content that expands smoothly using intrinsic size interpolation.</p>
     </div>
   </div>
   ```

3. **Why is it useful?** One of the biggest limitations in CSS animations has always been the inability to smoothly transition to keyword dimensions like `auto` height — previously requiring JavaScript hacks (`scrollHeight`, `max-height` tricks, ResizeObserver). The new `interpolate-size` specification solves this natively. This fits EaseMotion CSS's zero-dependency, animation-first philosophy perfectly, enabling pure-CSS accordions, expandable cards, and dynamic navigation menus with a single class.
