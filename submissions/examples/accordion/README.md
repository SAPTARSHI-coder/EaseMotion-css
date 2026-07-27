# Animated Accordion Component

**What does this do?**
Provides a modern, fully-animated Accordion UI component. It leverages the modern CSS Grid animation hack (`grid-template-rows: 0fr` to `1fr`) to smoothly animate height transitions from `0` to `auto` without needing JavaScript pixel calculations or `max-height` workarounds.

**How is it used?**
Use the provided HTML structure. You only need a tiny JavaScript snippet to toggle the `.is-active` class on the `.accordion-item-ag` wrapper when the header is clicked. The CSS handles the rest of the physics.

**Why is it useful?**
Historically, animating an element to `height: auto` in CSS was impossible without hacky workarounds (like animating `max-height: 1000px`). The modern `grid-template-rows` technique solves this entirely in pure CSS, resulting in extremely smooth, performant height animations that perfectly wrap their content.