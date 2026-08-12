# Chronos Sci-Fi Movie Landing Page

## What does this do?

A premium, cinematic movie landing page for the fictional film _CHRONOS: The Edge of Time_. It showcases movie details, custom cast portraits, a high-fidelity trailer mockup, movie stills, press reviews, and an interactive showtime selection/ticket reservation widget.

## How is it used?

Open [demo.html](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/film-movie-landing-page/demo.html) directly in any modern browser. It loads stylesheet dependencies from [easemotion.css](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/easemotion.css) in the root directory, a scoped custom [style.css](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/film-movie-landing-page/style.css) locally, and the scroll reveal engine [reveal.js](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core/reveal.js) in the core directory.

## Why is it useful?

It demonstrates how EaseMotion's modular components and layout tools can be tailored to high-concept, highly branded interfaces like movie marketing sites. The dark theme leverages cyan and purple glow variables and fluid grids to present content cleanly while maintaining high visual polish.

## EaseMotion CSS Classes Showcased

- **Scroll Progress Indicator**: `.ease-scroll-progress`, `.ease-scroll-progress-warning`, `.ease-scroll-progress-root` (tracks page scroll through CSS scroll-driven animations).
- **Announce Bar**: `.ease-announce-bar`, `.ease-announce-bar-dismiss`, `.ease-announce-bar-content`, `.ease-announce-bar-close` (pure CSS dismissible notification banner).
- **Glassmorphic Navigation**: `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-brand`, `.ease-navbar-menu`, `.ease-navbar-item` (responsive top bar).
- **Buttons**: `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-sm`.
- **Viewport Entrance Reveals**: `.ease-reveal` combined with `.ease-reveal-up`, `.ease-reveal-scale`, and delay modifiers `.ease-reveal-delay-1` through `.ease-reveal-delay-4`.
- **Micro-Animations**: `.ease-hover-grow`, `.ease-hover-lift`, `.ease-hover-pulse-glow` (for subtle active feedback on interactive buttons and anchors).

## Tech Stack

- HTML5 (Semantic outline)
- CSS3 (Vanilla variable overrides, space/dimension properties, and grid layouts)
- JavaScript (Via [reveal.js](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core/reveal.js) and simple time selection handlers)

## Preview

Open [demo.html](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/film-movie-landing-page/demo.html) directly in your browser.

## Contribution Notes

- Custom style variables are isolated under the `.fm-` class namespace.
- Adheres to repository rules by not modifying any files under [core/](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core) or [components/](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/components).
