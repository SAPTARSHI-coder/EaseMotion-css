# Animated Glassmorphism Footer

A premium, modern website footer utilizing Glassmorphism (frosted glass) aesthetics, ambient background refraction, and infinite SVG wave animations.

## Features
- **Glassmorphism Engine**: Uses `backdrop-filter: blur(16px)` layered over a highly translucent `rgba` background and a subtle `1px` top border to create a realistic frosted glass effect. 
- **Ambient Refraction Demonstration**: Includes animated, heavily blurred color blobs (`filter: blur(80px)`) positioned behind the footer. As the user scrolls to the footer, these blobs dynamically refract through the glass surface, demonstrating the capability of the Glassmorphism styling.
- **Infinite Wave Animation**: The top border of the footer features overlapping, translucent SVG waves. These waves utilize a linear infinite `@keyframes` animation (`translate` and `scaleY`) to create a fluid, continuous liquid motion effect along the boundary.
- **Gradient Typography**: The brand heading uses a clipped linear gradient (`-webkit-background-clip: text`) to create a sleek, metallic text rendering that complements the glass UI.
- **Micro-interactions**: Footer navigation links feature a smooth, pure CSS expanding underline animation (`width` transition on a `::after` pseudo-element) on hover.

## Usage
Include `demo.html` and `style.css` in your project. The `Outfit` font family is recommended for the cleanest modern aesthetic.
- **Note**: The glassmorphism effect is heavily dependent on having elements or colors behind the footer. Ensure your website background is not a solid, flat color at the bottom for the best visual result.
