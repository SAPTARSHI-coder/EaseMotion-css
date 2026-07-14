# CSS Swing-Hover Accordion (Product Catalog)

1. **What does this do?**
   It renders a pure CSS, zero-JavaScript responsive accordion spec sheet featuring a dampened **Swing-Hover** tag transition, styled to complement modern minimalist ecommerce catalogs.

2. **How is it used?**
   It uses the native HTML `<details>` and `<summary>` elements with custom classes to style and animate the swinging tags and specification tables.

   **HTML Structure:**
   ```html
   <details class="ease-catalog-item">
     <summary class="ease-catalog-header" aria-expanded="false">
       <!-- Index Number -->
       <span class="ease-header-index">01</span>

       <!-- Category Labels -->
       <div class="ease-header-title-group">
         <h3 class="ease-header-title">Materials & Sourcing</h3>
         <p class="ease-header-desc">Leather quality & lining details</p>
       </div>

       <!-- Swing Tag Indicator -->
       <div class="ease-swing-tag-wrapper" aria-hidden="true">
         <svg class="ease-swing-tag" viewBox="0 0 24 24">
           <line x1="12" y1="2" x2="12" y2="7" />
           <path d="M12 7h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2z" />
           <circle cx="12" cy="12" r="1.5" />
         </svg>
       </div>
       
       <!-- Chevron Arrow -->
       <div class="ease-catalog-caret" aria-hidden="true">
         <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
       </div>
     </summary>

     <!-- Panel Content -->
     <div class="ease-catalog-content">
       <p>Specifications and descriptive text...</p>
     </div>
   </details>
   ```

   **Customizable CSS Custom Properties:**
   ```css
   :root {
     --swing-duration: 1.1s;         /* Hanging swing animation length */
     --swing-angle: 18deg;           /* Maximum initial swing rotation angle */
     --expand-duration: 0.4s;        /* Slide down animation speed */
     --expand-easing: cubic-bezier(0.215, 0.61, 0.355, 1);
   }
   ```

3. **Why is it useful?**
   It allows designers to add realistic physics-based swinging feedback to micro-interactions on ecommerce pages, utilizing clean code and standard HTML elements to remain lightweight, accessible, and SEO-friendly.
