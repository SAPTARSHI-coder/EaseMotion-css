# Full Veterinary Clinic Landing Page

1. **What does this do?**  
   It provides a high-fidelity, fully responsive landing page for a Veterinary Clinic ("Paws & Claws") showcasing custom theme wiggling, a dynamic pet age/life-stage care advisor widget, services grid, and an appointment booking request form.

2. **How is it used?**  
   The page is self-contained. All styles are isolated under the `vet-` prefix to prevent collision.

   ### HTML Layout Sections

   ```html
   <!-- Sticky Header -->
   <header class="vet-header">
     <div class="vet-nav-container">
       <a href="#" class="vet-logo">🐾 Paws & Claws</a>
     </div>
   </header>

   <!-- Hero Showcase -->
   <section class="vet-hero">
     <div class="vet-hero-content">
       <h1 class="vet-hero-title">Compassionate Care...</h1>
     </div>
   </section>

   <!-- Care Advisor Tool -->
   <section class="vet-advisor-section" id="advisor">
     <div class="vet-advisor-card">
       <select id="petType" class="vet-advisor-select">
         ...
       </select>
       <div class="vet-advisor-result" id="advisorResult">...</div>
     </div>
   </section>
   ```

3. **Why is it useful?**
   - **Interactive Pet Care Advisor**: Includes a built-in interactive health coordinator tool that responds to user inputs (type: Dog/Cat/Rabbit, stage: young/adult/senior) and renders tailored clinical guidelines dynamically with smooth fade transitions.
   - **Zero Layout Collisions**: Classes use the `vet-` prefix.
   - **Theme Engine Support**: Incorporates a dark/light mode toggle utilizing CSS custom properties for instant rendering adjustments.
   - **Accessibility & Focus-Friendly**: Designed with explicit `:focus-visible` outline offsets for keyboard accessibility and complete `@media (prefers-reduced-motion: reduce)` overrides to deactivate animations for users with motion sensitivities.
