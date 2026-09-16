# 3D Glassmorphism Dropdown

A beautifully animated, pure CSS dropdown menu that combines a frosted glass aesthetic with a 3D "hinge" swing animation.

## Features
- **3D Hinge Animation**: Utilizes CSS `perspective`, `transform-style: preserve-3d`, and `transform: rotateX()` to create a physical "swing down" animation when the menu opens, pivoting from the top edge (`transform-origin: top center`).
- **Dual Glassmorphism**: Features a light glassmorphism trigger button (`backdrop-filter: blur(12px)`) paired with a contrasting dark glassmorphism dropdown menu for excellent visual hierarchy.
- **Physical Hover Physics**: The trigger button slightly pops forward on the Z-axis (`translateZ(10px)`) upon hover, enabled by the 3D perspective context.
- **Micro-interactions**: Menu items feature subtle translation on the X-axis (`translateX(5px)`) and icon scaling when hovered.
- **Dynamic Background**: Includes CSS-animated background orbs specifically to demonstrate the glass refraction and blur capabilities.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Poppins` font is loaded in your `<head>`.
