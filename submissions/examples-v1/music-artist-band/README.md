# Echo Nebula Music Artist / Band Landing Page

## What does this do?

A premium, highly interactive synthwave music artist and band landing page for the fictional band _ECHO NEBULA_. It showcases the band's latest album release, streaming platforms, upcoming concert tour schedules, discography releases, music video preview cards, limited merch shop previews, and fan club club registrations.

## How is it used?

Simply open [demo.html](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/music-artist-band/demo.html) directly in any modern browser. It loads stylesheet dependencies from [easemotion.css](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/easemotion.css) in the root directory, a scoped custom [style.css](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/music-artist-band/style.css) locally, and the scroll reveal engine [reveal.js](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core/reveal.js) in the core directory.

## Why is it useful?

It demonstrates how EaseMotion's responsive components and layout tools can be tailored to high-concept, highly branded interfaces like band marketing pages. The dark theme leverages magenta and purple glow variables and fluid grids to present audio and merchandise content cleanly while maintaining high visual polish.

## EaseMotion CSS Classes Showcased

- **Scroll Progress Indicator**: `.ease-scroll-progress`, `.ease-scroll-progress-warning`, `.ease-scroll-progress-root` (tracks page scroll through CSS scroll-driven animations).
- **Announce Bar**: `.ease-announce-bar`, `.ease-announce-bar-dismiss`, `.ease-announce-bar-content`, `.ease-announce-bar-close` (pure CSS dismissible notification banner).
- **Glassmorphic Navigation**: `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-brand`, `.ease-navbar-menu`, `.ease-navbar-item` (responsive top bar).
- **Buttons**: `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-sm`.
- **Viewport Entrance Reveals**: `.ease-reveal` combined with `.ease-reveal-up`, `.ease-reveal-scale`, and delay modifiers `.ease-reveal-delay-1` through `.ease-reveal-delay-4`.
- **Micro-Animations**: `.ease-hover-grow`, `.ease-hover-lift`, `.ease-hover-pulse-glow`, `.ease-hover-bounce-text` (for subtle active feedback on interactive buttons and streaming icons).

## Tech Stack

- HTML5 (Semantic outline)
- CSS3 (Vanilla variable overrides, space/dimension properties, and grid layouts)
- JavaScript (Via [reveal.js](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core/reveal.js) for entrance transitions)

## Preview

Open [demo.html](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/music-artist-band/demo.html) directly in your browser to view the page.

## Contribution Notes

- Custom style variables are isolated under the `.mu-` class namespace.
- Adheres to repository rules by not modifying any files under [core/](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core) or [components/](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/components).
