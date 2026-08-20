# Staggered Step Indicator Navigation

An interactive dashboard step indicator featuring staggered fade-and-scale animations for completed, active, and upcoming steps.

## What does this do?
This demo creates a step-by-step progress wizard indicator. As steps complete, indicator rings scale up elastically, lines transition color, and details fade in sequentially.

## How is it used?
1. Link `style.css` in your HTML file.
2. Structure your wizard steps:
   ```html
   <div class="steps-container">
     <div class="step completed">...</div>
     <div class="step active">...</div>
     <div class="step upcoming">...</div>
   </div>
   ```
3. Use CSS classes like `completed`, `active`, and `upcoming` to trigger corresponding keyframes.

## Why is it useful?
Sequential staggered step indicators provide clear visual feedback to users during multi-step forms, checkout wizards, or onboarding flows, enhancing overall UX completion rates.
