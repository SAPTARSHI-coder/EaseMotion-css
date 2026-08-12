# CSS Scroll-Linked Scale

A pure CSS component featuring elements that scale dynamically from small to large as the page scrolls, built entirely without JavaScript using modern CSS APIs.

## Features
- Pure CSS and HTML (Zero JavaScript scroll event listeners or complex math calculations).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--card-bg`, `--bg-base`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Scroll-Driven Timelines (Documented in Code)**: 
- This component leverages two modern CSS timeline APIs:
- `animation-timeline: scroll()`: Binds the scaling animation perfectly to the absolute scroll position of the entire page document.
- `animation-timeline: view()`: Binds the scaling animation to the element's intersection with the viewport, which is perfect for elements placed far down the page.
- Both animations scrub backwards smoothly if you scroll back up!
- Fully accessible with `prefers-reduced-motion` support. The scaling animations are completely disabled for motion-sensitive users, rendering the elements at full scale by default.

## Usage
Open `demo.html` in your browser. Scroll down the page. You will notice the first card scaling up in direct proportion to your global scroll progress. Further down, you will see a second card scaling up as it enters the viewport.

## Files
- `demo.html`: The HTML structure detailing the layout and spacer blocks required to generate a scrollbar.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `scroll()` and `view()` timelines.
