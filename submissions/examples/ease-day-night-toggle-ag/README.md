# Day/Night Toggle Switch

A beautiful toggle switch for light/dark modes that smoothly animates between a sun and a crescent moon.

## Preview

Open `demo.html` in your browser and click the switch to see the transition from day to night. Notice how the background also changes color!

## Implementation Details

- **No JavaScript:** The state is managed entirely by the HTML `<input type="checkbox">` and the CSS `:checked` pseudo-class (the "Checkbox Hack").
- **Shape Shifting:** 
    - The **Sun** is a simple circle (`border-radius: 50%`) with a yellow background. When checked, it transforms into a **Moon** by making its background transparent and using a thick, inset `box-shadow` to create the crescent shape.
    - The **Clouds** are created using a single `::after` pseudo-element and multiple `box-shadow` offsets. When checked, this element shrinks and its shadows spread out to become **Stars**.
- **`has()` Pseudo-class:** The `body:has(.theme-switch-checkbox:checked)` selector is used to change the overall background color of the page based on the state of the toggle switch, demonstrating a powerful modern CSS feature.
