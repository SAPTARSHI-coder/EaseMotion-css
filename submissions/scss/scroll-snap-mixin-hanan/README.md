# Reusable CSS Scroll Snap Mixins

1. **What does this do?**  
   Provides reusable SCSS mixins to configure CSS Scroll Snap properties on container and child items.

2. **How is it used?**

   ```scss
   @use "scroll-snap" as ease;

   .carousel-container {
     @include ease.ease-scroll-snap-container(
       $direction: x,
       $strictness: mandatory
     );
   }

   .carousel-item {
     @include ease.ease-scroll-snap-item($align: center);
   }
   ```

3. **Why is it useful?**  
   It translates the framework's existing scroll snap utilities into SCSS, allowing developers using Sass to build responsive carousel components programmatically without cluttering markup.
