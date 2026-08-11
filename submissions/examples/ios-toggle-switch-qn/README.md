# iOS-Style Toggle Switch

## Description
A smooth, highly polished toggle switch inspired by the native iOS control. It features a seamless sliding animation, a background color transition, and a subtle "stretch" effect on the knob when pressed, providing excellent tactile feedback. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure using a hidden native checkbox and a visual label wrapper.
- `style.css`: Contains the track and knob styling, the sliding transition, and the active state stretch effect.

## How to use
1. Open `demo.html` in your browser and click the toggles. Click and hold to see the stretch effect.
2. Copy the HTML and CSS into your project.
3. Wrap your native `<input type="checkbox">` inside a `<label>` with the `.switch-qn` class.
4. Ensure the `.switch-slider-qn` span is a sibling of the input.
5. **Customization:**
   - **Checked Color:** Change the `background-color` in `.switch-input-qn:checked + .switch-slider-qn` (currently iOS green `#34c759`).
   - **Track Color:** Change the `background-color` in `.switch-slider-qn` for the unchecked state.
   - **Size:** To make it larger or smaller, adjust the `width` and `height` in `.switch-qn`, and proportionally adjust the knob's `width`, `height`, and `translateX` values.
   - **Animation Speed:** Modify the `0.3s` transition duration in `.switch-slider-qn` and `.switch-slider-qn::before`.