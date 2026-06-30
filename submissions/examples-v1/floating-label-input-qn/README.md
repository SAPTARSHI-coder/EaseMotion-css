# Animated Floating Label Input

## Description
A modern, clean form input component featuring a floating label that smoothly animates upwards when the user focuses on the field or starts typing. It also includes an animated underline highlight that expands from the center outwards on focus. Built entirely with pure CSS using the `:focus` and `:not(:placeholder-shown)` pseudo-classes, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure with three example inputs (Name, Email, Password).
- `style.css`: Contains the layout, the floating label transition logic, and the expanding underline highlight animation.

## How to use
1. Open `demo.html` in your browser and click on the inputs to see the labels float and the underline animate.
2. Copy the HTML and CSS into your project.
3. Wrap your `<input>` and `<label>` inside a `.input-group-qn` div, and add the `.input-highlight-qn` span.
4. **CRUCIAL STEP:** You **must** include an empty `placeholder=" "` attribute on your `<input>` element. This is a CSS trick that allows the `:not(:placeholder-shown)` selector to detect if the user has typed something, keeping the label floated up even after they click away.
5. **Customization:**
   - **Primary Color:** Change the `#3498db` color in the CSS to match your brand's primary color.
   - **Label Size/Position:** Adjust the `top` and `font-size` values in the `:focus` and `:not(:placeholder-shown)` states.
   - **Animation Speed:** Modify the `0.3s` and `0.4s` transition durations to make the animations faster or slower.