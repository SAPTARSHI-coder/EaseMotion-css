# CSS Toast: Glassmorphism Blur

A collection of hardware-accelerated, JavaScript-free toast notifications featuring frosted glass aesthetics and pure CSS entry/exit mechanics.

## Features
- Pure CSS and HTML implementation. No JavaScript timers for auto-hiding or event listeners for closing.
- **Component Architecture**: 
  - **Auto-hide Notification**: A toast that enters the screen, pauses, and exits automatically. This is achieved using a multi-step `@keyframes` animation (`toast-slide`) that maps percentage points to `transform: translateY()` and `opacity`. (e.g. `10%` to `80%` keeps the toast visible, while `0%` and `100%` push it off-screen).
  - **Dismissible Toast**: A toast that the user can close. Because we cannot use JavaScript `onClick` handlers, it relies on the CSS checkbox hack (`:checked ~`). The entire toast acts as a `<label>` for a hidden `<input type="checkbox">`. When clicked, the checkbox state changes, triggering a CSS selector that sets the toast's `opacity` to 0 and scales it down, effectively removing it from view.
  - **Stacked View**: Demonstrates how `backdrop-filter: blur(16px)` interacts when multiple glass elements overlap. It uses absolute positioning and `z-index` to layer the toasts, applying a slight scale reduction to the background toast for depth.
- **Theming**: Configured via CSS Custom Properties. The glass effect relies on `background: rgba(...)` combined with physical edge highlights (`border-top: rgba(...)`) to mimic the bevel of actual cut glass.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the auto-hiding keyframes, the floating background blobs, and the dismissal transitions for users who prefer less motion, ensuring the notifications remain statically visible.

## Usage
Open `demo.html` in your browser to view the gallery of glass toasts. Observe the Auto-hide Notification loop, click the Warning Toast to dismiss it via the checkbox hack, and hover over the Stacked View to see the layering mechanics expand.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for the background blobs and the 3 toast variations.
- `style.css`: The styling, the `backdrop-filter` mechanics, the checkbox hack for dismissal, and the keyframe animation for auto-hiding.
