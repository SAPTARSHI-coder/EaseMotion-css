# CSS Blur-Entrance Carousel (Minimalist Tech)

A pure CSS interactive carousel component designed for Minimalist Tech Layouts. It features a highly cinematic, sequential "Blur-Entrance" animation that executes on individual slide elements every time a new slide is navigated to.

## Features
- Pure CSS and HTML (No JavaScript required for state management, navigation, or animations).
- **State Management**: The active slide is managed entirely via the hidden radio button hack (`input[type="radio"]:checked`).
- **Dynamic Navigation**: Both the bottom indicator dots and the side arrows use `<label>` elements linked to the radio inputs. The side arrows utilize a complex CSS architecture (using the `~` sibling selector) to conditionally display the correct "Next" or "Previous" arrows depending on which slide is currently active, allowing infinite looping without JS.
- **The Blur-Entrance Effect**: 
- Individual elements within each slide (the image, the quote, the text, the buttons) are tagged with the `.anim-target` class.
- By default, these targets are set to `opacity: 0`, heavily blurred (`filter: blur(10px)`), and scaled up/translated downwards.
- When a slide becomes active (its radio is checked), the parent triggers an `@keyframes` animation (`cinematic-blur-in`) on all its child `.anim-target` elements. 
- We utilize utility classes (`.stagger-1`, `.stagger-2`, etc.) applying sequential `animation-delay`s to cascade the elements into view one by one. 
- The custom `cubic-bezier(0.19, 1, 0.22, 1)` transition timing function creates a highly cinematic, dramatic easing that starts fast and settles slowly into sharp focus.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, and distinct content areas (images vs typography).
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive spatial scaling, translation, and blurring are completely stripped from the entrance animation. The interaction safely falls back to a simple, staggered opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a customer stories carousel. Click the navigation arrows on the sides or the indicator dots at the bottom. Watch as the newly activated slide triggers a cinematic, cascading blur-entrance animation, bringing each element of the slide into sharp focus sequentially.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup required to handle both direct dot navigation and relative arrow navigation without JavaScript, as well as the `.stagger-*` utility classes.
- `style.css`: The styling, radio-state logic, and the complex `@keyframes` driving the cinematic blur mechanics.
