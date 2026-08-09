CSS Zoom-In Navbar
A lightweight, pure CSS navigation bar designed for creative portfolios. It features a glassmorphic pill design and a smooth, sibling-based hover interaction where the focused item zooms in while the surrounding items gently recede and dim.

Core CSS Features
Sibling Selection Magic: Uses :hover on the parent container to dim all children, then overrides it on the specific child being hovered.
Glassmorphism: Utilizes backdrop-filter: blur() for a premium frosted glass effect over the page content.
Pure CSS Transitions: Smooth scaling and fading driven by cubic-bezier timing functions without relying on JavaScript.
Accessibility: Respects the prefers-reduced-motion media query to disable scaling animations for users with vestibular sensitivities.

Integration
To integrate this component, include the style.css definitions into your project. Adjust the custom properties (:root) to match your brand's color palette and blur intensity.
