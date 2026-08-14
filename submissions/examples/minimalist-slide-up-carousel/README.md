# CSS Slide-Up Carousel (Minimalist Tech)

A pure CSS interactive carousel component designed for Minimalist Tech Layouts. It features a polished, staggered "Slide-Up" animation that cascades across individual slide elements every time a new slide is navigated to.

## Features
- Pure CSS and HTML (No JavaScript required for state management, navigation, or animations).
- **State Management**: The active slide is managed entirely via the hidden radio button hack (`input[type="radio"]:checked`).
- **Dynamic Navigation**: Both the bottom indicator dots and the side arrows use `<label>` elements linked to the radio inputs. The side arrows utilize a complex CSS architecture (using the `~` sibling selector) to conditionally display the correct "Next" or "Previous" arrows depending on which slide is currently active, allowing infinite looping without JS.
- **The Slide-Up Effect**: 
- Individual elements within each slide (the image, the header, the text, the list, the buttons) are tagged with the `.anim-target` class.
- By default, these targets are set to `opacity: 0` and are pushed down spatially via `transform: translateY(30px)`.
- When a slide becomes active (its radio is checked), the parent triggers an `@keyframes` animation (`slide-up-in`) on all its child `.anim-target` elements. 
- We utilize utility classes (`.stagger-1`, `.stagger-2`, etc.) applying sequential `animation-delay`s to cascade the elements into view one by one. 
- The custom `cubic-bezier(0.34, 1.56, 0.64, 1)` transition timing function gives the slide-up a very subtle, satisfying physical "bounce" when it hits its target position.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, custom list styles, and geometric CSS background patterns for the slide images.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive spatial translation and bouncing bezier curves are completely stripped from the entrance animation. The interaction safely falls back to a simple, staggered opacity fade.

## Usage
Open `demo.html` in your browser. You will see a product updates carousel. Click the navigation arrows on the sides or the indicator dots at the bottom. Watch as the newly activated slide triggers a staggered slide-up animation, bringing each element of the slide into position sequentially with a slight bouncy finish.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup required to handle both direct dot navigation and relative arrow navigation without JavaScript, as well as the `.stagger-*` utility classes.
- `style.css`: The styling, radio-state logic, and the complex `@keyframes` driving the cascading slide-up mechanics.
