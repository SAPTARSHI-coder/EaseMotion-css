# Automatic Stagger Container (`stagger-container` / `ease-stagger`)

1. **What does this do?**
   Automatically applies incrementing entrance delays (`animation-delay` and `transition-delay`) to direct child elements using CSS `:nth-child` mapping and custom property calculations, eliminating the need to manually attach `delay-*` classes to every child item.

2. **How is it used?**
   Apply `.stagger-container` (or `.ease-stagger`) to any parent container element. All direct children will automatically receive incremented stagger delays (0ms, 100ms, 200ms, 300ms...).

   ```html
   <!-- Basic Usage (Default 100ms step) -->
   <div class="stagger-container">
     <div class="anim-fade-up">Item 1 (delay: 0ms)</div>
     <div class="anim-fade-up">Item 2 (delay: 100ms)</div>
     <div class="anim-fade-up">Item 3 (delay: 200ms)</div>
     <div class="anim-fade-up">Item 4 (delay: 300ms)</div>
   </div>

   <!-- Custom Speed Step Modifier (.stagger-50, .stagger-150, .stagger-200, .stagger-300) -->
   <ul class="stagger-container stagger-50">
     <li class="anim-zoom-bounce">Fast Stagger 1 (0ms)</li>
     <li class="anim-zoom-bounce">Fast Stagger 2 (50ms)</li>
     <li class="anim-zoom-bounce">Fast Stagger 3 (100ms)</li>
   </ul>

   <!-- Reverse Stagger (.stagger-reverse) -->
   <div class="stagger-container stagger-reverse">
     <div class="anim-slide-right">Item 1 (delay: 300ms)</div>
     <div class="anim-slide-right">Item 2 (delay: 200ms)</div>
     <div class="anim-slide-right">Item 3 (delay: 100ms)</div>
     <div class="anim-slide-right">Item 4 (delay: 0ms)</div>
   </div>

   <!-- Custom Inline Variable Overrides -->
   <div class="stagger-container" style="--stagger-step: 250ms; --stagger-base: 100ms;">
     <div class="anim-flip-x">Item 1</div>
     <div class="anim-flip-x">Item 2</div>
   </div>
   ```

3. **Why is it useful?**
   In complex component layouts (grids, flex lists, navigation menus, activity feeds), hand-assigning individual `delay-100`, `delay-200`, `delay-300`, `delay-500` classes to dozens of children is repetitive, error-prone, and painful to maintain when reordering items. This container utility automatically calculates delays in pure CSS without build steps, JavaScript overhead, or HTML clutter.
