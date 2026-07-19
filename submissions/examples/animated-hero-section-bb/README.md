# Animated Hero Section

1. **What does this do?**
   A full-viewport hero section with floating radial-gradient particles, a CSS grid overlay, staggered content entrance animations (badge → headline → description → CTA), an animated gradient headline highlight, a social proof strip, and a code-window visual with staggered line-by-line reveal animation.

2. **How is it used?**
   ```html
   <section class="hero">
     <div class="hero-particles">
       <div class="particle p1"></div>
       <!-- more particles -->
     </div>
     <div class="hero-grid"></div>

     <div class="hero-content">
       <div class="hero-badge">
         <span class="badge-dot"></span>
         🎉 Announcing v2.0
       </div>
       <h1 class="hero-headline">
         Build <span class="headline-highlight">animations</span>
         without complexity
       </h1>
       <p class="hero-description">Your description here</p>
       <div class="hero-actions">
         <a class="hero-btn hero-btn-primary">Get started →</a>
         <a class="hero-btn hero-btn-ghost">▷ Watch demo</a>
       </div>
     </div>

     <div class="hero-visual">
       <div class="code-window"><!-- ... --></div>
     </div>
   </section>
   ```

3. **Why is it useful?**
   Hero sections set the first impression of any product. This submission packs numerous EaseMotion CSS animation patterns into one cohesive composition: staggered `translateY` entrance with `animation-delay` chains, a `background-position` gradient shift on the headline, floating particles via `translate + rotate` keyframes, a CSS grid radial-masked overlay, and code-window line-by-line reveal. Every technique maps to planned `ease-fade-up`, `ease-particle`, `ease-stagger`, and `ease-gradient-text` utilities.
