# CSS Morph-Glow Navbar (Minimalist Tech)

A pure CSS responsive navigation bar component designed for Minimalist Tech Layouts. It features a sticky layout with an active backdrop filter, and an interactive "Morph-Glow" hover effect on the navigation links.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.morph-glow` element utilizes a CSS `transform: scaleX() scaleY()` paired with a `filter: blur()` to create a pill-shaped glowing aura behind the hovered or active link. A bouncy `cubic-bezier` timing function gives the glow a satisfying, fluid morphing effect.
- The navbar utilizes `backdrop-filter: blur(12px)` to create a premium frosted-glass effect as the user scrolls down the page.
- Fully responsive layout. On screens below 850px, the desktop links and CTA buttons are hidden, and a pure CSS hamburger menu (powered by the checkbox hack) is revealed.
- The mobile menu features an animated hamburger-to-X icon transition and a smooth dropdown reveal.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (the positional morphing is replaced with a static opacity fade).

## Usage
Open `demo.html` in your browser. You will see a sticky navigation bar at the top. Hover over the navigation links to witness the blurred glow effect dynamically scale into place behind the text. Scroll down the page to observe the frosted-glass background. Resize the browser window to test the mobile hamburger menu.

## Files
- `demo.html`: The HTML structure for the navbar, utilizing the hidden checkbox hack for the mobile menu state.
- `style.css`: The styling, flexbox layouts, media queries, and CSS `transform` logic for the morph-glow effect.
