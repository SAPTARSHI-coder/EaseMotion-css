# Floating Back-to-Top Button with Scroll Progress

1. What does this do? Provides a floating "back to top" button with a ring border that visually fills up based on the user's scroll depth.
2. How is it used? Apply `.back-to-top-ps` to an anchor tag (`<a href="#top">`) and nest a `.back-to-top-ps-inner` element inside it to create the ring effect. Set `scroll-behavior: smooth` on `html` for smooth scrolling.
3. Why is it useful? It relies completely on modern CSS (`animation-timeline: scroll()`) to track scroll progress, eliminating the need for expensive scroll event listeners in JavaScript while providing excellent user feedback.
