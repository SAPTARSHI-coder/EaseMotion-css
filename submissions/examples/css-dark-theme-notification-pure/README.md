# CSS Dark Theme Notification

A pure CSS toast notification featuring a glassmorphism dark theme, an entrance animation, and a JavaScript-free dismissal mechanism utilizing the hidden checkbox hack.

## Features
- Pure CSS and HTML (Zero JavaScript required for the dismiss state).
- **Theming**: While the component forces a dark, glassmorphism aesthetic (`backdrop-filter: blur()`) to achieve its specific look, it utilizes CSS Custom Properties and a `prefers-color-scheme: dark` media query to slightly intensify its drop shadows when the surrounding OS theme is dark, ensuring it stands out against dark app backgrounds.
- **Component Architecture (Documented in Code)**: 
  - **The Checkbox Dismiss Hack**: The dismissal logic is driven by a hidden `<input type="checkbox">`. The 'X' button is actually a `<label>` element linked to the checkbox via the `for` attribute. Clicking it checks the box.
  - **Collapse Animation**: When the checkbox is checked (`.toast-checkbox:checked`), a CSS sibling selector (`+`) targets the adjacent `.toast-notification` and collapses it. We transition `max-height`, `opacity`, `padding`, and `margin` to zero to create a smooth slide-and-fade collapse effect.
  - **Entrance Animation**: The toast uses a CSS `@keyframes` animation (`toastEnter`) on page load to smoothly slide up from the bottom while fading in, grabbing the user's attention.
- Fully accessible semantic structure. Wraps the notification in `role="alert"` and `aria-live="assertive"` for screen readers. The 'X' button is reachable via keyboard (`tabindex="0"`) and has an explicit `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by disabling the slide-up animation and collapse slide, falling back to a simple opacity fade.

## Usage
Open `demo.html` in your browser. Watch the toast animate in. Click the 'X' icon to dismiss it seamlessly without JS.

## Files
- `demo.html`: The HTML structure containing the hidden checkbox, the label masquerading as a dismiss button, and the toast content.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:checked` state collapse transitions.
