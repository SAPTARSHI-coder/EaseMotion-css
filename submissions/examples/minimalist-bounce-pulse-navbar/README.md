# CSS Bounce-Pulse Navbar (Minimalist Tech)

A pure CSS responsive navigation bar component designed for Minimalist Tech Layouts. It features a bouncy active-state indicator for navigation links, and a continuous attention-grabbing pulse ring on the primary call-to-action button.

## Features
- Pure CSS and HTML (No JavaScript required).
- The navigation links utilize a `.bounce-indicator` dot element. On hover (or when marked `.active`), it uses `transform: translateY()` paired with a custom `cubic-bezier(0.175, 0.885, 0.32, 1.5)` timing function to snap down into place with a subtle, playful bounce.
- The primary CTA button utilizes a `.pulse-wrapper` with an infinite `@keyframes` animation on its `::before` pseudo-element. This continuously scales and fades the background to create an outward rippling pulse effect.
- Clean, high-contrast aesthetic utilizing the `Inter` font.
- Fully responsive layout. On screens below 800px, the desktop links and CTA buttons are hidden, and a pure CSS hamburger menu (powered by the checkbox hack) is revealed.
- The mobile menu features an animated hamburger-to-X icon transition and a smooth slide-down dropdown menu utilizing `max-height`.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (the continuous pulse is hidden, and the bounce translates to a static fade).

## Usage
Open `demo.html` in your browser. You will see a top-level navigation bar. Hover over the navigation links to watch the emerald dot bounce into place below the text. Note the primary "Deploy Now" button continuously pulsing to draw user attention. Resize the browser window to test the mobile hamburger menu.

## Files
- `demo.html`: The HTML structure for the navbar, utilizing the hidden checkbox hack for the mobile menu state.
- `style.css`: The styling, flexbox layouts, media queries, and CSS logic for the bounce, pulse, and mobile dropdown animations.
