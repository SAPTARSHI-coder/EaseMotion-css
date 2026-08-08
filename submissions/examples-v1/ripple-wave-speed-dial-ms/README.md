# Ripple Wave Speed Dial

Resolves #42394.

### What does this do?
Adds a Ripple Wave Speed Dial component to EaseMotion CSS tailored for News Portals and rich content sites. The component uses a primary Floating Action Button (FAB). When clicked, it toggles a hidden checkbox that:
1. Emits a one-off ripple wave animation (`speed-dial-ripple`).
2. Rotates the main icon 135 degrees into an "X" (close) button.
3. Animates the sub-action buttons upwards in a staggered sequence using CSS transitions.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. It anchors to the bottom right of the viewport by default (`position: fixed`). 

### Why is it useful?
Speed Dials conserve screen space while offering multiple contextual actions (e.g. share, save, print). The ripple wave provides immediate, satisfying feedback upon opening the menu without relying on any JavaScript for state management.
