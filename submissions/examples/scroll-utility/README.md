# ease-reveal

Scroll-triggered reveal animations — elements fade, slide, or zoom into view as the user scrolls, using pure CSS scroll-driven animations (`animation-timeline: view()`). No JavaScript or IntersectionObserver required.

## What
Adds `.ease-reveal` base class plus direction variants: `ease-reveal-up`, `ease-reveal-left`, `ease-reveal-right`, `ease-reveal-zoom`.

## How
- Uses the CSS `animation-timeline: view()` scroll-driven animations spec to tie keyframe progress to scroll position instead of time.
- `animation-range: entry 0% cover 30%` controls when the animation starts/finishes relative to the element entering the viewport.
- A `@supports not (animation-timeline: view())` fallback keeps content visible in browsers that don't yet support scroll-driven animations, so nothing is ever permanently hidden.
- Respects `prefers-reduced-motion`.

## Why
Scroll reveal is one of the most requested modern web effects (used heavily in portfolios/landing pages) and EaseMotion CSS currently has no scroll-linked animation utility — only time-based ones. This adds a genuinely different animation trigger model to the library.

## Files
- `demo.html` — scrollable page showing all 4 reveal directions
- `style.css` — the `ease-reveal` classes and keyframes
- `README.md` — this file

## Usage
\```html
<div class="ease-reveal ease-reveal-up">Content</div>
\```

## Browser support note
Scroll-driven animations are supported in modern Chromium browsers. Safari/Firefox users get the `@supports` fallback (static visible content) until support lands.