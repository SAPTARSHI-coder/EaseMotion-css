# Native CSS Nesting Utility Patterns

This submission introduces code patterns and utilities written entirely with **Native CSS Nesting**.

## Bug / Feature Description
For years, writing modular component CSS without conflicting globals required preprocessors like SCSS/SASS or CSS-in-JS solutions specifically for their "nesting" capabilities. Now, all modern browsers natively support the CSS Nesting Module. 

## Fix / Implementation Details
- Demonstrated how to build a fully encapsulated `.ease-nested-component`.
- Utilized the `&` selector to target pseudo-classes (`&:hover`).
- Utilized the `&` selector to target child elements based on parent state (`&:hover .ease-icon-wrapper`).
- Showcased deeply nested descendant targeting (`& strong`, `& a:hover`).
- Showcased placing `@media` queries natively inside the element block, maintaining locality of behavior.

## How to Test
1. Open `demo.html` in a modern browser (Chrome 112+, Safari 16.5+, Firefox 117+).
2. Hover over the cards. 
3. Notice that hovering the *parent card* triggers a series of coordinated child animations (the icon scales and rotates, the background changes, and the title color shifts). All of this is handled efficiently through native CSS nesting.
