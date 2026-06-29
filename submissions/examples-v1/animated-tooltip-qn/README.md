# Animated Tooltips with Arrows

## Description
A clean, modern tooltip component with smooth fade-in animations and directional arrows. It includes four position variations: top, bottom, left, and right. The tooltips use the `data-tooltip` attribute for content, making them easy to implement. Built entirely with pure CSS using `::before` and `::after` pseudo-elements, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure with four buttons demonstrating each tooltip position.
- `style.css`: Contains the tooltip styling, arrow creation, position variations, and fade-in animations.

## How to use
1. Open `demo.html` in your browser and hover over the buttons to see the tooltips appear.
2. Copy the HTML and CSS into your project.
3. Add the `.tooltip-qn` class to any element you want to have a tooltip.
4. Add a `data-tooltip="Your text here"` attribute to specify the tooltip content.
5. **Position Variations:**
   - **Top (default):** Just use `.tooltip-qn`
   - **Bottom:** Add `.tooltip-bottom-qn`
   - **Left:** Add `.tooltip-left-qn`
   - **Right:** Add `.tooltip-right-qn`

## Customization
- **Tooltip Color:** Change the `background` in `.tooltip-qn::after` and the border color in `.tooltip-qn::before`.
- **Text Color:** Change the `color` in `.tooltip-qn::after`.
- **Font Size:** Adjust the `font-size` in `.tooltip-qn::after`.
- **Animation Speed:** Modify the `0.3s` transition duration in the `transition` properties.
- **Arrow Size:** Change the border widths (currently `6px`) in the `::before` pseudo-elements.
- **Spacing:** Adjust the margin values (currently `8px`) to change the distance between the element and the tooltip.