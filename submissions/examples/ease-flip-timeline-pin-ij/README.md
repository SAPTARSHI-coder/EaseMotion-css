# Flip Timeline Pin

A vertical timeline with flip-animated pins that reveal an icon on hover using CSS 3D transforms.

## Features

- Vertical timeline with connecting line
- Circular pins with flip animation on hover
- Front (year) flips to reveal back (icon)
- 3D perspective and backface-visibility
- Clean timeline layout with card content

## Usage

Include `style.css` and structure timeline items with `.tl-pin` containing `.tl-pin-front` and `.tl-pin-back` elements. The flip uses `rotateY` with `backface-visibility: hidden`.
