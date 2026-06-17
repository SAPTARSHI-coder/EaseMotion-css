# CSS-Only DNA Helix Animation

A mesmerizing, endless 3D DNA double helix structure rotating in space. Entirely constructed with pure HTML and CSS!

## Features
- ✨ **100% CSS-only**: Driven entirely by CSS custom properties and keyframes. No JavaScript or SVGs required.
- 🧬 **3D Rotation Effect**: Achieves a realistic 3D spiral by utilizing `transform: rotateY()` and staggering the animations across sibling elements using CSS custom property `--i`.
- 🔴🔵 **Neon Nucleotides**: The edges of the strands are styled with vibrant, glowing colors to represent nucleotide pairs.
- 🔄 **Counter-Twist Keyframes**: The outer colored dots utilize a `counter-twist` keyframe animation so they always face the camera correctly as the main strand rotates in 3D space.

## Files
- `demo.html`: The HTML structure containing the DNA strands.
- `style.css`: The stylesheet driving the geometry, glowing colors, and the 3D twist animations.

## Usage
Simply load the HTML file and link the CSS. The DNA helix animation runs automatically.
