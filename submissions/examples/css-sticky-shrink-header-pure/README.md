# CSS Sticky Shrink Header

A pure CSS sticky navigation header that dynamically shrinks its height and styles based on the user's scroll position, built entirely without JavaScript event listeners.

## Features
- Pure CSS and HTML (Zero JavaScript `window.addEventListener('scroll')` required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--header-bg`, `--bg-base`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`) and includes a beautiful glassmorphism blur backdrop.
- **Scroll-Driven Animation API (Documented in Code)**: 
- This component creates the scroll-reactive behavior using the modern CSS `animation-timeline: scroll()` API.
- Three separate keyframes are bound to the page's scroll timeline:
  1. The main header wrapper fades in a bottom border and a box-shadow.
  2. The inner header content animates its `height` from `100px` down to `64px`.
  3. The logo text smoothly scales its `font-size` down.
- **Animation Range**: By defining `animation-range: 0 100px;`, we instruct CSS to map the entire keyframe animation exactly to the first 100 pixels of vertical scrolling. After 100px, it locks into the shrunken state. If the user scrolls back up, it scrubs the animation in reverse.
- Fully accessible with `prefers-reduced-motion` support. The animations are disabled and the header defaults to the compact, fully-styled state for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Scroll down the page slowly to watch the header smoothly transition from a large, transparent state into a compact, bordered state.

## Files
- `demo.html`: The HTML structure containing the header markup and dummy body content to enable scrolling.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the CSS `scroll-timeline` implementation.
