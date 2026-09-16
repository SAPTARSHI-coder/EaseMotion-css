# CSS Countdown Alert

A pure CSS notification toast that displays a progress bar and numeric countdown before automatically fading out and removing itself from the document flow.

## Features
- Pure CSS and HTML implementation without any JavaScript.
- **Component Architecture (Documented in Code)**: 
  - **The Numeric Countdown (`@property`)**: We use the modern CSS `@property` rule to define `--countdown-value` as an integer. This allows us to animate a CSS variable from `5` to `0` over 5 seconds. We then output the current value of this variable directly into the HTML using `counter-reset` and `content: counter()`.
  - **The Auto-Dismiss Logic**: The entire `.countdown-alert` container has a keyframe animation that maintains `opacity: 1` and `visibility: visible` for 90% of the duration. At the very end, it smoothly fades to `opacity: 0`, switches to `visibility: hidden`, and animates its margin/height to `0` to gracefully collapse out of the document flow.
  - **Pause on Hover**: The component is fully accessible, automatically pausing all animations (including the auto-dismiss timer) when hovered or focused using `animation-play-state: paused`.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the alert surface, text colors, and shadows.
- Fully accessible semantic structure. The container uses `role="alert"` and `aria-live="assertive"` to immediately notify screen readers when it appears. Honors the `prefers-reduced-motion` accessibility standard by disabling the auto-dismiss timer and animations for motion-sensitive users.

## Usage
Open `demo.html` in your modern browser (Chrome 85+, Safari 16.4+). Hover over the "Reset" zone to continuously re-trigger the CSS animations for demo purposes.

## Files
- `demo.html`: The HTML structure containing the alert, SVG icon, and progress bar elements.
- `style.css`: The styling, the `@property` variable definitions, and the keyframe animations.
