# Gooey Blob Navigation Menu

A navigation bar featuring a liquid, gooey blob that smoothly morphs and slides behind the hovered menu items.

## Preview
Open `demo.html` in your browser. The menu has a black background. When you hover over the links, a white 'blob' slides to that link. Due to a CSS filter, the blob looks like liquid, slightly snapping and stretching between items.

## Implementation
- **The Gooey Effect**: This famous CSS trick applies `filter: blur(10px) contrast(30)` to a parent container that has a black background.
- Inside, the moving `.blob` and the text are white. The blur softens the edges of the white elements, and the contrast immediately sharpens them back up. When two white elements (like a start state and an end state) are near each other under these filters, they visually "melt" into one another.
- The `.blob` indicator translates its X position when different siblings are hovered using the `~` combinator.
- `mix-blend-mode: difference` is used on the text so it remains readable while over the white blob or black background.
