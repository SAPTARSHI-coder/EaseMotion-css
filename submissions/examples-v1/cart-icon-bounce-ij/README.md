# Cart Icon Bounce

1. What does this do? A shopping cart icon that bounces vertically when an "Add to Cart" button is clicked. A badge pops in with a spring-like cubic-bezier scale animation showing the item count. Includes a static "in cart" variant.

2. How is it used? Click the "Add Item" button to trigger `.cart-bounce` keyframes on the cart body and badge pop-in. The badge transitions from `scale(0)` to `scale(1)` with `cubic-bezier(0.68, -0.55, 0.27, 1.55)` for a springy effect. A small JS snippet re-triggers the animation on each click.

3. Why is it useful? Cart interaction feedback is essential for e-commerce UX. The bounce + badge combo gives clear confirmation that an item was added, reducing double-click errors and improving perceived responsiveness.
