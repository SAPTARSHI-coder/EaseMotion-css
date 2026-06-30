# Accordion Keyboard (ss)

1. **What does this do?**  
   A keyboard-navigable accordion with full WAI-ARIA support, single/multi-open modes, staggered content reveal, and compact + minimal variants.

2. **How is it used?**

   ```html
   <div class="accordion-ss" role="region" aria-label="FAQ">
     <div class="accordion-ss-item" role="heading" aria-level="3">
       <button
         class="accordion-ss-trigger"
         aria-expanded="false"
         aria-controls="panel-1"
         id="trigger-1"
       >
         <span>Question title</span>
         <span class="accordion-ss-chevron" aria-hidden="true">
           <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
         </span>
       </button>
       <div
         class="accordion-ss-panel"
         role="region"
         id="panel-1"
         aria-labelledby="trigger-1"
         aria-hidden="true"
       >
         <div class="accordion-ss-content">
           <p>Answer content goes here.</p>
         </div>
       </div>
     </div>
   </div>
   ```

   Apply `.accordion-ss-compact` for tighter spacing or `.accordion-ss-minimal` for a borderless flat style.

3. **Why is it useful?**  
   EaseMotion CSS already has several accordion submissions, but none provides keyboard arrow navigation, proper ARIA wiring (aria-expanded, aria-controls, aria-labelledby), single/multi-open toggle, and staggered content reveal animations — all in one cohesive component. This fills the accessibility gap while keeping the motion-first philosophy.
