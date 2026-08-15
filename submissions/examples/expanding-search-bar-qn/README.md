# Animated Expanding Search Bar

## Description
A modern, space-saving search bar component that starts as a compact circular button and smoothly expands into a full input field when clicked or focused. It utilizes the modern CSS `:focus-within` pseudo-class to detect when the input is active, creating a seamless expansion and text reveal animation without any JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the container, input field, and SVG search button.
- `style.css`: Contains the layout, `:focus-within` state triggers, and smooth width/opacity transitions.

## How to use
1. Open `demo.html` in your browser and click the search icon to see the expansion effect.
2. Copy the HTML and CSS into your project.
3. Wrap your input and button inside a `.search-container-qn` div.
4. **Customization:**
   - **Expanded Width:** Change the `width: 350px` in `.search-container-qn:focus-within` to make the search bar wider or narrower.
   - **Colors:** Change the button background by modifying the `background` in `.search-btn-qn`. Change the container background in `.search-container-qn`.
   - **Animation Speed:** Adjust the `0.5s` transition duration in `.search-container-qn` to make the expansion faster or slower.
   - **Icon Animation:** Remove or modify the `transform: rotate(90deg)` in the `:focus-within` state if you don't want the icon to spin.