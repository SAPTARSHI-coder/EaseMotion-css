# Filter Chip Add

1. What does this do? When a filter is applied, a chip representing it scales and fades into the filter bar with a gentle bounce, and can be removed with a reverse animation.

2. How is it used? Create a `.chip` element with `scale(0)` / `opacity(0)` and toggle the `.visible` class to trigger the entrance animation. The remove button triggers `.removing` for exit.

3. Why is it useful? It provides a polished filter UI interaction pattern — chips enter with a satisfying spring-like bounce and exit cleanly, improving the feel of dynamic filter bars.
