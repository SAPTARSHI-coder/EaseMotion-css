# Glassmorphism Carousel V2

A visually stunning, pure CSS interactive carousel featuring deep glassmorphism rendering, staggered entrance animations, and an ambient background layout.

## Features
- **Double Glassmorphism Architecture**: Utilizes a frosted glass outer container (`backdrop-filter: blur(10px)`) housing deeply frosted inner content cards (`backdrop-filter: blur(20px)`), creating a rich, multi-layered optical depth effect.
- **Pure CSS State Management**: Entirely functional without Javascript. Utilizes hidden `<input type="radio">` tags and the `~` general sibling combinator to control slide translation (`transform: translateX()`).
- **Staggered Content Animations**: When a slide becomes active, its inner text elements (badge, title, description, button) fade and slide up sequentially, controlled by CSS `transition-delay` logic linked directly to the radio button states.
- **Responsive Controls**: Fully functional previous/next arrows and pagination dots mapped to the `for` attribute of `<label>` tags to trigger the hidden radio inputs.
- **Ambient Blob Background**: Includes CSS-animated, heavily blurred color orbs in the background specifically designed to highlight the glass refraction and blur properties of the carousel.

## Usage
Include `demo.html` and `style.css` in your project. The `Outfit` font is utilized for a clean, modern geometric aesthetic. The carousel relies on fixed percentages (`33.3333%`) based on the total number of slides (3). If you add more slides, adjust the `.slides-wrapper` width (e.g., `400%` for 4) and `.slide` width (`25%`) accordingly.
