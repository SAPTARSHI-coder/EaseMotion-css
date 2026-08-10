# ease-voice-command-badge

1. **What does this do?**
   This is a pure HTML and CSS voice command badge component featuring continuous breathing indicator animations, concentric listening soundwaves, alexa/siri style gradient processing ring rotations, and distinct success/error visual overlays.

2. **How is it used?**
   Create visually hidden radio controls mapped to your desired state triggers, wrap your badge in a `.voice-badge-container`, and place the badge inside:

   ```html
   <!-- Hidden State Inputs -->
   <input type="radio" id="voice-idle" name="voice-state" class="state-trigger-input" checked>
   <input type="radio" id="voice-listening" name="voice-state" class="state-trigger-input">

   <div class="badge-showcase">
     <!-- Ripples for Listening state -->
     <div class="ripples-wrapper">
       <div class="ripple ripple-1"></div>
       <div class="ripple ripple-2"></div>
       <div class="ripple ripple-3"></div>
     </div>

     <div class="voice-badge-container">
       <label for="voice-listening" class="voice-badge">
         <div class="processing-ring"></div>
         <div class="voice-badge-inner">
           <!-- SVG microphone icon -->
         </div>
       </label>
     </div>
   </div>
   ```

3. **Why is it useful?**
   It enables developers to build highly interactive, motion-rich voice assistant interfaces without any JavaScript footprint, supporting fully native keyboard arrow navigation and immediate visual scaling adaptivity for accessible designs.
