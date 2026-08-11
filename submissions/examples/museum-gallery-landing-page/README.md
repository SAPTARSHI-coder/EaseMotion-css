# Metropolis Museum & Gallery Landing Page

## What does this do?

A complete, responsive, premium landing page for a cultural institution (Museum/Gallery) featuring exhibitions, ticket booking, a visit planner, membership tiers, an events calendar, a virtual tour CTA, and newsletter updates.

## How is it used?

Simply open [demo.html](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/museum-gallery-landing-page/demo.html) directly in any modern web browser. It links to the root [easemotion.css](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/easemotion.css) framework file, custom scoped [style.css](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/museum-gallery-landing-page/style.css), and the intersection-observer script [reveal.js](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core/reveal.js) to play animations on scroll.

## Why is it useful?

It demonstrates a real-world, high-fidelity landing page showcase for the **EaseMotion CSS** framework. It proves how easily EaseMotion's pre-built modules and utility systems integrate with unique brand styles (such as Metropolis' elegant serif typography and gold spotlight aesthetics) without requiring bloat.

## EaseMotion CSS Classes Showcased

- **Scroll Progress**: `.ease-scroll-progress`, `.ease-scroll-progress-warning`, `.ease-scroll-progress-root` (tracks page scroll using pure CSS scroll-driven animations).
- **Announce Bar**: `.ease-announce-bar`, `.ease-announce-bar-dismiss`, `.ease-announce-bar-content`, `.ease-announce-bar-close` (interactive CSS-dismissible top notification).
- **Navigation Bar**: `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-brand`, `.ease-navbar-menu`, `.ease-navbar-item` (glassmorphic sticky header).
- **Buttons**: `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-sm`.
- **Cards**: `.ease-card` (as the base layout for grid items).
- **Scroll-triggered Reveal**: `.ease-reveal` combined with `.ease-reveal-up`, `.ease-reveal-scale`, and delay modifiers `.ease-reveal-delay-1` through `.ease-reveal-delay-3`.

## Tech Stack

- HTML5 (Semantic elements)
- CSS3 (Vanilla CSS variables, grid, flexbox, and gradients)
- JavaScript (Via [reveal.js](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core/reveal.js) for viewport observation only)

## Preview

Open [demo.html](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/submissions/examples/museum-gallery-landing-page/demo.html) directly in your browser to view the page.

## Contribution Notes

- Page-specific styling rules are scoped to the `.mglp-` class prefix to prevent global namespace collisions.
- No direct edits were made to files within [core/](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/core) or [components/](file:///d:/GSSOC2/EaseMotion/EaseMotion-css/components) folders, satisfying contribution requirements.
