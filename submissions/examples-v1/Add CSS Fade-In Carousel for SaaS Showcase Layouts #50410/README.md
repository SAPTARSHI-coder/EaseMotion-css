# CSS Fade-In Carousel for SaaS Showcase Layouts

1. **What does this do?**
   This is a pure HTML and CSS fade-in carousel component tailored for premium SaaS feature showcases, utilizing CSS Grid and radio controls to cycle through slide layouts with smooth opacity transitions.

2. **How is it used?**
   Define visually hidden radio inputs before your layout and target slide elements to trigger active checked states using sibling combinators:

   ```html
   <input type="radio" id="slide-1" name="carousel-slide" class="hidden-control" checked>
   <input type="radio" id="slide-2" name="carousel-slide" class="hidden-control">

   <div class="page-wrapper">
     <div class="carousel-frame">
       <div class="carousel-viewport">
         <article class="carousel-slide slide-1">
           <!-- Slide Content -->
           <div class="slide-nav-overlay">
             <label for="slide-2" class="nav-arrow arrow-next">Next</label>
           </div>
         </article>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**
   It allows modern web applications to feature interactive carousels with dark mode overrides and prefers-reduced-motion presets without the overhead of JavaScript, supporting fully native tab and arrow key navigation.
