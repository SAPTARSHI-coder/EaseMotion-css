# CSS Spirograph — Counter-Rotating Ring Animation

1. **What does this do?**
   Renders a pure CSS spirograph using five nested `<div>` elements, each rotating at a prime-number speed (3s, 5s, 7s, 11s, 13s). Because the periods are coprime, the compound dot paths never exactly repeat — producing genuine generative-art motion from a single `@keyframes spin` rule.

2. **How is it used?**
   Nest five `.ring-N` divs inside a `.spirograph-stage` wrapper. Each ring gets a different animation duration; a `::after` pseudo-element positions the coloured dot at the ring's top edge.

   ```html
   <div class="spirograph-stage">
     <div class="ring ring-1">
       <div class="ring ring-2">
         <div class="ring ring-3">
           <div class="ring ring-4">
             <div class="ring ring-5"></div>
           </div>
         </div>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**
   Demonstrates the compositional power of stacked `animation` declarations — multiple simple `rotate` keyframes building emergent complexity. Useful as a decorative loader, background element, or teaching example for `transform-origin`, `mix-blend-mode`, and prime-ratio timing. Respects `prefers-reduced-motion` by pausing all animations.
