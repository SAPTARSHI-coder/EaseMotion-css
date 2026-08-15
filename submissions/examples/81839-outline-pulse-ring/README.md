# Outline Pulse Ring

This submission adds a new keyframe and utility class for an outline pulse ring animation.

- **What does this do?** It adds a hardware-accelerated, infinite expanding outline ring animation to an element's `::before` pseudo-element.
- **How is it used?** Apply the `ease-anim-outline-pulse-ring` class to a wrapper element. The ring will inherit the border-radius and color from the wrapper.
- **Why is it useful?** It draws attention to interactive or active elements using smooth 60fps GPU-accelerated properties (`transform` and `opacity`), which is much more performant than animating `box-shadow` directly.
