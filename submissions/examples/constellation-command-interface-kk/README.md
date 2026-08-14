# Constellation Command Interface

## What does this do?
This is a highly original, animation-first navigation showcase for EaseMotion CSS. It replaces traditional website navigation (like navbars, sidebars, or grids) with a futuristic interactive star map. Each navigation option acts as a glowing star connected by energy-flowing constellation lines. 

## How is it used?
The demo is entirely standalone. You can open `demo.html` in any modern web browser to interact with the interface. The CSS is modular enough that you can extract the `.node-wrapper`, SVG `.constellation-lines`, and keyframe animations to build your own complex data visualizations, immersive UI dashboards, or web-based game interfaces.

## Why is it useful?
It demonstrates the extreme flexibility of pure CSS for creating complex, living interfaces without relying on WebGL, Canvas, or JavaScript animation libraries. By utilizing modern CSS features like the `:has()` pseudo-class, we can create advanced interactive reactions—such as highlighting connected constellation lines and making adjacent stars react when hovering a specific node—purely through stylesheets.

## Features
- **Living Interface**: The entire constellation slowly drifts and breathes using CSS transforms, creating an organic, living feel.
- **Pure CSS Interactivity**: Advanced hover states trigger reactions not only on the hovered element but on connected SVG lines and adjacent HTML stars.
- **Glassmorphism Panels**: Futuristic data panels expand smoothly when investigating a node, using a combination of blur filters and nested transitions.
- **Responsive Geometry**: The SVG lines and HTML nodes use percentage-based positioning, allowing the constellation to scale flawlessly while maintaining absolute alignment across screen sizes.
- **Deep Space Theme**: A multi-layered, parallax drifting starry background generated entirely via CSS gradients.

## Animation Breakdown
This showcase exceeds requirements by featuring 9 completely custom keyframe animations:
1. `parallaxSlow`: Drifting the deepest background star layer.
2. `parallaxMedium`: Drifting the colored foreground star layer.
3. `constellationDrift`: Shifts the entire map slowly for a breathing effect.
4. `linePulse`: Causes the base constellation lines to pulse subtly in brightness and width.
5. `energyFlow`: Moves glowing particles along the SVG paths using `stroke-dashoffset` logic.
6. `starPulse`: The resting pulse animation for standard star nodes.
7. `starPulseActive`: A more intense, brighter pulse specifically for the central command node.
8. `ringRotate1`: Clockwise rotation of the first command ring.
9. `ringRotate2`: Counter-clockwise rotation of the dashed command ring.

## File Structure
- `demo.html`: The HTML structure combining the SVG line network and HTML interaction nodes.
- `style.css`: The stylesheet containing all the logic, positioning, custom variables, and keyframe animations.
- `README.md`: This documentation file.

## How to Run
1. Navigate to the `submissions/examples/constellation-command-interface-kk/` directory.
2. Open the `demo.html` file in any web browser. No local server is strictly required.

## Design Inspiration
Inspired by sci-fi strategy game maps (like Stellaris or Endless Space), futuristic cinematic HUDs, and the concept of "Data as a Universe." It shifts the paradigm from standard rectangular web design into fully immersive digital experiences.
