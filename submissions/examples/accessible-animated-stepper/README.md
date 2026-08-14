# Accessible Animated Stepper (EaseMotion CSS submission)

Demo for: Accessible Animated Multi-Step Form Stepper with Keyboard Navigation.

Key points:
- Visual states and animations are pure CSS.
- Minimal vanilla JS only to:
  - synchronize content panels with the currently selected step,
  - provide Arrow key navigation and improved keyboard behavior,
  - update an aria-live region for screen readers.
- No external JavaScript frameworks; CSS is the animation engine.
- Responsive: horizontal on desktop, vertical on small screens.
- Supports prefers-reduced-motion.

Usage
1. Place `demo.html` and `style.css` in the same folder and open `demo.html` in a browser.
2. Or run a local server and visit http://localhost:8000/submissions/examples/accessible-animated-stepper/demo.html

Accessibility notes
- Step markers use radio inputs under the hood to provide native keyboard semantics (Tab + Arrow keys).
- Label + input pattern ensures screen reader announces current state and focus.
- aria-live region is updated for screen readers on step change.
- respects prefers-reduced-motion.

Converting to pure CSS-only (no JS)
- Remove the script and rely on radio :checked rules to show content/panels.
- With radio-only approach arrow keys still work if focus lands on input; however, extra ARIA announcements require JS to update live region.
