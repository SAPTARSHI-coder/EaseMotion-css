# Parallax Offline Banner

Resolves #42421.

### What does this do?
Adds a Parallax Offline Banner component to EaseMotion CSS set within a Neumorphic environment. It uses a CSS-only toggle to slide down the banner. The banner features a continuous `parallaxScroll` animation on a repeating linear gradient background, giving a sense of depth, while the offline icon utilizes `ease-pulse` to grab attention.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. The `transform: translateY` handles the show/hide, while the `@keyframes parallaxScroll` drives the background motion.

### Why is it useful?
Provides an aesthetic, non-intrusive way to alert users of network drops, using parallax motion to keep the UI feeling "alive" even when the app is disconnected.
