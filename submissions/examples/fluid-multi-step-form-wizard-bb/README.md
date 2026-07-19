# Fluid Multi-Step Form Wizard

1. **What does this do?**
   A multi-step registration form wizard with animated panel slide transitions (forward/backward), a visual step progress indicator with completion states, password strength meter, radio-style theme selector, toggle switches for preferences, and a success celebration screen.

2. **How is it used?**
   ```html
   <!-- Steps nav -->
   <nav class="wizard-steps" aria-label="Form progress">
     <div class="wizard-step active" data-step="1" aria-current="step">
       <div class="step-circle">
         <span class="step-num">1</span>
         <span class="step-check">✓</span>
       </div>
       <span class="step-label">Account</span>
     </div>
     <div class="wizard-connector"></div>
     <!-- more steps... -->
   </nav>

   <!-- Animated panels -->
   <section class="wizard-panel active slide-in-right" id="panel-1">
     <h2 class="panel-title">Create your account</h2>
     <div class="field-group">
       <div class="field">
         <label for="email" class="field-label">Email</label>
         <input type="email" id="email" class="field-input" />
       </div>
     </div>
   </section>
   ```

3. **Why is it useful?**
   Multi-step forms reduce cognitive load for complex onboarding. This submission demonstrates EaseMotion CSS-aligned patterns: directional slide transitions based on navigation direction (slide-in-right forward, slide-in-left backward), spring-physics step circle scale on activation, smooth connector fill animation, a toggle switch with spring-physics thumb movement, and CSS `:has()` selector for radio states. All interactions include focus-visible states, ARIA `aria-current="step"`, and `prefers-reduced-motion` support. Maps to planned utilities `ease-slide-in-right`, `ease-slide-in-left`, `ease-toggle`, and `ease-stepper`.
