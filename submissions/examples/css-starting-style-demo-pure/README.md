# CSS `@starting-style` Demo

A demonstration of the modern CSS `@starting-style` rule, which finally allows developers to animate elements transitioning directly from `display: none` to `display: block` without requiring Javascript timeouts or requestAnimationFrame hacks.

## Features
- Pure CSS and HTML implementation utilizing the native HTML `popover` API.
- **Component Architecture (Documented in Code)**: 
  - **Native Popover**: The demo uses the native HTML attribute `popover` and `popovertarget`. This allows the button to open the modal into the browser's top layer entirely without JavaScript.
  - **Discrete Transitions**: To animate a popover, it must transition from `display: none` to `display: block` (and `overlay: none` to `overlay: auto`). Historically, this caused CSS transitions to instantly jump. By adding `transition-behavior: allow-discrete` to the `display` and `overlay` properties, the browser is instructed to wait for the opacity/transform animations to finish before removing the element from the render tree.
  - **The `@starting-style` Rule**: When the modal first opens, it enters the DOM. The browser needs to know what CSS state to transition *from*. The new `@starting-style` block defines the exact styles (`opacity: 0`, `transform: scale(0.95)`) that the element should hold at the very instant it becomes `display: block`. It then smoothly transitions to its natural `:popover-open` state.
  - **Animated Backdrop**: The exact same `@starting-style` and discrete transition logic is applied to the native `::backdrop` pseudo-element to fade the dark overlay in and out synchronously with the modal.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the modal surface, text colors, and shadows.
- Fully accessible semantic structure. Because it relies on the native HTML `popover` specification, it automatically inherits Focus Management, Esc-key to dismiss, and light-dismiss (clicking the backdrop). Honors the `prefers-reduced-motion` accessibility standard by disabling the `@starting-style` transitions for motion-sensitive users.

## Usage
Open `demo.html` in your modern browser (Chrome 117+, Safari 17.5+). Click the "Open Modal" button to view the smooth entrance animation.

## Files
- `demo.html`: The HTML structure defining the native `popover` and trigger buttons.
- `style.css`: The styling, the `allow-discrete` transitions, and the `@starting-style` blocks.
