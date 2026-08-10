# CSS Floating Orbit Accordion (Responsive Dashboard)

1. **What does this do?**
   It renders a pure CSS, zero-JavaScript accordion UI component that features a smooth, circular **Floating Orbit** status indicator, styled to complement modern responsive dashboard console panels.

2. **How is it used?**
   It uses the native HTML `<details>` and `<summary>` elements with custom classes to style and animate the status orbits.

   **HTML Structure:**

   ```html
   <details class="ease-accordion-item ease-item-cyan">
     <summary class="ease-accordion-header" aria-expanded="false">
       <!-- Orbit Indicator -->
       <div class="ease-orbit-wrapper" aria-hidden="true">
         <div class="ease-orbit-ring"></div>
         <div class="ease-orbit-core"></div>
         <div class="ease-orbit-satellite"></div>
       </div>

       <!-- Label Details -->
       <div class="ease-header-info">
         <h3 class="ease-header-title">Title Text</h3>
         <p class="ease-header-desc">Desc Text</p>
       </div>

       <!-- Status Badge -->
       <span class="ease-status-badge ease-cyan">Active</span>
     </summary>

     <!-- Panel Content -->
     <div class="ease-accordion-content">
       <p>Dashboard analytics and graphs...</p>
     </div>
   </details>
   ```

   **Customizable CSS Custom Properties:**

   ```css
   :root {
     --orbit-duration: 2.6s; /* Circular orbit rotation loop timing */
     --orbit-color: #6366f1; /* Core and satellite accent color */
     --orbit-scale-factor: 1.15; /* Scale multiplier for active indicator ring */
     --accordion-duration: 0.4s; /* Slide down expansion transition speed */
     --accordion-easing: cubic-bezier(0.25, 0.8, 0.25, 1);
   }
   ```

3. **Why is it useful?**
   It provides web developers with a high-fidelity, interactive accordion system natively supported in browsers without needing heavy JavaScript libraries, offering accessible keyboard control, responsiveness, and easy styling using custom properties.
