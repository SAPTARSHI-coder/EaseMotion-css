# Glassmorphism Navbar with Neumorphism Styling

An experimental, hybrid UI component that seamlessly merges two distinct design trends: **Frosted Glassmorphism** and **Tactile Neumorphism (Soft UI)**.

## Features
- **Hybrid Material**: The navbar utilizes a semi-transparent `rgba` background with `backdrop-filter: blur` to achieve a glass effect, while concurrently applying paired light/dark `box-shadow` values to create a physical, extruded 3D appearance.
- **Tactile Internal Buttons**: Brand logos and navigational links act as Neumorphic buttons that press inward (utilizing `inset` box-shadows) when clicked or set to an active state.
- **Dynamic Background**: A background featuring animated, blurred color blobs is included to properly showcase the refraction of the glassmorphic material.
- **Pure CSS Mobile Menu**: The component features a fully functional hamburger menu and dropdown for mobile viewports utilizing the `<input type="checkbox">` hack, eliminating the need for Javascript.
- **Smooth Animations**: High-quality transitions on shadows, transforms, and the hamburger-to-X menu icon.

## Usage
Include `demo.html` and `style.css` in your project. Combining Neumorphism and Glassmorphism is tricky because Neumorphism relies heavily on matching shadow colors to the background. In this component, the `--glass-base` variable in the CSS must serve as the visual "solid" base for the `--neu-shadow-dark` and `--neu-shadow-light` variables to work effectively.
