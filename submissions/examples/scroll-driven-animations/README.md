# Native CSS Scroll-Driven Animations

A demonstration of the modern CSS `animation-timeline` specification, providing scroll-linked interactions completely devoid of JavaScript. 

## Features
- **Zero JavaScript**: No `window.addEventListener('scroll')` or `IntersectionObserver` logic. 
- **Reading Progress Bar**: Uses `animation-timeline: scroll()` bound to the root page scroll. As the user scrolls down, a fixed header bar scales from 0 to 100% width.
- **View-Linked Element Reveal**: Uses `animation-timeline: view()` and `animation-range`. Elements fade and slide up exactly in sync with their entry into the user's viewport.
- **Hardware Accelerated**: Because these animations are natively handled by the browser's CSS compositor engine, they are entirely decoupled from the main UI thread, eliminating scroll jank.
- **Accessible & Progressive Enhancement**: Encapsulated within an `@supports (animation-timeline: view())` query to ensure older browsers just render the content normally without hiding it. Respects `@media (prefers-reduced-motion: reduce)` by disabling the scale/slide reveal.

## Usage
Open `demo.html` in a modern browser (Chrome 115+, Edge 115+) and begin scrolling down. 
- Watch the top blue bar progress.
- Watch the cards dynamically enter the view. Scroll up and down rapidly to see the animation perfectly reverse and scrub in real-time.

## Files
- `demo.html`: The HTML structure containing dummy content to create a scrollable page.
- `style.css`: The styling rules defining the modern `scroll()` and `view()` timelines.
