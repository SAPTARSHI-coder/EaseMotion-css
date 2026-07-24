# Glassmorphism Card with Shine Effect

## Description
A modern, trendy UI card featuring a "frosted glass" aesthetic using the CSS `backdrop-filter` property. It sits over a colorful background, blurring the colors behind it. Additionally, it features a smooth, sweeping "shine" glare effect that crosses the card when hovered. Built entirely with pure CSS, requiring zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the colorful background and the glass card content.
- `style.css`: Contains the `backdrop-filter` glass styling, the hover lift transition, and the `::before` pseudo-element shine animation.

## How to use
1. Open `demo.html` in your browser and hover over the card to see the lift and shine effects.
2. Copy the HTML and CSS into your project.
3. **Crucial:** For the glass effect to work, there *must* be a colorful background or image behind the card. Apply the `.glass-card-qn` class to your container.
4. **Customization:**
   - **Blur Intensity:** Change the `16px` value in `backdrop-filter: blur(16px)` to make the glass more or less frosted.
   - **Glass Tint:** Adjust the `rgba(255, 255, 255, 0.08)` background color to make the card lighter or darker.
   - **Border:** Modify the `border` property to make the glass edge more or less prominent.
   - **Shine Speed:** Adjust the `0.6s` transition duration in `.glass-card-qn::before`.