# Animated Step Indicator/Progress Stepper

## Description
A modern, fully animated step indicator component perfect for multi-step forms, checkout processes, and onboarding flows. It features smooth animations for completed steps (with animated checkmarks), an active step with a pulsing ring effect, and connecting lines that fill progressively. The component is fully responsive and adapts from horizontal to vertical layout on mobile. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for a 4-step checkout process with completed, active, and upcoming states.
- `style.css`: Contains the step styling, animations, connecting lines, checkmark effects, and responsive design.

## How to use
1. Open `demo.html` in your browser to see the animated step indicator.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Wrap all steps in a `.step-indicator-qn` container
   - Each step uses `.step-qn` with optional `.completed-qn` or `.active-qn` classes
   - Add `.step-line-qn` divs between steps for connecting lines
   - Include both the checkmark SVG and step number in each circle
4. **Customization:**
   - **Colors:** Change the gradient colors in `.step-qn.completed-qn .step-circle-qn` and `.step-line-qn::after`.
   - **Number of Steps:** Add or remove step elements. The layout will automatically adjust.
   - **Animation Speed:** Adjust the transition durations (currently `0.4s` for circles, `0.6s` for lines).
   - **Size:** Modify the `width` and `height` in `.step-circle-qn` to make steps larger or smaller.

## Features
- **Three States:** Completed (with checkmark), Active (with pulse), and Upcoming
- **Animated Checkmarks:** SVG checkmarks draw themselves when a step is completed
- **Progressive Line Fill:** Connecting lines animate from left to right as steps complete
- **Pulsing Active Step:** Current step has a subtle pulsing ring animation
- **Scale Effects:** Steps scale up when completed or active
- **Fully Responsive:** Switches to vertical layout on mobile devices
- **Staggered Animations:** Steps appear in sequence on page load

## State Management
To change the active step, simply update the classes:
- Remove `.completed-qn` and `.active-qn` from all steps
- Add `.completed-qn` to all steps before the current one
- Add `.active-qn` to the current step
- Add `.completed-qn` to the connecting lines before the current step

Example: Moving from step 2 to step 3:
```html
<!-- Step 1: Completed -->
<div class="step-qn completed-qn">...</div>
<div class="step-line-qn completed-qn"></div>

<!-- Step 2: Completed -->
<div class="step-qn completed-qn">...</div>
<div class="step-line-qn completed-qn"></div>

<!-- Step 3: Active -->
<div class="step-qn active-qn">...</div>
<div class="step-line-qn"></div>

<!-- Step 4: Upcoming -->
<div class="step-qn">...</div>