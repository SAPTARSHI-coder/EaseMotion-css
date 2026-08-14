# CSS Feature Announcement Banner

A pure CSS dismissible alert banner utilizing the hidden checkbox hack, featuring entrance animations and a gradient background, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for the dismiss state).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with darker gradient variants.
- **Component Architecture (Documented in Code)**: 
  - **The Checkbox Dismiss Hack**: The dismissal logic is driven by a hidden `<input type="checkbox">`. The 'X' button is actually a `<label>` element linked to the checkbox via the `for` attribute. Clicking it checks the box.
  - **Collapse Animation**: When the checkbox is checked (`.dismiss-checkbox:checked`), a CSS sibling selector (`+`) targets the adjacent banner and collapses it. We transition `max-height`, `opacity`, `padding`, and `margin` to zero to create a smooth slide-and-fade collapse effect.
  - **Entrance Animation**: The banner uses a CSS `@keyframes` animation (`bannerEnter`) on page load to smoothly drop in from the top while fading in, grabbing the user's attention.
- Fully accessible semantic structure. Wraps the banner in `role="alert"` and `aria-live="polite"` for screen readers. The 'X' button is reachable via keyboard (`tabindex="0"`) and has an explicit `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by disabling the drop-in animation and collapse slide, falling back to a simple opacity fade.

## Usage
Open `demo.html` in your browser. Watch the banner animate in. Click the 'X' icon (or the demo toggle button) to dismiss it seamlessly without JS.

## Files
- `demo.html`: The HTML structure containing the hidden checkbox, the label masquerading as a dismiss button, and the banner content.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:checked` state collapse transitions.
