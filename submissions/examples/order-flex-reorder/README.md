## order-flex-reorder

Demonstrates the CSS `order` property for flex item reordering, showing how visual presentation can differ from the underlying source order.

### Key Features

- Default source order vs. visual reordering using the `order` property
- Responsive reordering patterns where item order changes at different breakpoints
- Accessibility considerations including tabindex and screen reader behavior

### Accessibility Notes

The `order` property only affects visual rendering — keyboard tab order and screen reader navigation follow the DOM source order. When visual reordering changes meaning, use `tabindex` or restructure the DOM to ensure logical focus order.
