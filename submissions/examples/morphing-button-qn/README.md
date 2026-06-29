# Animated Morphing Button

## Description
A highly interactive button component that smoothly morphs through three states: a standard "Submit" button, a circular loading spinner, and a success checkmark. This provides excellent user feedback during form submissions or async operations. The entire animation sequence is automated using CSS keyframes, and the checkbox hack is used for state management. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure using a hidden checkbox, a label wrapper, and elements for text, loader, and checkmark.
- `style.css`: Contains the morphing transitions, loading spinner animation, success state keyframes, and state management logic.

## How to use
1. Open `demo.html` in your browser and click the button to see it morph through all three states automatically.
2. Copy the HTML and CSS into your project.
3. Wrap your button content (text, loader, checkmark) inside a `<label>` with the `.morph-btn-qn` class.
4. Use a hidden checkbox to control the state. When checked, the button automatically cycles through: Button → Loading → Success.
5. **Customization:**
   - **Colors:** Change the button background in `.morph-btn-qn` and the success color in the `morph-to-success-qn` keyframes (currently `#2ecc71`).
   - **Timing:** Adjust the `2.5s` duration in the keyframes to make the loading state longer or shorter.
   - **Size:** Modify the `height: 56px` and `min-width: 160px` to make the button larger or smaller.
   - **Animation Style:** Change the `cubic-bezier` easing function in `.morph-btn-qn` to alter the morphing feel (more bouncy, smoother, etc.).

## Note
This demo automatically cycles through the states for demonstration purposes. In a real application, you would use JavaScript to:
1. Add the `checked` state when the form is submitted.
2. Remove the `checked` state and reset the button after the operation completes (success or error).