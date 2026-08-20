# CSS Shimmer-Sweep Navbar (Minimalist Tech)

A pure CSS responsive navigation bar component designed for Minimalist Tech Layouts. It features a premium "Shimmer-Sweep" metallic effect on the navigation links and call-to-action button, utilizing advanced CSS background clipping techniques.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.shimmer-text` elements use `background-clip: text` paired with a linear gradient. On hover, the `background-position` transitions across the text, creating a sleek metallic shimmer that literally sweeps over the words.
- Active navigation links run an infinite `@keyframes` animation, keeping the shimmer effect slowly rolling across the text.
- The primary `.btn-shimmer` button utilizes a skewed `::before` pseudo-element with a semi-transparent white gradient. An infinite `@keyframes` animation rapidly sweeps this highlight across the button, mimicking a light glare on a glass surface.
- Designed with a dark, high-contrast aesthetic utilizing the `Inter` font, ideal for developer tools and dark-mode dashboards.
- Includes a `backdrop-filter: blur(12px)` for a frosted-glass effect over scrolling content.
- Fully responsive layout featuring a pure CSS mobile dropdown menu (powered by the hidden checkbox hack) with animated hamburger icons.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the `background-clip` trickery is entirely bypassed in favor of a standard color change, and infinite button animations are disabled.

## Usage
Open `demo.html` in your browser. You will see a dark-themed navigation bar. Hover over the navigation links to witness the metallic shimmer sweep rapidly across the text. The active "API Reference" link will slowly shimmer continuously. Note the continuous light glare sweeping across the primary "Deploy Now" button.

## Files
- `demo.html`: The HTML structure for the navbar, utilizing the hidden checkbox hack for the mobile menu state.
- `style.css`: The styling, background-clip logic, continuous `@keyframes` animations, and mobile dropdown logic.
