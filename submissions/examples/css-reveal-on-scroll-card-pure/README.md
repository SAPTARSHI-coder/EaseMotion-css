# CSS Reveal-on-Scroll Card

A pure CSS card component that gracefully animates into view as the user scrolls down the page, built entirely without JavaScript using modern CSS APIs.

## Features
- Pure CSS and HTML (Zero JavaScript event listeners, no IntersectionObserver needed).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--card-bg`, `--bg-base`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Scroll-Driven Animations (Documented in Code)**: 
- This component leverages the modern CSS `animation-timeline: view()` API to bind the animation progress natively to the browser's scroll position.
- `animation-range: entry 10% cover 30%;` dictates that the animation should start when the card is 10% of the way into the viewport and finish when it reaches 30%, giving a butter-smooth reveal effect.
- Because it's natively bound to the scroll timeline, if you scroll *upwards*, the animation will seamlessly scrub backwards!
- Fully accessible with `prefers-reduced-motion` support. The fade and slide animations are completely disabled for motion-sensitive users, rendering the cards fully visible by default.

## Usage
Open `demo.html` in your browser. Scroll down the page to see the cards fade in and slide up smoothly as they enter the bottom of your viewport.

## Files
- `demo.html`: The HTML structure detailing the card layouts and scroll spacing.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the CSS `animation-timeline` API.
