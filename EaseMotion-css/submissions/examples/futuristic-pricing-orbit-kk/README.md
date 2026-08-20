# Pricing Orbit Demo

## What does this do?
This is a futuristic, animation-first pricing showcase for EaseMotion CSS. Instead of a traditional rectangular grid, it features an orbital layout where three pricing plans (Explorer, Creator, Infinity) revolve around a glowing central hub. It serves as a visual demonstration of what can be achieved using pure CSS animations, breaking away from standard SaaS pricing conventions to create a unique, premium experience.

## How is it used?
This demo is completely standalone. Simply open `demo.html` in a modern web browser to view the interactive pricing orbit. The CSS rules and keyframes are defined in `style.css` and can be extracted to use similar orbital mechanics, glowing effects, and expanding interactions in your own futuristic UI designs.

## Why is it useful?
It demonstrates how to combine multiple complex CSS animations (orbital rotation, counter-rotation, gradients, glowing pulses) into a cohesive, interactive component without relying on JavaScript or external animation libraries. This type of unique design is perfect for crypto, gaming, AI, or high-tech landing pages that want to make a bold statement and show off their motion design.

## Features
- **Orbital Layout**: Pricing nodes continuously revolve around a central core instead of sitting in a static grid.
- **Interactive Hover States**: The orbital rotation automatically pauses, and nodes expand into detailed feature panels when hovered over.
- **Futuristic Aesthetics**: Designed with a dark theme, neon gradients, a glowing hub, and a subtle floating particle background.
- **Pure CSS Animations**: No JavaScript is required for the core layout and orbital mechanics (a tiny 10-line script is only used to spawn the background particles).

## Animation breakdown
1. **Orbit Motion**: The `.orbit-ring` rotates continuously, while the child `.pricing-node` elements counter-rotate in sync to ensure their text and content always remain perfectly upright.
2. **Floating Effect**: Each pricing node and its internal content gently float up and down on their own axis to add a sense of weightlessness.
3. **Glow Pulse**: The central "Choose Your Motion" hub emits a continuous, breathing neon glow using alternating `box-shadow` properties.
4. **Hover Expansion**: Nodes seamlessly transition from a small circular badge into a large, rounded feature panel. This involves scaling, border-radius manipulation, and content cross-fading.
5. **Rotating Border Effect**: An animated `conic-gradient` provides a dynamic, constantly spinning border for each pricing node, which adapts smoothly during hover expansion.
6. **Entrance Animation**: The entire orbit component zooms and fades into view with a 3D `rotateX` transformation upon initial page load.

## File structure
- `demo.html`: The HTML structure of the orbital layout and minimal JS for background particles.
- `style.css`: The styling rules, custom properties, and complex keyframe animations.
- `README.md`: This documentation.

## How to run
1. Navigate to the `submissions/examples/futuristic-pricing-orbit-kk/` directory.
2. Open `demo.html` in any web browser.

## Design inspiration
Inspired by sci-fi heads-up displays (HUDs), planetary orbits, and modern cyberpunk aesthetics, this component showcases the power of EaseMotion CSS for creating immersive, motion-rich user experiences that go beyond the flat web.
