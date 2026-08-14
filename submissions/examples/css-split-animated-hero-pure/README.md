# CSS Split Animated Hero

A pure CSS "curtain reveal" hero component. Upon page load, two solid panels split down the middle and slide away to reveal the underlying content, requiring zero JavaScript for the initialization or execution.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Curtains**: The wrapper contains two absolute `<div>` elements (`.curtain-left` and `.curtain-right`). They are given a `z-index` higher than the main content, effectively hiding it on initial render.
  - **The Reveal Animation**: The curtains utilize CSS `@keyframes` (`slideLeft` and `slideRight`) that trigger immediately upon the element rendering. Crucially, they use `animation-fill-mode: forwards`, which ensures that once the curtains slide to `translateX(-100%)` and `translateX(100%)`, they stay there permanently rather than snapping back over the content.
  - **The Content Entrance**: While the curtains are opening, the underlying `.hero-content` plays its own delayed animation (`contentReveal`), fading in from `opacity: 0` and sliding up to complete the dramatic entrance.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a slate dark mode aesthetic for the curtains and typography.
- Fully accessible semantic structure. The curtains are purely decorative and are explicitly hidden from screen readers via `aria-hidden="true"`. The core content uses standard semantic tags (`<main>`, `<h1>`). Honors the `prefers-reduced-motion` accessibility standard by disabling the curtain split entirely for motion-sensitive users, immediately displaying the static hero content.

## Usage
Open `demo.html` in your browser. The animation will run automatically on page load. Refresh the page to see the effect again.

## Files
- `demo.html`: The semantic HTML structure defining the split curtains and the main hero payload.
- `style.css`: The styling, staggered `@keyframes` definitions, and the critical `animation-fill-mode: forwards` logic.
