# Gradient Border Card

1. **What does this do?**
   A card component with a gradient border rendered using the CSS pseudo-element mask technique. No extra wrapper divs, no box-shadow hacks — pure CSS.

2. **How is it used?**
   ```html
   <!-- Default -->
   <div class="gradient-border-card">
     Your content here
   </div>

   <!-- Animated -->
   <div class="gradient-border-card gradient-border-card-animated">
     Your content here
   </div>

   <!-- Thick border -->
   <div class="gradient-border-card gradient-border-card-thick">
     Your content here
   </div>

   <!-- Dark -->
   <div class="gradient-border-card gradient-border-card-dark">
     Your content here
   </div>
   ```

3. **Why is it useful?**
   The pseudo-element mask technique is the correct, modern way to achieve gradient borders without extra markup. Composable variants (animated, thick, dark) follow EaseMotion CSS's human-readable, animation-first philosophy perfectly.
