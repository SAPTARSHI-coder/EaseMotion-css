# CSS Custom Properties Theming System

1. **What does this do?**
   A comprehensive set of CSS custom properties (design tokens) covering colors, typography, spacing, border radius, shadows, animation timing, and z-index — with a built-in dark theme override via `[data-theme="dark"]`.

2. **How is it used?**
   ```html
   <!-- Light (default) -->
   <html lang="en">

   <!-- Dark -->
   <html lang="en" data-theme="dark">
   ```

   ```css
   /* Use tokens in any component */
   .my-card {
     background: var(--ease-color-surface);
     border-radius: var(--ease-radius-md);
     box-shadow: var(--ease-shadow-md);
     transition: box-shadow var(--ease-duration-base) var(--ease-easing-default);
   }
   ```

3. **Token categories**
   - Colors: `--ease-color-primary`, `--ease-color-secondary`, `--ease-color-bg`, `--ease-color-surface`, semantic colors
   - Typography: `--ease-font-sans`, `--ease-font-mono`, font sizes
   - Spacing: `--ease-space-xs` through `--ease-space-xl`
   - Radius: `--ease-radius-sm` through `--ease-radius-full`
   - Shadows: `--ease-shadow-sm/md/lg/glow`
   - Animation: `--ease-duration-fast/base/slow`, `--ease-easing-default/spring/smooth`
   - Z-index: `--ease-z-base/dropdown/modal/toast`

4. **Custom brand override**
   ```css
   :root {
     --ease-color-primary: #0ea5e9;  /* swap to your brand color */
   }
   ```

5. **Why is it useful?**
   Gives every EaseMotion CSS component a shared token foundation — any component using these variables automatically adapts to theme switches and custom brand overrides without touching component CSS.
