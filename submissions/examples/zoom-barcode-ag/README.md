# Zoom Barcode

A retro-inspired, pure CSS barcode component featuring an interactive magnifying lens and a sweeping scanning laser line on hover/focus.

## Questions & Answers

1. **What does this do?**  
   It renders an EAN-13 barcode component that zooms and activates a glowing magnifier lens and a sweeping laser scan line on hover or keyboard focus.

2. **How is it used?**  
   Embed the barcode card wrapper with a `tabindex="0"`, `role="img"`, and `aria-label`, containing the normal bar list, a magnifying lens sub-wrapper, and the sweeping laser element:

   ```html
   <div class="zoom-barcode-card" tabindex="0" role="img" aria-label="EAN Barcode: 9 780201 379624">
     <div class="barcode-lines-wrapper">
       <div class="barcode-lines-normal">
         <span class="bar guard w-1 g-1"></span>
         <span class="bar w-2 g-3"></span>
       </div>

       <div class="barcode-lens">
         <div class="barcode-lines-magnified">
           <span class="bar guard w-1 g-1"></span>
           <span class="bar w-2 g-3"></span>
         </div>
       </div>

       <div class="barcode-laser"></div>
     </div>

     <div class="barcode-info">
       <span>9</span>
       <span>780201</span>
       <span>379624</span>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   It provides a highly requested pure CSS interactive element for creative retro interfaces and e-commerce checkouts without adding JavaScript size overhead.
