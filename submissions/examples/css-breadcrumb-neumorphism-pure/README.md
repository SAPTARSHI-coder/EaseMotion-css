# CSS-only Breadcrumb with Neumorphism Styling

A soft, tactile breadcrumb navigation utilizing Neumorphism (Soft UI) design principles. Built entirely with HTML and CSS.

## Features
- Deep Neumorphic visual styling utilizing meticulously paired `box-shadow` values (light source and dark drop shadow)
- Navigational links act as extruded, physical buttons that invert to an inset state upon being clicked (`:active`)
- The current page indicator is styled with a permanent inset shadow to indicate its inactive/selected state
- Custom CSS-drawn chevron separators that incorporate subtle lighting highlights to match the physical aesthetic
- Fully accessible structured markup (`<nav aria-label="Breadcrumb">`, `<ol>`)
- Flexbox based responsive layout

## Usage
Include `demo.html` and `style.css` in your project. Ensure the background color of your parent container perfectly matches the `--bg-color` variable defined in the CSS (`#e0e5ec`). Neumorphism relies heavily on the elements having the exact same base color as their background to create the physical illusion.
