# CSS Magnetic Pull Accordion (Cyberpunk Neon)

1. **What does this do?**
   It renders a pure CSS, zero-JavaScript responsive accordion component utilizing a smooth spring-like **Magnetic Pull** transition, styled to match cyberpunk neon terminal interfaces.

2. **How is it used?**
   It uses the native HTML `<details>` and `<summary>` elements with custom classes to style and animate the magnetic overshoot and terminal console layouts.

   **HTML Structure:**
   ```html
   <details class="ease-cyber-item">
     <summary class="ease-cyber-header" aria-expanded="false">
       <!-- Code Label -->
       <span class="ease-header-code">[ 01 ]</span>

       <!-- Text Group -->
       <div class="ease-header-text">
         <h3 class="ease-header-title">Module Title</h3>
         <p class="ease-header-desc">Module Desc</p>
       </div>

       <!-- Status Badge -->
       <div class="ease-status-wrapper ease-status-online">
         <div class="ease-status-dot"></div>
         <span class="ease-status-label">ONLINE</span>
       </div>

       <!-- Futuristic Caret -->
       <span class="ease-cyber-caret" aria-hidden="true">&gt;</span>
     </summary>

     <!-- Panel Content -->
     <div class="ease-cyber-content">
       <p>Terminal diagnostics and telemetry...</p>
     </div>
   </details>
   ```

   **Customizable CSS Custom Properties:**
   ```css
   :root {
     --pull-duration: 0.55s;           /* Animation length */
     --pull-distance: 30px;            /* Initial translate offset distance */
     --pull-overshoot: 8px;            /* Overshoot distance before settling */
     --pull-scale-start: 0.94;         /* Starting scale factor */
     --pull-scale-overshoot: 1.025;    /* Maximum scale factor at overshoot peak */
     --pull-easing: cubic-bezier(...); /* Smooth transition deceleration curve */
   }
   ```

3. **Why is it useful?**
   It allows designers to implement complex physics-based micro-interactions, elastic overshoot states, and cyberpunk aesthetics directly in CSS without relying on external animation libraries or JavaScript overhead.
