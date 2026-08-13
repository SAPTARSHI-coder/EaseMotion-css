# Accordion: Glassmorphism

A pure CSS, fully semantic accordion utilizing native `<details>` and `<summary>` elements, wrapped in stunning frosted glass aesthetics.

## Features
- Pure CSS and HTML implementation. Absolutely no JavaScript required for state management or animation.
- **Component Architecture & Styling Mechanics**: 
  - **Native HTML5 State**: Uses the semantic `<details>` and `<summary>` tags. The browser inherently handles the "open/closed" state, saving us from using the complex "CSS Checkbox Hack" or JavaScript event listeners.
  - **Glassmorphism Theme**: Each accordion item is styled with a translucent background (`rgba(255, 255, 255, 0.1)`), a subtle white border, and most importantly, `backdrop-filter: blur(16px)`. A vibrant, animated background mesh containing floating color orbs is provided in the demo to showcase the light bending through the frosted glass.
  - **CSS Grid Animation**: Traditionally, you cannot animate to `height: auto` in CSS. This component circumvents that limitation by using CSS Grid. The `.accordion-content` is a grid container that transitions from `grid-template-rows: 0fr` to `grid-template-rows: 1fr` when the `.accordion-item[open]` attribute is active. This allows for buttery smooth, performant expansion and collapse animations.
  - **Custom Animated Icon**: The default `details-marker` (the little black triangle) is hidden using `::-webkit-details-marker { display: none; }` and `list-style: none`. It is replaced with a custom CSS-drawn chevron that smoothly rotates when the item opens.
- Fully accessible semantic structure. Screen readers and keyboard navigation (Tab, Enter/Space to toggle) work flawlessly out of the box thanks to the native `<details>` element. Honors the `prefers-reduced-motion` accessibility standard by disabling the background orbs and grid expansion animations if requested by the OS.

## Usage
Open `demo.html` in your browser. You will see three frosted glass panels floating above a dark, vibrant background. Click on any of the headers to see them smoothly expand to reveal content.

## Files
- `demo.html`: The HTML structure defining the semantic `<details>`/`<summary>` elements and the background mesh.
- `style.css`: The styling, the `backdrop-filter` glass properties, and the CSS Grid `1fr` to `0fr` animation hack.
