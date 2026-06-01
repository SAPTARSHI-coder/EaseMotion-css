# Ease Rubber Band 🎈

An interactive squash-and-stretch animation triggered on user interaction.

## 🚀 What it does
The `ease-rubber-band` class brings the classic animation principle of "squash and stretch" to the DOM. When an element is clicked (via the `:active` pseudo-class), it rapidly expands in one axis while compressing in the other, snaps into the reverse state, and then settles back to its original form. 

The animation relies on strict reciprocal math (e.g., `scaleX(1.25)` paired with `scaleY(0.75)`) to maintain the visual volume of the element, giving it a realistic, physical, rubber-like feel.

## 🛠️ How to use it
You can easily apply this effect to buttons, interactive cards, or icons to provide satisfying tactile feedback.

1. **Apply the class:** Add `.ease-rubber-band` to your HTML element.
   ```html
   <button class="ease-rubber-band">Submit</button>
   ```

2. **Customize the speed:** The duration of the animation is controlled by a CSS custom property. You can override it locally or globally:
   ```css
   :root {
       --ease-rubber-speed: 400ms; /* Default is 400ms */
   }
   ```

## ✨ Why it fits EaseMotion CSS
This component aligns seamlessly with the goals of the EaseMotion CSS library:
* **Zero Dependencies:** Achieves complex physical motion using pure CSS `@keyframes`, keeping the library lightweight.
* **Hardware Accelerated:** Built with GPU-acceleration in mind (`translateZ(0)` and `backface-visibility: hidden`), ensuring that text and inner content remain crisp and jitter-free during rapid scaling.
* **Plug-and-Play:** It uses the native `:active` state, meaning developers don't need to write custom JavaScript event listeners to trigger the animation; they just drop the class onto an element and it works.