# CSS Scroll-Spy Navigation

A pure CSS table-of-contents sidebar navigation that highlights the active section in real-time as you scroll down the page, built entirely without JavaScript event listeners.

## Features
- Pure CSS and HTML (Zero JavaScript `window.addEventListener('scroll')` required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--link-active-bg`, `--bg-base`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Scroll-Driven Animation API (Documented in Code)**: 
- This component creates the scroll-reactive behavior using the modern CSS `animation-timeline` API linked across DOM elements.
- Each content `<section>` registers its own tracking timeline using `view-timeline-name: --section-X;`.
- The corresponding navigation `<li>` links bind an `@keyframes` background-color animation to that exact timeline via an inline CSS variable `style="--timeline-target: --section-X"`.
- By defining `animation-range: entry 20% exit 80%;`, CSS natively activates the highlight keyframe *only* when that specific section occupies the main viewing area of the screen.
- Responsive design adapts to a horizontally scrolling top-nav on smaller screens.

## Usage
Open `demo.html` in your browser. Scroll down the page and watch the sidebar navigation links automatically highlight and de-highlight as their corresponding sections enter and leave the viewport.

## Files
- `demo.html`: The HTML structure containing the sidebar nav and the named `view-timeline-name` sections.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the CSS `view-timeline` implementation.
