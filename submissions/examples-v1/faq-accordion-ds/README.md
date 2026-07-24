# FAQ Accordion

## Feature overview
A responsive, accessible FAQ accordion with smooth expand/collapse animation and single-open behavior.

## Preview description
The demo shows a centered accordion section with five FAQ items. Clicking a question expands the answer smoothly while collapsing any previously opened item, and the icon rotates to indicate state.

## Folder structure
- `demo.html` — semantic FAQ markup with inline accordion logic.
- `style.css` — accordion layout, card styling, responsive design, and animations.
- `README.md` — overview, implementation details, and customization options.

## How the accordion animation works
- Each accordion button uses `aria-expanded` and `aria-controls` to manage state.
- When a question is clicked, JavaScript toggles the open item and collapses any other open item.
- The answer panel uses `max-height`, `opacity`, and padding transitions so expansion feels smooth.
- The icon rotates 180° using a CSS transform when the item is open.

## Accessibility features
- Keyboard support for `Enter` and `Space` on each accordion trigger.
- Focus-visible styling for improved keyboard navigation.
- `aria-expanded`, `aria-controls`, and `role` semantics ensure screen reader compatibility.
- Each answer panel is associated with its trigger button using `aria-labelledby`.

## Customization options
- Colors: update `--panel-bg`, `--card-bg`, `--accent`, and text colors.
- Animation duration: change `--transition` for faster or slower expansion.
- Multiple-open support: remove collapse logic in `toggleItem()` to allow more than one item open.
- Border radius: adjust `--radius` for softer or sharper cards.
- Card spacing: modify `--gap` to increase or decrease accordion gap.

## Browser compatibility
This accordion uses standard modern web APIs and CSS features, including transitions, custom properties, and `aria-*` attributes. It works well in current versions of Chrome, Firefox, Edge, and Safari. The core behavior remains accessible even in older browsers, though animation easing may differ.
