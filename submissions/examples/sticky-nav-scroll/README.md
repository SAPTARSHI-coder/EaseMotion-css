# Sticky Nav Scroll

### What does this do?
Demonstrates a `position: sticky` sidebar navigation paired with `IntersectionObserver` for active-section highlighting. The sidebar sticks to the top of the viewport while scrolling through six content sections. As each section scrolls into view, the corresponding nav link receives an `.active` class. Clicking a link triggers smooth-scroll navigation.

### How is it used?
Open `demo.html` in any browser. The sidebar on the left (top on mobile) contains links to each section. Scrolling updates the active link automatically. To reuse, copy the HTML structure and CSS classes — the JavaScript uses `IntersectionObserver` with `rootMargin: '-30% 0px -60% 0px'` for a generous activation window.

### Why is it useful?
Sticky navs are a common UX pattern for long-form documentation, dashboards, and landing pages. This example combines minimal CSS (`position: sticky`) with a lightweight JS observer — no framework required. It shows how to handle active-state tracking, smooth scroll, mobile collapse, and accessibility considerations in a single, self-contained file.
