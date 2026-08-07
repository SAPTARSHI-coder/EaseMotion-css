# CSS Glitch-Flicker Tooltip

A cyberpunk-inspired, pure CSS tooltip component featuring a dynamic "glitch and flicker" entrance animation, perfect for creative portfolios and futuristic layouts.

## Features

- **Pure CSS/HTML:** No JavaScript required, entirely powered by CSS animations and transitions.
- **Glitch Effect:** Utilizes `clip-path`, `transform`, and `text-shadow` to simulate chromatic aberration and digital glitches.
- **Flicker Entrance:** Simulates a faulty neon light connection through custom `@keyframes` for opacity modulation.
- **Responsive:** Fluid sizing and layout considerations for varied screen dimensions.
- **Accessible:** Respects the `prefers-reduced-motion` media query by falling back to standard fade transitions for users with motion sensitivity.

## Usage

1. Link the `style.css` file in your HTML `<head>`.
2. Add the required font families (`Share Tech Mono` and `Inter`) for optimal display, or customize the font properties to fit your theme.
3. Wrap your trigger element inside a `<span class="tooltip-container">`.
4. Add the trigger text within `<span class="trigger">`.
5. Add the tooltip itself with `<span class="tooltip" data-text="Your Tooltip Text">Your Tooltip Text</span>`. **Note:** The `data-text` attribute must exactly match the tooltip's inner text to ensure the glitch effect displays correctly.

## CSS Custom Properties

The component is highly customizable using CSS variables defined in `:root`:

```css
:root {
    --bg-color: #0f0f13;           /* Background color of the container */
    --text-color: #e0e0e0;         /* Primary text color */
    --trigger-color: #00ffcc;      /* Highlight color for the trigger and tooltip border */
    --tooltip-bg: #1a1a24;         /* Background color for the tooltip body */
    --tooltip-border: #00ffcc;     /* Border color of the tooltip */
    --glitch-color-1: rgba(255, 0, 60, 0.8); /* First glitch shadow channel (red) */
    --glitch-color-2: rgba(0, 229, 255, 0.8); /* Second glitch shadow channel (cyan) */
    --tooltip-shadow: rgba(0, 255, 204, 0.3); /* Ambient glow effect for the tooltip */
}
```

## Browser Compatibility

This component leverages modern CSS features like `clip-path`. It is fully supported in all major modern browsers including Chrome, Edge, Firefox, and Safari. For compatibility, we've included both standard and `-webkit-clip-path` properties.
