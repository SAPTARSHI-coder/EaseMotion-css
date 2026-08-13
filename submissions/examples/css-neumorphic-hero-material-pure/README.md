# Neumorphic Hero Section: Material Design

A unique, JavaScript-free hero section that blends the tactile depth of Neumorphism (Soft UI) with the bold, purposeful color palette and elevation principles of Material Design.

## Features
- Pure CSS and HTML implementation. Fully responsive layout using CSS Flexbox.
- **Component Architecture & Styling Mechanics**: 
  - **Neumorphism (Soft UI)**: The core layout utilizes a slightly blue-tinted grey background (`#ebf0f5`). Elements like the secondary button, the top tag, and the large image card are extruded from this background using a dual-layered `box-shadow`: a dark shadow (`#c8d0e7`) applied to the bottom-right, and a solid white shadow applied to the top-left.
  - **Material Design Infusion**: Traditional Neumorphism suffers from low contrast and accessibility issues. This component fixes that by infusing Material Design principles:
    - The Primary Call-to-Action button uses a bold Material Deep Purple (`#6200ea`). Instead of the standard soft extrusion, it uses Material's standard elevation shadow (`0 4px 6px rgba(0,0,0,0.2)`).
    - When the Primary button is clicked (`:active`), it utilizes a unique "Colored Neumorphic Inset" shadow (`inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(255,255,255,0.2)`) to provide the tactile feedback of Neumorphism while retaining the bold Material color.
  - **Layered Image Card**: The right-side visual features a large Neumorphic card with a heavy extrusion (`box-shadow: 20px 20px 40px...`). Inside, the image container uses an `inset` shadow to make the image appear recessed into the card, creating a stunning depth effect.
- **Animations**: Includes a CSS `@keyframes` pulsing dot on the top tag and gentle floating animations on the extruded SVG icons.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the pulse and float animations if requested by the OS.

## Usage
Open `demo.html` in your browser. On a desktop screen, you will see a two-column hero layout. Hover over the buttons to see the elevation changes. Click the buttons to experience the tactile inset shadows. Resize your browser window to see the layout elegantly stack into a single column for mobile devices.

## Files
- `demo.html`: The HTML structure defining the hero content, actions, and the right-side visual card.
- `style.css`: The styling, the complex `box-shadow` configurations blending Neumorphism and Material Design, and the responsive media queries.
