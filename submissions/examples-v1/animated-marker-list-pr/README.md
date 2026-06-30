# Animated ::marker Staggered Pulse List

### What does this do?

Demonstrates native animation parameters targeted directly onto the list container `::marker` element layer to build pulse points, state check-swaps, and track progress lines.

### How is it used?

Incorporate modifier hooks (`.stagger-list`, `.checklist`, or `.progress-list`) onto standard list blocks. Manage delays using standard integer style flags (`--i`).

### Pitfalls & Spec Constraints

Per the CSS standard specification, properties such as `transform` and `opacity` are ignored inside `::marker` contexts. To produce high-fidelity interactions, utilize `color`, `font-size`, `text-shadow`, and `content` transitions.
