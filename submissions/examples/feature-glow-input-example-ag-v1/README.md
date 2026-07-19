# Glow Input Example

## Description
This example provides a pure HTML/CSS implementation of an input field that features an engaging, smooth glow effect on hover and focus. It enhances the standard input element by adding a colored box-shadow that simulates a diffused glow, improving the premium feel and keyboard accessibility.

## Files Provided
- `demo.html`: The HTML structure containing the accessible input layout.
- `style.css`: The CSS that styles the input and defines the transition properties for the glow effect.

## How to Run
Open `demo.html` in any modern web browser to see the effect in action.

## Implementation Details
- **Accessible Structure:** The input uses semantic HTML with a properly linked `<label>` via the `for` and `id` attributes.
- **CSS Transitions:** Instead of complex keyframes, this effect uses simple `transition: box-shadow 0.3s ease, border-color 0.3s ease` combined with `will-change` for high-performance rendering.
- **Glow Effect:** When the `.ease-glow-input-ag` receives `:hover` or `:focus`, the `border-color` shifts and a soft `box-shadow` is applied to create the glow.
- **Accessibility (Reduced Motion):** If `prefers-reduced-motion: reduce` is detected, the transition duration is safely disabled. The glow effect still applies for focus visibility, but it happens instantly rather than animating.
