# Morphing Blob Background

1. **What does this do?**
   An organic, slowly morphing blob background animation using pure CSS `border-radius` keyframes and `filter: blur`. No JavaScript, no SVG filters, no canvas.

2. **How is it used?**
   ```html
   <div class="blob-scene">
     <div class="blob blob-1"></div>
     <div class="blob blob-2"></div>
     <div class="blob blob-3"></div>
     <div class="blob-content">
       Your content here
     </div>
   </div>
   ```

3. **Variants**
   - `blob-scene-light` — light background with subtle tints
   - `blob-scene-cool` — cyan/indigo/violet palette
   - `blob-scene-slow` — 14s duration, ambient feel
   - `blob-scene-fast` — 4s duration, energetic feel

4. **Customization via tokens**
   ```css
   .my-section {
     --blob-color-1: rgba(6, 182, 212, 0.3);
     --blob-color-2: rgba(99, 102, 241, 0.3);
     --blob-duration: 10s;
   }
   ```

5. **Why is it useful?**
   The morphing `border-radius` trick is one of the most visually unique pure CSS techniques. Animation-first, composable, and fully themeable via CSS custom properties. Respects `prefers-reduced-motion`.
