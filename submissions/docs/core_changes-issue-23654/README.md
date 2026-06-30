# ease-scroll-snap — CSS Scroll-Snap Carousel Utility

1. **What does this do?**
   Adds zero-JS carousel/slider classes using native CSS `scroll-snap`. Horizontal (`.ease-scroll-snap-x`) and vertical (`.ease-scroll-snap-y`) containers with `.ease-scroll-snap-item` children. Snap alignment options, hidden scrollbar support, and smooth scrolling built in.

2. **How is it used?**

   ```html
   <!-- Horizontal carousel -->
   <div class="ease-scroll-snap-x">
     <div class="ease-scroll-snap-item">Slide 1</div>
     <div class="ease-scroll-snap-item">Slide 2</div>
     <div class="ease-scroll-snap-item">Slide 3</div>
   </div>

   <!-- Center-aligned snap -->
   <div class="ease-scroll-snap-x">
     <div class="ease-snap-center">Center 1</div>
     <div class="ease-snap-center">Center 2</div>
   </div>

   <!-- Vertical list -->
   <div class="ease-scroll-snap-y" style="max-height: 400px;">
     <div class="ease-scroll-snap-item">Item 1</div>
     <div class="ease-scroll-snap-item">Item 2</div>
   </div>

   <!-- Hidden scrollbar -->
   <div class="ease-scroll-snap-x ease-scroll-snap-hide-scrollbar">...</div>
   ```

   **Available classes:**

   | Class                              | Purpose                             |
   | ---------------------------------- | ----------------------------------- |
   | `.ease-scroll-snap-x`              | Horizontal snap-scrolling container |
   | `.ease-scroll-snap-y`              | Vertical snap-scrolling container   |
   | `.ease-scroll-snap-item`           | Child snap target (align: start)    |
   | `.ease-snap-center`                | Child snap target (align: center)   |
   | `.ease-scroll-snap-hide-scrollbar` | Visually hide the scrollbar         |

3. **Why is it useful?**
   Image carousels, testimonial sliders, and card decks are ubiquitous in modern web design. Scroll-snap is a native CSS feature that delivers smooth, paginated scrolling with zero JavaScript. This utility packages the feature into reusable, discoverable classes — reducing boilerplate and improving consistency across projects.
