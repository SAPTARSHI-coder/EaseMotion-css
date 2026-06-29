# CSS Ripple Effect Button

## Description
A modern, Material Design-inspired button featuring a smooth, expanding ripple effect on hover. This effect is achieved purely with CSS by using an `::after` pseudo-element that scales up from the center using `width` and `height` transitions. It provides excellent visual feedback and requires absolutely zero JavaScript.

## Files
- `demo.html`: Contains the simple HTML structure for the button.
- `style.css`: Contains the button styling, overflow masking, and the expanding ripple transition.

## How to use
1. Open `demo.html` in your browser and hover over the button to see the ripple effect.
2. Copy the HTML and CSS into your project.
3. Apply the `.btn-ripple-qn` class to your `<button>` or `<a>` elements.
4. **Customization:**
   - **Button Color:** Change the `background` color in `.btn-ripple-qn` and `.btn-ripple-qn:hover`.
   - **Ripple Color:** Change the `background` color in `.btn-ripple-qn::after` (currently a semi-transparent white).
   - **Ripple Size:** Adjust the `width` and `height` in `.btn-ripple-qn:hover::after`. Make sure the value is large enough to cover the entire button when expanded.
   - **Speed:** Adjust the `0.6s` transition duration in `.btn-ripple-qn::after` to make the ripple faster or slower.