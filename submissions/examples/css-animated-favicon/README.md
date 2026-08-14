# CSS Animated Favicon

A technique and demonstration of animating a website's browser tab favicon entirely via CSS `@keyframes`, eliminating the need for heavy JavaScript Canvas loops.

## Features
- Pure CSS and SVG (Zero JavaScript required for animation frames or DOM manipulation).
- **Embedded CSS in SVG Technique**: 
- Traditionally, animating a favicon required complex JavaScript to generate frames on a hidden HTML `<canvas>` element, encode them to Data URIs, and constantly swap the `href` of the `<link>` tag via `requestAnimationFrame`. This is heavy on the main thread and burns battery.
- Modern browsers (Chrome, Edge, Firefox) now natively support SVG favicons. 
- This component leverages this by embedding a standard HTML `<style>` block directly inside the `favicon.svg` file. The browser's native engine parses and executes these CSS `@keyframes` animations while rendering the icon in the tab bar.
- **Native OS Theming Support**: 
- Because the browser parses the SVG's CSS natively, CSS Media Queries like `@media (prefers-color-scheme: dark)` work *inside* the SVG favicon!
- The favicon automatically adapts to the user's OS Dark/Light mode, changing its colors to ensure it remains visible against both dark browser tabs and light browser tabs.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the `@keyframes` inside the SVG are disabled via media query, leaving a static, clean icon.

## Usage
Open `demo.html` in a modern browser (Chrome/Edge/Firefox). Look up at your browser's tab bar to see the favicon spinning and pulsing. Try toggling your operating system's Light/Dark mode and watch the favicon dynamically change its color palette to match.

## Files
- `favicon.svg`: The actual vector graphic containing the `<style>` block that powers the CSS `@keyframes` and media queries.
- `demo.html`: The HTML wrapper demonstrating how to link the SVG (`<link rel="icon" type="image/svg+xml" href="favicon.svg">`) and providing documentation UI.
- `style.css`: Basic styling for the demo page's info card.
