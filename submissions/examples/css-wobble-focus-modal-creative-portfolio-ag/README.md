# CSS Wobble-Focus Modal (Creative Portfolio)

1. **What does this do?**
   It renders a pure CSS, zero-JavaScript responsive modal utilizing a smooth, spring-like 
   **Wobble-Focus** interaction transition, styled to match premium creative portfolio interfaces.

2. **How is it used?**
   Trigger the modal via an anchor link that points to the ID of the modal overlay, and use 
   `:focus-within` to trigger the wobble transition on any child control focus.
   
   **HTML Structure:**
   ```html
   <!-- Open Trigger -->
   <a href="#portfolio-modal" class="portfolio-btn" role="button" aria-haspopup="dialog">
     Get in Touch
   </a>
   
   <!-- Modal Overlay & Box -->
   <div id="portfolio-modal" class="ease-portfolio-modal-overlay" role="dialog" aria-modal="true">
     <!-- Click to Close Area -->
     <a href="#" class="ease-portfolio-modal-overlay-close-area" aria-label="Close modal"></a>
     
    <!-- Content Box -->
     <div class="ease-portfolio-modal-content">
       <!-- Close Button -->
       <a href="#" class="ease-portfolio-modal-close" aria-label="Close modal">&times;</a>
       
    <!-- Form Elements -->
       <input type="email" class="portfolio-input" placeholder="Your Email" />
     </div>
   </div>
   ```
   
   **Customizable CSS Custom Properties:**
   ```css
   :root {
     --ease-wobble-duration: 0.65s;             /* Animation length */
     --ease-wobble-easing: cubic-bezier(...);   /* Oscillating bounce curve */
     --ease-wobble-scale: 1.03;                 /* Focus pop-out scale factor */
     --ease-wobble-rotate: 1.6deg;              /* Maximum angular wobble rotation */
     --ease-wobble-translate: 8px;              /* Maximum horizontal wobble offset */
   }
   ```

3. **Why is it useful?**
   It allows designers and developers to add high-fidelity micro-interactions and animations to their portfolios with zero performance overhead, complete responsiveness, native browser keyboard tab-index access, and full customization via standard CSS variables.