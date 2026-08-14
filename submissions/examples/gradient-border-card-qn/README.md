# Animated Gradient Border Card

## Description
A modern UI card featuring a continuously rotating conic gradient border. This effect is achieved purely with CSS by using a rotating gradient pseudo-element (`::before`) and an inner masking pseudo-element (`::after`) to create the border thickness. It requires zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the card.
- `style.css`: Contains the conic gradient styling, masking, and rotation animation.

## How to use
1. Open `demo.html` in your browser to see the effect.
2. Copy the HTML and CSS into your project.
3. Apply the `.gradient-card-qn` class to your container element.
4. **Customization:** 
   - Change the gradient colors in the `conic-gradient` property inside `.gradient-card-qn::before`.
   - Adjust the border thickness by changing the `inset` value in `.gradient-card-qn::after` (make sure to also adjust the `border-radius` of the `::after` element to be slightly smaller than the parent).
   - Change the animation speed by modifying the `4s` duration in the `animation` property.