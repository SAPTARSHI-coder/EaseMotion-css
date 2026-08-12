# :target Active Section

## Description
Explores the `:target` pseudo-class to highlight sections when they are navigated to via fragment links (e.g., `#features`). Each of the four sections has a unique accent color — blue, purple, amber, and emerald — applied to its border, background, and glow when targeted. A fade-in animation plays on target activation.

## Usage
Open `demo.html` and click the jump links in the navigation bar. Each link scrolls to the corresponding section, which lights up with its highlight color. Click the same link again or use the browser's back button to return. The animation runs only on the first `:target` match.

## Browser Support
`:target` is supported in all modern browsers (Chrome 1+, Firefox 1+, Safari 1.3+, Edge 12+, Opera 9.5+). The `@keyframes` animation is supported everywhere. The `prefers-reduced-motion` media query disables the fade-in animation for users who request reduced motion.
