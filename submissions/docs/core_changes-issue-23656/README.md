# ease-masonry-auto — Native CSS Masonry Layout

1. **What does this do?**
   Adds `.ease-masonry-auto` using native CSS masonry (`grid-template-rows: masonry`) with a graceful column-based fallback via `@supports`. Includes column count variants `.ease-masonry-2`, `.ease-masonry-3`, `.ease-masonry-4`, gap customization via `--ease-masonry-gap`, and responsive breakpoints.

2. **How is it used?**

   ```html
   <!-- Auto-detect with custom columns -->
   <div class="ease-masonry-auto" style="--ease-masonry-cols: 3;">
     <div>Item 1</div>
     <div>Item 2</div>
     <div>Item 3</div>
   </div>

   <!-- Preset column counts -->
   <div class="ease-masonry-2">...</div>
   <div class="ease-masonry-3">...</div>
   <div class="ease-masonry-4">...</div>

   <!-- Custom gap -->
   <div class="ease-masonry-3" style="--ease-masonry-gap: 2rem;">...</div>
   ```

   **Custom properties:**

   | Variable              | Default | Description       |
   | --------------------- | ------- | ----------------- |
   | `--ease-masonry-cols` | `3`     | Number of columns |
   | `--ease-masonry-gap`  | `1rem`  | Gap between items |

3. **Why is it useful?**
   Native CSS masonry (`grid-template-rows: masonry`) provides better performance and simpler code than column-based hacks. This utility future-proofs EaseMotion CSS while maintaining backward compatibility via the `@supports` fallback. Developers get a modern masonry layout that works today and gets faster tomorrow.
