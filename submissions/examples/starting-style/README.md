# Entry and Exit Utilities using CSS `@starting-style`

This submission provides CSS classes to handle smooth entry and exit animations for elements that transition between `display: none` and `display: block`, such as dialogs, popovers, and dropdowns.

## Features

- **No JavaScript Timers**: Historically, animating an element out before hiding it required complex JavaScript `setTimeout` logic. With the new CSS `allow-discrete` transition and `@starting-style`, it's done entirely natively.
- **Native HTML `<dialog>` Support**: The classes perfectly integrate with the native `<dialog>` element and the Popover API.
- **Backdrop Animations**: Includes smooth blur and fade-in animations for the dialog `::backdrop`.
- **Accessibility**: Utilizes the `prefers-reduced-motion` media query to immediately display/hide the elements for users who prefer reduced motion.

## Usage

1. Include `style.css` in your project.
2. Apply the `.em-popover` class to any `<dialog>` or `popover` element.
3. The element will now smoothly scale and fade in when opened, and smoothly scale and fade out when closed, without any additional scripts.
