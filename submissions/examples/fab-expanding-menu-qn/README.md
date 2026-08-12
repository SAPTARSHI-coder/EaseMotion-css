# Animated Floating Action Button (FAB) with Expanding Menu

## Description
A modern, interactive Floating Action Button (FAB) that expands to reveal a cascading menu of action buttons on hover. The main button smoothly rotates 135 degrees to turn the "plus" icon into an "X", while the sub-buttons slide out with a staggered, bouncy animation. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the main FAB, the 3 action buttons with inline SVG icons, and the CSS-only plus icon.
- `style.css`: Contains the layout, the cascading slide-in transitions, the rotation animation, and the hover states.

## How to use
1. Open `demo.html` in your browser and hover over the red FAB to see the menu expand.
2. Copy the HTML and CSS into your project.
3. Wrap your action buttons and the main button inside a `.fab-container-qn` div.
4. **Customization:**
   - **Colors:** Change the main button color by modifying the `background` in `.fab-main-qn`. Change the action button icon color in `.fab-action-qn`.
   - **Number of Buttons:** You can easily add or remove `.fab-action-qn` elements. If you add more, be sure to add them to the staggered delay classes or adjust the `transition-delay` in the CSS.
   - **Animation Speed & Bounce:** Adjust the `0.4s` duration and the `cubic-bezier(0.175, 0.885, 0.32, 1.275)` easing function in the transition properties to make the movement faster, slower, or more/less bouncy.
   - **Direction:** To make the menu expand downwards instead of upwards, change `flex-direction: column-reverse;` to `flex-direction: column;` in `.fab-container-qn`, and change `translateY(30px)` to `translateY(-30px)` in `.fab-action-qn`.