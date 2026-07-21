# Fix: Reveal.js Dynamic Elements Observer

Resolves a limitation in `reveal.js` where scroll reveal animations are ignored for elements dynamically inserted into the DOM (e.g. infinite scroll, SPA routing).

## What does this do?
- **MutationObserver Integration:** Integrates a MutationObserver that automatically registers and begins observing newly added `.ease-reveal` elements with the IntersectionObserver.