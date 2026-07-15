# FinFlow Budgeting App Landing Page

## What does this do?

A complete, responsive, premium consumer FinTech landing page for the budgeting and savings app _FinFlow_. It showcases an app dashboard mockup, live savings stats, a feature grid (tracking, goals, insights), security/compliance trust badges, customer testimonials, subscription pricing plans, and an interactive FAQ accordion.

## How is it used?

Simply open [demo.html](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/budgeting-app-landing-page/demo.html) directly in any modern browser. It loads stylesheet dependencies from [easemotion.css](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/easemotion.css) in the root directory, a scoped custom [style.css](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/budgeting-app-landing-page/style.css) locally, and the scroll reveal engine [reveal.js](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core/reveal.js) in the core directory.

## Why is it useful?

It demonstrates how EaseMotion's responsive components and layout tools can be tailored to conversion-focused FinTech web layouts. The design uses emerald and teal money gradients and structured detail summaries to convey trust and utility while maintaining high visual polish.

## EaseMotion CSS Classes Showcased

- **Scroll Progress Indicator**: `.ease-scroll-progress`, `.ease-scroll-progress-success`, `.ease-scroll-progress-root` (tracks page scroll through CSS scroll-driven animations).
- **Announce Bar**: `.ease-announce-bar`, `.ease-announce-bar-dismiss`, `.ease-announce-bar-content`, `.ease-announce-bar-close` (pure CSS dismissible notification banner).
- **Glassmorphic Navigation**: `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-brand`, `.ease-navbar-menu`, `.ease-navbar-item` (responsive top bar).
- **Buttons**: `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-sm`.
- **Viewport Entrance Reveals**: `.ease-reveal` combined with `.ease-reveal-up`, `.ease-reveal-scale`, and delay modifiers `.ease-reveal-delay-1` through `.ease-reveal-delay-3`.
- **Micro-Animations**: `.ease-hover-grow`, `.ease-hover-lift`, `.ease-hover-pulse-glow` (for subtle active feedback on interactive buttons and anchors).

## Tech Stack

- HTML5 (Semantic outline)
- CSS3 (Vanilla variable overrides, space/dimension properties, and grid layouts)
- JavaScript (Via [reveal.js](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core/reveal.js) for entrance transitions)

## Preview

Open [demo.html](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/budgeting-app-landing-page/demo.html) directly in your browser to view the page.

## Contribution Notes

- Custom style variables are isolated under the `.ff-` class namespace.
- Adheres to repository rules by not modifying any files under [core/](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core) or [components/](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/components).
