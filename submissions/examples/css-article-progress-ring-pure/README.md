# CSS Article Progress Ring

A pure CSS circular reading progress indicator fixed in the corner of the screen, powered entirely by modern CSS scroll-driven animations (no JavaScript required).

## Features
- Pure CSS and HTML (Zero JavaScript `window.addEventListener('scroll')` required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--fill-color`, `--track-color`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Scroll-Driven SVG Animation Architecture (Documented in Code)**: 
  - We use a fixed positioned `.progress-container` to hold an SVG containing two `<circle>` elements (a track and a fill line).
  - The SVG is rotated `-90deg` so the stroke begins exactly at the 12 o'clock position.
  - To create the circular fill effect, we use the classic SVG `stroke-dasharray` and `stroke-dashoffset` trick. We set the dash array to exactly the circumference of the circle (`163.36px` for a `26px` radius).
  - Finally, we bind the `stroke-dashoffset` to the document's scroll timeline using the modern CSS `animation-timeline: scroll()` API. As the user scrolls, the CSS engine naturally interpolates the offset from the full circumference down to zero.
- Fully accessible with `prefers-reduced-motion` support. The scroll-driven animations are disabled for motion-sensitive users, falling back to a static, fully-completed "read" state.

## Usage
Open `demo.html` in your browser. Scroll down the article page to watch the circular progress ring in the bottom right corner fill up automatically synced to your scroll position.

## Files
- `demo.html`: The HTML structure containing the fixed SVG circles and dummy article content.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the CSS `scroll()` timeline and SVG stroke math.
