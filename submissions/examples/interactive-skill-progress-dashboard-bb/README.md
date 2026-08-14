# Interactive Skill Progress Dashboard

1. **What does this do?**
   Renders an animated skill-tracking dashboard with staggered card entrance animations, animated count-up XP display, CSS-driven animated progress bars with shimmer sweep, hover micro-interactions, and accessibility-compliant ARIA progress bars.

2. **How is it used?**
   ```html
   <!-- Animated progress bar -->
   <div class="skill-progress-track"
        role="progressbar"
        aria-valuenow="78"
        aria-valuemin="0"
        aria-valuemax="100">
     <div class="skill-progress-fill"
          style="--progress: 78%; --color: #60a5fa;">
     </div>
   </div>

   <!-- Skill card with staggered animation -->
   <article class="skill-card">
     <div class="skill-card-top">
       <div class="skill-icon-wrapper skill-icon-blue">
         <span class="skill-icon">🎨</span>
       </div>
       <div class="skill-meta">
         <h2 class="skill-name">CSS Animation</h2>
         <span class="skill-level-badge level-advanced">Advanced</span>
       </div>
       <div class="skill-percentage">78%</div>
     </div>
     <!-- ...progress track, bottom row -->
   </article>
   ```

3. **Why is it useful?**
   Developer portfolio and learning-tracker UIs benefit from animated progress indicators that communicate progress in a visually compelling way. This submission demonstrates several EaseMotion CSS-aligned patterns: CSS custom property-driven progress widths (`--progress`, `--color`), staggered entrance delays via `animation-delay`, a shimmer sweep effect on the progress fill bar, count-up animation powered by the IntersectionObserver API, and comprehensive `prefers-reduced-motion` support. These patterns map directly to planned framework utilities such as `ease-progress-fill`, `ease-stagger`, and `ease-count-up`.
