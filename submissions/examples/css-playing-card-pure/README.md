# CSS Playing Card

A standard 3D flipping playing card (Ace of Spades) built entirely with CSS and HTML, featuring an intricate CSS-generated geometric pattern on the back.

## Features
- Pure CSS and HTML implementation without any JavaScript or images.
- **Component Architecture**: 
  - **3D Flip Mechanics**: Uses a nested `.card-wrapper` within a `.card-container` to establish a 3D perspective context (`perspective: 1000px`). The wrapper handles the 180-degree `rotateY` animation on hover. The front and back faces are absolutely positioned inside, utilizing `backface-visibility: hidden` to ensure they don't bleed through when rotated.
  - **The Patterned Back**: The classic casino diamond pattern on the card back is created purely using CSS `repeating-linear-gradient` properties, layering two diagonal gradients over each other to form the geometric shapes without needing an external image asset.
  - **Typography & Layout**: Standard playing card indices are positioned using flexbox and absolute positioning. The bottom-right corner is inverted natively using `transform: rotate(180deg)`.
  - **Dynamic Shadows**: As the card flips on hover, it simultaneously lifts (`translateY(-10px)`) while the floor shadow scales down and blurs further, enhancing the illusion of 3D physical depth.
- Fully accessible semantic structure. The container uses `aria-label` to provide context to screen readers, while the decorative elements use `aria-hidden="true"` to prevent redundant reading of the card suits. Honors the `prefers-reduced-motion` accessibility standard by disabling the 3D flip animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over (or focus) the card to watch it seamlessly flip over and reveal the Ace of Spades.

## Files
- `demo.html`: The HTML structure defining the 3D container, the front face typography, and the back face.
- `style.css`: The styling, the `preserve-3d` definitions, the gradient pattern logic, and the hover transitions.
