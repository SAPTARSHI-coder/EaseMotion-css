# Minimalist Tech Tada-Click Accordion

This submission resolves issue #33011.

## Features
- **Minimalist Tech Theme**: A completely unique structure focusing on stark minimalism. Features a grid-based layout with thick borders and brutalist minimalist typography.
- **Component Structure**: Unlike previous radio-button implementations, this uses a robust `CSS Grid` approach (`grid-template-rows: 0fr` to `1fr`) controlled by a lightweight JavaScript class toggle.
- **Animation**: Implements the `ease-click-tada` animation. When the user clicks an accordion header to open it, the title performs a distinct "tada" attention-grabbing animation.

## File Structure
- `demo.html`: Grid-based layout with simple JS for state toggling.
- `style.css`: Original brutalist/minimalist styles and `ease-tada` keyframes.
