# Bottom Sheet / Slide-up Drawer Component

## What does this submission do?

Adds a **Bottom Sheet** component — a modal panel that slides up from the bottom of the screen, commonly used for share sheets, action menus, filters, and contextual menus on mobile and desktop interfaces.

## How was it implemented?

- **CSS** (`style.css`): The `.sheet` component is a fixed-position overlay (`inset: 0`) with flexbox alignment to push the panel to the bottom. The `.sheet-backdrop` provides a semi-transparent overlay that fades in. The `.sheet-panel` slides up using `transform: translateY(100%) → translateY(0)` with a cubic-bezier easing. CSS custom properties (`--sheet-max-height`, `--sheet-radius`, `--sheet-handle-w`, `--sheet-handle-h`, `--sheet-duration`, `--sheet-bg`, `--sheet-backdrop`) allow full theming. Snap levels are controlled by `.snap-25`, `.snap-50`, `.snap-75` classes that limit `max-height`. The `.sheet-handle` is a grab cursor area with a pill-shaped indicator. `.sheet-header` contains the title and close button. `.sheet-content` scrolls independently with `-webkit-overflow-scrolling: touch` for smooth mobile scrolling.
- **HTML/JS** (`demo.html`): Four bottom sheet instances demonstrate different use cases. The `BottomSheet` JavaScript class handles: open/close with class toggling, body scroll locking, drag-to-dismiss via both touch and mouse events on the handle (with a 100px threshold), Escape key to close, backdrop click to close, and focus on the close button when opened. Four trigger buttons open: Share Sheet (social sharing options), Filters (search refinement), Action Menu (item actions), and an Expanded Settings sheet at 75% snap height.

## Why these choices?

- **Slide-up with cubic-bezier** matches the Material Design bottom sheet spec and feels natural.
- **Drag-to-dismiss** via the handle provides the expected mobile interaction pattern (both touch and mouse).
- **Snap points** (25%, 50%, 75%) give content-aware height control — the 75% snap is used for the expanded settings sheet with more content.
- **CSS custom properties** allow consumers to customize radius, max height, colors, and animation duration without overriding selectors.
- **Backdrop click + Escape key** ensure multiple dismissal methods for accessibility.
- **Focus trap** on the close button when opened helps keyboard users.
- **Body scroll lock** prevents background scrolling while the sheet is open.
- **Transition on transform only** (not `all`) ensures smooth 60fps animation by avoiding layout triggers.

## Files

| File        | Purpose                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| `demo.html` | Interactive bottom sheet with 4 demos: share, filters, actions, expanded settings |
| `style.css` | Sheet styles: backdrop, panel, handle, header, content, snap levels, animations   |
| `README.md` | This documentation                                                                |
