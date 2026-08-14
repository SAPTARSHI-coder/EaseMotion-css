# CSS clip-path: path() Ink Blob Reveal

1. **What does this do?**
   Reveals content by expanding an organic blob shape using `clip-path: path('M...')` in CSS transitions and `@keyframes`. The dark overlay shrinks away as the blob grows from a point outward. All path data uses identical vertex counts so the browser interpolates between them smoothly.

2. **How is it used?**
   Place `.ink-reveal__content` and `.ink-reveal__mask` inside `.ink-reveal`. Add `.ink-reveal--hover` for a hover-triggered reveal or `.ink-reveal--autoplay` for a page-load animation.

   ```html
   <div class="ink-reveal ink-reveal--hover">
     <div class="ink-reveal__content">
       <h2>Revealed content</h2>
     </div>
     <div class="ink-reveal__mask"></div>
   </div>
   ```

3. **Why is it useful?**
   Organic reveal effects appear in high-end agency and app onboarding flows. A CSS-only implementation using `clip-path: path()` removes the need for JavaScript canvas or SVG animation. `prefers-reduced-motion` sets the mask to `opacity: 0` so content is always visible.
