# CSS OTP Timer Resend

A hardware-accelerated, JavaScript-free OTP (One-Time Password) interface featuring a functional 30-second countdown timer that automatically reveals a "Resend" button upon completion.

## Features
- Pure CSS and HTML implementation. The entire countdown logic and state management relies on CSS `@keyframes` and the Checkbox Hack (`:checked ~`), completely eliminating the need for JavaScript `setTimeout` or `setInterval`.
- **Component Architecture**: 
  - **The Sliding Number Track**: The core of the countdown timer is a `.seconds-track` containing a vertical list of numbers from `30` down to `00`. Its parent container (`.seconds-slider`) has `overflow: hidden` and is strictly sized to show only one number at a time.
  - **The `steps()` Timing Function**: The `.seconds-track` animates its `transform: translateY()` over `30s`. Crucially, it uses the `steps(30, end)` timing function rather than `linear` or `ease`. This forces the animation to jump exactly once per second, perfectly mimicking a digital clock ticking down.
  - **State Swapping**: Two synchronized `@keyframes` (`hide-countdown` and `show-button`) run over the exact same `30s` duration. At `99.9%`, the countdown text is visible and the "Resend" button is hidden (`pointer-events: none`). At exactly `100%`, they swap visibility, enabling the user to click the button.
  - **Reset via Checkbox Hack**: The "Resend OTP" button is a `<label>` tied to a hidden checkbox. When clicked, the `:checked` state triggers a re-application of the animations, effectively "resetting" the timer back to 30 seconds.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a clean, modern aesthetic with indigo primary accents (`#4f46e5`). The timer numbers utilize a monospace font (`JetBrains Mono`) to prevent horizontal jittering as the numbers tick down. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the countdown timer is entirely hidden and the "Resend OTP" button is instantly enabled to prevent user frustration.

## Usage
Open `demo.html` in your browser. Upon loading, the timer will count down from 30 to 0. Watch the numbers tick exactly once per second. When it reaches 00, the text disappears and the "Resend OTP" link becomes clickable. Clicking the link restarts the 30-second countdown.

## Files
- `demo.html`: The HTML structure defining the OTP input fields, the hidden checkbox, and the vertical track of countdown spans.
- `style.css`: The styling, the `steps(30)` keyframe animation logic, the state-swapping visibility toggles, and the checkbox reset mechanism.
