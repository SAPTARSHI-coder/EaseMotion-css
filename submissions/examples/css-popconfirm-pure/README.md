# CSS Popconfirm Component

A confirmation popover component for destructive actions built entirely with the native HTML `popover` API and modern CSS animations, requiring absolutely no JavaScript.

## Features
- Pure CSS and HTML implementation without any JavaScript logic or event listeners.
- **Component Architecture**: 
  - **The Native Popover API**: The component uses the native HTML `popover` attribute to completely remove the confirmation dialog from the document flow and place it in the browser's top layer.
  - **Declarative Triggers**: The "Delete Account" button opens the popover using `popovertarget="delete-confirm"`. The "Cancel" and "Yes" buttons inside the popover dismiss it natively using `popovertargetaction="hide"`.
  - **Discrete Transitions**: To animate a popover, it must transition from `display: none` to `display: block` (and `overlay: none` to `overlay: auto`). Historically, this caused CSS transitions to instantly jump. By adding `transition-behavior: allow-discrete` to the `display` and `overlay` properties, the browser waits for the opacity/transform animations to finish before removing the element from the render tree.
  - **The `@starting-style` Rule**: When the modal first opens, it enters the DOM instantly. The new `@starting-style` block defines the exact styles (`opacity: 0`, `transform: scale(0.95)`) that the element should hold at the very instant it becomes `display: block`. It then smoothly transitions to its natural `:popover-open` state.
  - **Animated Backdrop**: The exact same `@starting-style` and discrete transition logic is applied to the native `::backdrop` pseudo-element to fade the dark overlay in and out synchronously with the popconfirm dialog.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the popover surface, text colors, and shadows.
- Fully accessible semantic structure. Because it relies on the native HTML `popover` specification, it automatically inherits Focus Management, Esc-key to dismiss, and light-dismiss (clicking the backdrop). Honors the `prefers-reduced-motion` accessibility standard by disabling the `@starting-style` transitions for motion-sensitive users.

## Usage
Open `demo.html` in your modern browser (Chrome 117+, Safari 17.5+). Click the "Delete Account" button to trigger the confirmation popover. Click outside or use the inner buttons to dismiss it.

## Files
- `demo.html`: The HTML structure defining the trigger button, the native `popover` element, and the dismiss buttons.
- `style.css`: The styling, the discrete transitions, and the `@starting-style` entry animations.
