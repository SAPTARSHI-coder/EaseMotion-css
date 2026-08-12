# Neumorphic (Soft UI) Button

## Description
A modern "Soft UI" or Neumorphic button component. It uses a specific background color matched with two layered `box-shadow` values (one light, one dark) to create a realistic 3D extrusion effect. When the user clicks (active state), the shadows invert to `inset`, creating a satisfying tactile "press-in" animation. Built entirely with pure CSS.

## Files
- `demo.html`: Contains the HTML structure for the button and an inline SVG icon.
- `style.css`: Contains the background matching, double-shadow extrusion logic, and the inset press animation.

## How to use
1. Open `demo.html` in your browser and click/hold the button to see the press effect.
2. Copy the HTML and CSS into your project.
3. **CRUCIAL STEP:** The `background-color` of the `body` (or container) **MUST** be exactly the same as the `background` of the button (in this case `#e0e5ec`). If they don't match, the illusion breaks.
4. **Customization:**
   - **Theme Color:** To change the color theme (e.g., to a dark mode neumorphism), change the background color and recalculate the shadow colors. 
     - *Dark Shadow:* Background Color - 15% brightness.
     - *Light Shadow:* Background Color + 15% brightness (or white with opacity).
   - **Depth:** Adjust the pixel values in `box-shadow` (e.g., `9px`) to make the extrusion more or less pronounced.
   - **Shape:** Change `border-radius: 50%` to `20px` to make it a rounded square instead of a circle.