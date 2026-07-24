# Anchor Position Fallback Utilities

1. **What does this do?** Provides utility classes (`.ease-anchor`, `.ease-tooltip`, `.ease-popover`, `.ease-context-menu`) that implement CSS-only floating UI with automatic viewport-collision avoidance using the native CSS Anchor Positioning spec and `@position-try` fallback rules. Popovers, tooltips, and dropdowns automatically flip or reposition when they would overflow the viewport — with zero JavaScript.

2. **How is it used?**

   ```html
   <!-- 1. Mark the trigger -->
   <button class="ease-anchor" style="anchor-name: --my-btn">Open Menu</button>

   <!-- 2. Float the popover relative to it -->
   <div class="ease-popover" style="position-anchor: --my-btn">
     Menu Content
   </div>
   ```

   ```css
   /* Each anchor pair needs a unique --name */
   /* The CSS handles all placement + fallback logic */
   ```

   Three components included:
   - **`.ease-tooltip`** — hover-triggered label, prefers below, flips to top
   - **`.ease-popover`** — click-triggered panel, tries bottom → top → right → left
   - **`.ease-context-menu`** — right-click panel with same 4-way fallback

3. **Why is it useful?** Positioning floating UI (tooltips, dropdowns, context menus) traditionally requires JavaScript libraries like Popper.js or Floating UI to calculate viewport collisions. The CSS Anchor Positioning specification (`anchor-name`, `position-anchor`, `@position-try`) solves this natively in the browser. This aligns perfectly with EaseMotion CSS's zero-dependency, CSS-first philosophy — reducing JavaScript requirements while demonstrating cutting-edge modern CSS techniques. Supported in Chrome 125+ and Edge 125+.
