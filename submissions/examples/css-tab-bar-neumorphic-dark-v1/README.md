# Dark Neumorphic Tab Bar

A highly polished, mobile-first Tab Bar component built with pure CSS. It implements the Neumorphic (soft UI) design trend specifically tailored for Dark Mode environments.

## Features

- **Pure CSS State**: Utilizes the radio button hack (`<input type="radio">` + `<label>`) to handle tab selection states without any JavaScript.
- **Dark Mode Neumorphism**:
  - The base tab bar and unselected buttons use extruded (outset) `box-shadows` utilizing subtle dark greys and deep blacks to create a 3D convex surface.
  - When a tab is selected (`:checked`), the shadow transitions to an `inset` shadow, providing excellent physical feedback of the button being "pressed" into the surface.
- **Glow Effects**: Active icons receive a bright cyan (`#00d2ff`) color and a matching `text-shadow` glow to clearly indicate selection against the dark background.
- **Elevated Primary Action**: The center button is elevated (`transform: translateY(-10px)`), larger, and styled with a vibrant gradient to serve as a primary Floating Action Button (FAB) embedded within the tab bar.

## Usage
Include `demo.html` and `style.css` in your project. This component uses [Phosphor Icons](https://phosphoricons.com/) via a CDN link in the HTML `<head>` for its crisp, modern iconography, but you can swap these for FontAwesome or SVG paths easily.
