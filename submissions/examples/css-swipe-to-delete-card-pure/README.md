# CSS Swipe-to-Delete Card

A pure CSS card component that can be natively swiped left on touch devices (or horizontally scrolled) to reveal a hidden delete action, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript touch event listeners, calculation math, or drag physics).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--card-bg`, `--delete-bg`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Native Scroll Snapping (Documented in Code)**: 
- This component creates the "swipe" effect utilizing the native CSS scroll physics engine. 
- `overflow-x: auto` is combined with `scrollbar-width: none` to create a hidden horizontal scroll plane.
- `scroll-snap-type: x mandatory` enforces strict snapping behavior so the card perfectly rests in either the "closed" or "open" state when the user releases their finger.
- The main card is set to `flex: 0 0 100%;` forcing it to take up the full view width, pushing the action button off-screen.
- Because it uses the browser's native scroll engine, the swipe physics are hardware-accelerated, buttery smooth, and feel entirely native on iOS and Android touch screens.

## Usage
Open `demo.html` in your browser. On a trackpad or touch screen, simply swipe left on the card to reveal the delete button. If using a mouse without horizontal scroll capability, you can hold shift and scroll down, or simulate touch in Chrome DevTools.

## Files
- `demo.html`: The HTML structure containing the swipe wrapper, the main card flex items, and the action button.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the CSS `scroll-snap` architecture.
