# contain: layout paint — Rendering Isolation

Shows how `contain: layout paint` creates a new formatting context and clips all descendant content — including fixed-position children, overflowing elements, and paint outside the bounds — without using the `overflow` property.

## Usage

Open `demo.html`. The first card has no containment; the fixed child escapes its parent. The remaining cards use `contain: layout paint`, demonstrating overflow clipping and paint isolation.

## Notes

- `contain: layout` creates a new stacking context and formatting context.
- `contain: paint` clips all descendant content to the element's border-box, including fixed-position descendants.
- No `overflow: hidden` is used — containment provides the clipping natively.
- Useful for widget isolation, modals, and preventing layout bleed in component-based architectures.
