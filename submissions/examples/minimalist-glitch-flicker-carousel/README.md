# CSS Glitch-Flicker Carousel (Minimalist Tech)

A pure CSS interactive carousel component designed for Minimalist Tech Layouts. It features a bold, cyberpunk-inspired "Glitch-Flicker" transition effect that triggers whenever a new slide is navigated to.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **State Management**: The active slide is managed entirely via the hidden radio button hack (`input[type="radio"]:checked`).
- **Dynamic Navigation**: Both the bottom indicator dots and the side arrows use `<label>` elements linked to the radio inputs. The side arrows utilize a complex CSS architecture (using the `~` sibling selector) to conditionally display the correct "Next" or "Previous" arrows depending on which slide is currently active.
- **The Glitch-Flicker Transition**: 
- We bypass standard smooth fading. Instead, `.carousel-slide` elements use `transition: opacity 0s step-end` to appear instantly.
- When a slide becomes active, it triggers animations on two hidden `.glitch-layer` elements (Cyan and Magenta) that sit behind the main text but over the background.
- These layers utilize intense `@keyframes` (`glitch-anim-cyan`, `glitch-anim-magenta`) with rapid, aggressive `clip-path: polygon()` slicing and translations to simulate digital tearing.
- Simultaneously, the main `.slide-content` executes a `content-flicker` animation that slightly shifts the container left and right while applying rapid `filter: hue-rotate()` changes, completing the glitch illusion.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, and geometric CSS background patterns for the slide images.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive clipping, tearing, and hue-shifting animations are completely disabled. The interactions safely fall back to a standard, immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a featured projects carousel. Click the navigation arrows on the sides or the indicator dots at the bottom. Watch as the newly activated slide violently flickers and tears into view using the pure CSS glitch effect before settling into sharp focus.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup required to handle both direct dot navigation and relative arrow navigation without JavaScript.
- `style.css`: The styling, radio-state logic, and the complex `clip-path` `@keyframes` driving the cyberpunk glitch mechanics.
