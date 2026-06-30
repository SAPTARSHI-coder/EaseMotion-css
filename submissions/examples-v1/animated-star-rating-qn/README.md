# Animated Star Rating Component

## Description

A highly interactive and polished star rating component. It features a smooth color transition, a subtle scale effect on hover, and a satisfying "pop" animation when a rating is selected. It uses the pure CSS "radio button hack" combined with `flex-direction: row-reverse` to handle the state and highlight all stars to the left of the hovered/selected star. It requires absolutely zero JavaScript.

## Files

- `demo.html`: Contains the HTML structure using hidden native radio inputs and SVG labels.
- `style.css`: Contains the layout, hover transitions, checked state styling, and the pop keyframe animation.

## How to use

1. Open `demo.html` in your browser and hover/click the stars to see the smooth animations.
2. Copy the HTML and CSS into your project.
3. **Crucial HTML Structure:**
   - The radio inputs and labels must be in **reverse numerical order** in the HTML (5, 4, 3, 2, 1).
   - The CSS uses `flex-direction: row-reverse` to display them visually from 1 to 5. This allows the CSS general sibling combinator (`~`) to easily target all stars to the "left" (which are actually to the right in the DOM).
4. **Customization:**
   - **Colors:** Change the empty star color in `.rating-qn label`, the hover color in the `:hover` state, and the selected color in the `:checked` state.
   - **Size:** Adjust the `width` and `height` in `.rating-qn label svg` to make the stars larger or smaller.
   - **Spacing:** Modify the `gap` in `.rating-qn` to increase or decrease the space between stars.
   - **Animation:** Tweak the `0.4s` duration and the `cubic-bezier` values in the `pop-star-qn` keyframes to change the bounce intensity.
