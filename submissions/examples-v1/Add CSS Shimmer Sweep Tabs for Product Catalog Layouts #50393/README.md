# CSS Shimmer Sweep Tabs for Product Catalog Layouts

1. **What does this do?**
   This is a pure HTML and CSS tab component tailored for modern product catalogs, using radio state triggers to switch product categories and displaying a linear gradient shimmer reflection sheen sweeping across the active tab button.

2. **How is it used?**
   Create radio controls representing each tab category before your layouts, map category buttons as labels pointing to them, and toggle product card grids accordingly:

   ```html
   <input type="radio" id="tab-1" name="catalog-tab" class="hidden-control" checked>
   <input type="radio" id="tab-2" name="catalog-tab" class="hidden-control">

   <div class="page-wrapper">
     <nav class="tab-nav-bar">
       <label for="tab-1" class="tab-btn tab-btn-1">Electronics</label>
       <label for="tab-2" class="tab-btn tab-btn-2">Apparel</label>
     </nav>

     <section class="catalog-grid grid-electronics">
       <!-- Product Cards for Electronics -->
     </section>
   </div>
   ```

3. **Why is it useful?**
   It allows developers to implement highly premium, responsive category panels with hardware-accelerated shimmer sweeping effects entirely in CSS, bypassing the need for JavaScript triggers while fully respecting accessibility focus configurations and reduced motion layouts.
