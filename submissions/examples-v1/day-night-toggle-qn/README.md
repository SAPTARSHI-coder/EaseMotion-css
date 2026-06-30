# Day/Night Theme Toggle Switch

## Description

A beautiful, interactive Day/Night toggle switch built entirely with pure CSS. It features a smooth transition where the sky changes color, the sun morphs into a crescent moon, clouds fade out, and stars fade in. It uses the "checkbox hack" for state management, requiring absolutely zero JavaScript.

## Files

- `demo.html`: Contains the HTML structure using a hidden checkbox and label for the toggle mechanism.
- `style.css`: Contains the styling, transitions, and state-based animations for the sky, sun/moon, clouds, and stars.

## How to use

1. Open `demo.html` in your browser and click the toggle to see the smooth day/night transition.
2. Copy the HTML and CSS into your project.
3. Apply the `.theme-toggle-qn` class to a `<label>` element, and include the hidden checkbox and track structure.
4. **Customization:**
   - Change the "Day" sky color by modifying the `background-color` in `.toggle-track-qn`.
   - Change the "Night" sky color by modifying the `background-color` in `.theme-checkbox-qn:checked + .toggle-track-qn`.
   - Adjust the transition speed by changing the `0.4s` duration in the `transition` properties.
   - Change the sun/moon colors by modifying the `background-color` in `.toggle-knob-qn`.
