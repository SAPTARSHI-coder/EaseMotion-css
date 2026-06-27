# Scroll-Padding Anchor Navigation

1. **What does this do?** Demonstrates how `scroll-padding-top` combines with smooth anchor scrolling to prevent fixed headers from obscuring section content.

2. **How is it used?** Add `html { scroll-padding-top: 5rem; }` to your CSS and pair it with `html { scroll-behavior: smooth; }`. In the HTML, use `<a href="#section-id">` linking to `<section id="section-id">`.

3. **Why is it useful?** Fixed navigation headers commonly block the top of anchor-linked sections. Scroll-padding solves this cleanly without JavaScript, making one-page navigation accessible and visually polished.
