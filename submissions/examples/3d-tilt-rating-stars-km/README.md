# 3D Tilt Rating Stars

1. **What does this do?** A star rating display where each star tilts in 3D (rotateX/rotateY) and scales up when hovered or focused, giving tactile depth feedback instead of a flat color change.
2. **How is it used?** Wrap star spans in a `.tilt-star-rating` container (which sets the CSS `perspective`), and apply `.tilt-star` to each star span. Add `.is-filled` to stars that should appear as already-rated (gold color) versus unrated (gray).
   ```html
   <div class="tilt-star-rating">
     <span class="tilt-star is-filled">★</span>
     <span class="tilt-star">★</span>
   </div>
   ```
3. **Why is it useful?** Star ratings are one of the most common UI elements (e-commerce, reviews, dashboards), but most implementations only change color on hover. This pure-CSS variant adds a subtle 3D perspective tilt per star for a more polished, tactile feel, fitting EaseMotion CSS's animation-first philosophy. No JavaScript required — works with `:hover` and `:focus-visible` alone, and respects `prefers-reduced-motion` by disabling the tilt/scale transform for users who request reduced motion.
