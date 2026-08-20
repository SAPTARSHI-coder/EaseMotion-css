# Glitch-Flicker Drawer

A pure CSS cyberpunk-inspired glitch-flicker drawer for modern SaaS showcase layouts.

## Features

- **Pure CSS/HTML:** No JavaScript required for the drawer logic or animations.
- **Cyberpunk Aesthetic:** Utilizes glitch and flicker keyframe animations to create a futuristic look.
- **Responsive:** Adapts seamlessly to mobile and desktop screens.
- **Accessible:** Includes `aria` attributes and `prefers-reduced-motion` support.

## Usage

1. Include the `style.css` in your HTML file.
2. Ensure you have the hidden checkbox (`.drawer-toggle`), the trigger label (`.drawer-trigger`), the drawer aside (`.glitch-drawer`), and the overlay (`.drawer-overlay`) structured as shown in `demo.html`.
3. Add the `data-text` attribute to elements with the `.glitch-text` or `.glitch-link` class to enable the glitch effect on hover.

## CSS Custom Properties

You can customize the drawer by overriding the following CSS variables in the `:root` pseudo-class:

```css
:root {
  --primary-color: #0ff;          /* Primary accent color (Cyan) */
  --secondary-color: #f0f;        /* Secondary accent color (Magenta) */
  --bg-dark: #121212;             /* Main background color */
  --bg-drawer: rgba(18, 18, 18, 0.95); /* Drawer background */
  --text-color: #fff;             /* Primary text color */
  --drawer-width: 320px;          /* Maximum width of the drawer */
  --transition-speed: 0.4s;       /* Speed of the slide transition */
  --glitch-duration: 3s;          /* Base duration for glitch effects */
}
```
