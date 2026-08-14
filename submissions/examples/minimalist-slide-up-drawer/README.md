# CSS Slide-Up Drawer (Minimalist Tech)

A pure CSS interactive drawer component designed for Minimalist Tech Layouts. It features a bottom-anchored modal sheet that elegantly slides up into view, complete with a blurred background overlay, all without requiring any JavaScript.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- State management is handled via the hidden checkbox hack (`input[type="checkbox"]` paired with `<label>`), allowing the drawer to be toggled open and closed natively.
- **The Slide-Up Effect**: The `.drawer-bottom` element is initially hidden by applying `transform: translate(-50%, 100%)`, pushing it exactly its own height down below the viewport edge. When triggered, the transform smoothly animates to `translate(-50%, 0)`, sliding it up into view while maintaining its horizontal center alignment.
- A fixed `max-width` constraint ensures the drawer behaves like a mobile "sheet" on small screens, but doesn't stretch awkwardly across ultra-wide desktop monitors.
- Includes a premium frosted-glass background overlay (`backdrop-filter: blur(4px)`) that fades in behind the drawer.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, and a polished form layout.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial slide-up translation is entirely stripped. The complex interaction gracefully falls back to a safe, simple opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock settings dashboard. Click the "Update Billing" button to trigger the pure CSS drawer. The background will blur, and the payment form sheet will slide up from the bottom of the screen. Click the overlay background, the "X" button, or the "Save Payment Method" button to close the drawer.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical `<input type="checkbox">` and `<label>` pairing required for the CSS-only drawer trigger.
- `style.css`: The styling, form layouts, drawer positioning, and the `translateY` CSS transitions driving the slide-up mechanics.
