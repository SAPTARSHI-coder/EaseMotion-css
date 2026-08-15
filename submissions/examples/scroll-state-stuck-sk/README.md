# CSS scroll-state(stuck) Example

1. **What does this do?** This example demonstrates how to use the modern CSS State Queries API (`@container scroll-state(stuck)`) to detect and style `position: sticky` elements automatically when they stick to the scroll port, completely removing the need for JavaScript Intersection Observers.
2. **How is it used?** 
   - Define a container with `position: sticky` and `container-type: scroll-state`.
   - Use the `@container scroll-state(stuck: top)` query to apply conditional styling to child elements when the container sticks.
3. **Why is it useful?** Traditionally, styling a sticky header (like giving it a drop shadow or changing its background color *only* when it attaches to the top) required clunky JavaScript scroll listeners or Intersection Observer hacks. The new CSS State Queries API brings this logic into CSS natively, maximizing performance and keeping code clean.

### Key Features
- **Native CSS Detection:** Detects `stuck` state entirely in CSS.
- **Performant:** No JS scroll listeners eating up the main thread.
- **Graceful Fallback:** Includes a lightweight `IntersectionObserver` fallback for older browsers that haven't implemented the spec yet.
