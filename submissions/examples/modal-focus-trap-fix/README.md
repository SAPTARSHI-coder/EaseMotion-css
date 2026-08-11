# Modal Focus Trap & Animation Synchronization

A critical accessibility pattern demonstrating how to properly synchronize CSS entry/exit animations on a modal dialog while correctly implementing a JavaScript-based Focus Trap.

## Features
- **The Bug Context**: Many CSS-only modal implementations fail Web Content Accessibility Guidelines (WCAG) because they do not trap keyboard focus. When a user presses `Tab`, focus escapes the modal and wanders through the hidden background page. Conversely, many JS modal libraries break CSS animations by immediately setting `display: none` before the exit animation finishes.
- **The Fix**: This example provides the perfect synthesis:
  - **CSS**: Uses `visibility: hidden` combined with `opacity` and `transform` transitions. This allows the modal to animate smoothly while removing it from the accessibility tree when closed, without abruptly destroying the DOM node.
  - **JavaScript**: Implements a standard focus trap that loops `Tab` and `Shift+Tab` through focusable elements within the `.modal-dialog`. It remembers the `previousFocus` element to restore focus when the modal closes.
  - **Synchronization**: The JS applies a CSS `.is-open` class to trigger the transitions, and uses a slight `setTimeout` before focusing the modal to ensure the CSS `visibility` has updated, preventing focus loss errors.
- **Accessible**: Includes `aria-hidden`, `aria-modal="true"`, `role="dialog"`, and `prefers-reduced-motion` fallbacks.

## Usage
Open `demo.html` in your browser.
1. Click the "Open Modal" button.
2. Press the `Tab` key repeatedly. Notice that focus cycles entirely inside the modal (Cancel -> Save Changes -> Username Input).
3. Press `Escape` or click outside the modal to close it. Notice how focus is seamlessly restored to the "Open Modal" button after the smooth CSS exit animation completes.

## Files
- `demo.html`: The HTML structure containing the modal markup and the lightweight vanilla JS focus trap logic.
- `style.css`: The styling engine handling the `visibility`/`opacity`/`transform` orchestration.
