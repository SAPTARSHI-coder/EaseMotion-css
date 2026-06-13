# Radial Staggered Micro-Menu

A spring-animated circular micro-menu triggered by a central button. Items fan out with staggered delays for a polished, fluid reveal.

**Type:** UI Component (submission)

**Inspiration:** Floating action menus, radial context menus.

## Features

- **Staggered expansion** — each menu item appears with a cascading delay.
- **Spring easing** — `cubic-bezier(0.175, 0.885, 0.32, 1.275)` gives a bouncy-yet-tight feel.
- **Click-outside to close** — clicking anywhere outside the menu dismisses it.
- **Accessible** — `focus-visible` outlines, `aria-label` on trigger.
- **Reduced motion** — respects `prefers-reduced-motion`.

## Usage

Open `demo.html` in any modern browser. Click the central purple button to toggle the menu.

No build step required — styles link to the EaseMotion CDN.
