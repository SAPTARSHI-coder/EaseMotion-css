# Floating Neumorphism Breadcrumb

A soft, tactile CSS breadcrumb navigation component utilizing Neumorphic (soft UI) design principles to create a floating, pill-shaped aesthetic.

## Features
- **Neumorphic Physics**: Utilizes deeply tuned `box-shadow` combinations (mixing a dark shadow with a white highlight) to make the breadcrumb container appear as if it is extruded from the background.
- **Interactive Pressed States**: When hovering over a breadcrumb link, an `inset` box-shadow is applied, simulating the physical pressing of a soft button into the surface.
- **Elevated Active State**: The current/active page item is styled with an extruded outer box-shadow, distinguishing it from the rest of the navigational links.
- **Floating Layout**: Designed as an isolated, floating pill (`border-radius: 50px`) rather than a full-width block, giving it a modern app-like appearance.
- **Responsive Wraparound**: On smaller screens, the container intelligently shifts its `border-radius` to accommodate flex-wrapping links without breaking the visual aesthetic.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Nunito` font is loaded in your `<head>`. This component requires the background color of the parent container to perfectly match the `--neu-bg` CSS variable (`#e0e5ec`) for the Neumorphic optical illusion to work correctly.
