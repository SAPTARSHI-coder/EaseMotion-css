# Layer Mix-Blend-Mode Utilities

This utility module presents a showcase playground for CSS layer blending options, explicitly built for complex modern component designs within **EaseMotion**.

## Implemented Blend Utilities
- `.blend-screen`: Inverts the layer elements, multiplies them, and inverts the result, bleaching out dark pixels completely.
- `.blend-multiply`: Multiplies the color values of the target element by the underlying canvas background layers.
- `.blend-overlay`: Combines multiply and screen logic based on the baseline background luminosity profile.
- `.blend-difference`: Subtracts the darker color from the lighter color to produce high-contrast inversion layouts.
- `.blend-color-dodge`: Brightens the backdrop color to reflect the overlay color profile.

## Directory Manifest
- `demo.html` - Staging ground containing full hero typography and structural sample tokens.
- `style.css` - Custom styling declarations mapping blend equations cleanly.
- `README.md` - Technical index sheet.