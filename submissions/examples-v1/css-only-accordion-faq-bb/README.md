# CSS-Only Animated Accordion FAQ

1. **What does this do?**
   A zero-JavaScript FAQ accordion built with native `<details>`/`<summary>` HTML elements, using the CSS `grid-template-rows: 0fr → 1fr` height animation technique for smooth expand/collapse, a rotating SVG chevron icon, and staggered entrance animations.

2. **How is it used?**

   ```html
   <details class="accordion-item" name="faq-group">
     <summary class="accordion-trigger">
       <span class="accordion-question">What is EaseMotion CSS?</span>
       <span class="accordion-icon" aria-hidden="true">
         <svg viewBox="0 0 24 24">
           <polyline points="6 9 12 15 18 9"></polyline>
         </svg>
       </span>
     </summary>
     <div class="accordion-body">
       <p>EaseMotion CSS is a zero-dependency animation-first CSS framework.</p>
     </div>
   </details>
   ```

   The `name="faq-group"` attribute on all `<details>` elements creates an exclusive group (only one open at a time) natively in supporting browsers.

3. **Why is it useful?**
   Native `<details>`/`<summary>` accordions are semantically correct, accessible by default, and work without JavaScript. The key innovation here is the `grid-template-rows` animation technique — transitioning from `0fr` to `1fr` — which enables smooth height animations that `height: auto` cannot achieve in standard CSS. Combined with a spring-physics chevron rotation (`cubic-bezier(0.34,1.56,0.64,1)`), staggered list entrance animation, and `prefers-reduced-motion` support, this maps directly to the planned `ease-accordion` and `ease-details-reveal` framework utilities.
