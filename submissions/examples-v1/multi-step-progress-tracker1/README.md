# Animated Multi-Step Progress Tracker

This submission showcases a modern **Multi-Step Form Wizard** with an animated progress bar. It demonstrates how to use **EaseMotion CSS** to create smooth, directional transitions between complex UI states, significantly improving the user experience during lengthy onboarding or checkout flows.

## ✨ Features
- **Directional Content Transitions**: Content slides left when moving forward, and slides right when moving backward.
- **Animated Progress Bar**: The connecting line smoothly fills up as steps are completed.
- **EaseMotion Integration**: 
  - `ease-slide-in-right` / `ease-slide-in-left`: Directional entrance for step content.
  - `ease-slide-out-left` / `ease-slide-out-right`: Directional exit for step content.
  - `ease-bounce-in`: Applied to the newly active step circle for a satisfying "pop" effect.
  - `ease-fade-in`, `ease-slide-down`, `ease-scale-up`: Staggered, elegant entrance animations for the wizard container.
  - `ease-hover-lift`: Interactive feedback on input fields and navigation buttons.

## 🚀 How to Use
1. Open `demo.html` in any modern web browser.
2. Click **"Next"** to advance through the 4 steps. Observe the content sliding left and the progress bar filling.
3. Click **"Back"** to go to the previous step. Observe the content sliding right.
4. Notice the `ease-bounce-in` effect on the active step circle every time it changes.

## 📂 Files
- `demo.html`: Standalone demo with vanilla JS state management and directional animation logic.
- `style.css`: Custom layout, progress bar styling, and step indicator design.