# :focus-visible Ring

## Description
Compares `:focus-visible` (keyboard-only focus ring) with `:focus` (always-on focus ring). The first section uses a blue glow ring that appears only when tabbing with the keyboard; clicking the same elements with a mouse does not show the ring. The second section uses `:focus` with an amber ring that shows on every focus event.

## Usage
Open `demo.html` and use <kbd>Tab</kbd> to navigate through the buttons and inputs. Observe that the first group only shows a focus ring during keyboard navigation, while the second group shows a ring regardless of input method. Click elements to compare behavior.

## Browser Support
`:focus-visible` is supported in Chrome 86+, Firefox 85+, Safari 15.4+, Edge 86+, and Opera 72+. Older browsers ignore the rule gracefully, falling back to the default focus ring. The `:focus` pseudo-class works universally. Respects `prefers-reduced-motion`.
