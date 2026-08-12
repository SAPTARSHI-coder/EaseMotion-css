# Multi-Step Onboarding Wizard with Slide Transitions

1. **What does this do?**  
   It renders a multi-step onboarding wizard layout that transitions between step panes using smooth left/right sliding animation timing behaviors.

2. **How is it used?**  
   Apply the `.wizard-box` class on the wrapper container and toggle visibility on child step content items:
   ```html
   <div class="wizard-box">
     <div class="progress-track">
       <div class="progress-fill"></div>
     </div>
     <div class="wizard-viewport">
       <div class="step-content active slide-in-right">
         <h3>Step Content</h3>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   It breaks down complex registration and configuration workflows into digestible, guided tasks while providing smooth spatial sliding cues.
