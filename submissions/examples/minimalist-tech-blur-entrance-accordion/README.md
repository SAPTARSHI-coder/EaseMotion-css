# CSS Blur-Entrance Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a cinematic "Blur-Entrance" animation that smoothly pulls the content into focus as the accordion expands.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Minimalist Tech Aesthetic**: Clean panel layout, subtle focus states, distinct semantic icon background accents, and an animated Plus/Minus indicator.
- **Pure CSS State Management**: 
- Utilizes the "Radio Button Hack". Inside each `.accordion-item`, there is a hidden `<input type="radio">` that tracks the open/closed state, and an `<label>` acting as the header. 
- Using `type="radio"` ensures that only one accordion item can be open at a time (exclusive expansion).
- **CSS Grid Height Transition**: 
- The `.accordion-body` uses modern CSS Grid techniques (`grid-template-rows: 0fr` transitioning to `1fr`) to smoothly animate the height from 0 to `auto`. This is the most performant, JS-free way to handle dynamic height transitions.
- **The Blur-Entrance Animation System**: 
- The inner `.body-content` starts with `opacity: 0`, a slight downward offset (`translateY(10px)`), and a heavy CSS filter (`filter: blur(10px)`).
- When the parent radio button is checked, a CSS transition smoothly brings the content into focus (`blur(0px)`), fades it in, and slides it up to its baseline. 
- We apply a `0.1s` transition delay to the content so that the grid has a moment to start opening *before* the content begins to fade and un-blur, creating a highly polished, cinematic reveal.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the blur filter and spatial translations are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock "System Configuration FAQ". Click on any accordion header. Notice how the grid smoothly expands, the plus icon morphs into a minus, and the internal text cinematicly pulls into focus from a heavy blur.

## Files
- `demo.html`: The HTML structure for the accordion, detailing the crucial radio/label relationship for CSS state management, and the nested `body-content` structure required for the grid transition.
- `style.css`: The styling, tech design tokens, the `grid-template-rows` trick for smooth height animation, and the `filter: blur()` transition logic.
