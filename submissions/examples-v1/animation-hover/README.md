# Animation Playground

1. **What does this do?**
   Demonstrates six standalone CSS animation effects — lift, pulse border, shimmer, bounce-in, fade-slide-up, and glow — as a self-contained interactive reference for contributors.

2. **How is it used?**
   Apply the effect class directly to any block element:

   ```html
   <!-- Lift on hover/focus -->
   <div class="lift-card">...</div>

   <!-- Animated focus ring -->
   <div class="pulse-card" tabindex="0">...</div>

   <!-- Continuous shimmer sweep -->
   <div class="shimmer-card">...</div>

   <!-- Spring bounce entrance -->
   <div class="bounce-card">...</div>

   <!-- Fade + slide-up entrance -->
   <div class="fade-slide-card">...</div>

   <!-- Ambient glow on hover/focus -->
   <div class="glow-card">...</div>
   ```

3. **Why is it useful?**
   EaseMotion CSS is built around purposeful, lightweight motion. This playground bundles six of the most common interaction patterns — entrance animations, hover feedback, and focus indicators — into a single browsable demo. New contributors can open `demo.html` locally to see how these effects behave before writing their own submission, and the code serves as a reference for how to structure scoped, accessible CSS animations (including `prefers-reduced-motion` support).
