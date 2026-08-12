# mesh-bg

1. What does this do?
   Creates an animated gradient mesh background where multiple
   color blobs slowly drift, scale, and blend — the same premium
   background effect used on Stripe, Linear, and Apple homepages.
   Pure CSS, zero JavaScript.

2. How is it used?
   Add `mesh-bg` to any container and include a `mesh-blob` span
   inside for the third blob layer:
```html
   <div class="mesh-bg">
     <span class="mesh-blob"></span>
     <div class="mesh-content">
       Your content here
     </div>
   </div>
```
   Color variants:
   - Default → purple/amber
   - `.mesh-bg-blue`  → blue/cyan
   - `.mesh-bg-green` → green/lime
   - `.mesh-bg-warm`  → orange/red
   - `.mesh-bg-light` → pastel (light backgrounds)

3. Why is it useful?
   EaseMotion CSS animates elements but has nothing for ambient
   background atmospheres. A gradient mesh background is one of
   the most requested modern UI effects — used on virtually every
   premium SaaS landing page. A single class instantly transforms
   any section into a living, breathing background, perfectly
   matching EaseMotion CSS's animation-first, zero-dependency
   philosophy.