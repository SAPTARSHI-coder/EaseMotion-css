# Corporate Parallax Carousel

1. **What does this do?**  
   It provides a premium, interactive, and fully responsive slide show component designed with multi-depth parallax layers that shift at varying speeds when transitioning.

2. **How is it used?**  
   Apply the structure to your HTML markup using radio indicators for slide controls, standard layout divs for the slide track, and custom layer classes (`bg-layer`, `glass-card`, `content-layer`) to trigger the parallax transitions:
   ```html
   <div class="carousel-wrapper">
     <input type="radio" name="carousel-state" id="slide-control-1" class="carousel-radio-state" checked />
     <!-- ... Navigation controls ... -->
     <div class="carousel-track">
       <div class="carousel-slide slide-1">
         <div class="bg-layer" style="background-image: url('...');"></div>
         <div class="glass-card">...</div>
         <div class="content-layer">...</div>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   Carousels are crucial for landing pages and marketing hubs. This parallax implementation delivers high-performance, polished visual transitions without relying on large JavaScript sliders. This aligns with EaseMotion's philosophy of lightweight, accessible, zero-dependency CSS-first development.
