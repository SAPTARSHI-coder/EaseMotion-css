# CSS 3D-Flip Popover (Cyberpunk Layout)

An advanced, pure CSS popover component built for Cyberpunk and futuristic Sci-Fi interfaces. It features a dramatic 3D rotational flip entrance, deploying from the trigger button like a holographic HUD panel.

## 🚀 Features

- **Zero JavaScript:** Utilizes the CSS hidden-checkbox hack (`input type="checkbox"`) linked to a stylized label, granting robust state management strictly through CSS.
- **3D Transform Engine:** Applies `perspective: 1200px` to the popover wrapper. The panel itself utilizes `transform-origin: bottom center` and transitions from `rotateX(-90deg)` to `rotateX(0deg)`, generating a realistic 3D unfold effect.
- **Spring Physics:** The flipping transition is governed by a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve, causing the popover to slightly overshoot and snap into place organically.
- **Cyberpunk Aesthetics:** Employs `clip-path: polygon()` to forge signature cut corners. Integrates a neon color palette (`cyan`, `pink`, `yellow`), simulated CRT text-shadows, and an animated data-transfer progress bar that fills when the popover opens.
- **Accessible & Responsive:** Includes `tabindex="0"` on the trigger label for complete keyboard navigability. A stringent `@media (prefers-reduced-motion: reduce)` block completely disables the 3D rotational flip and all pulsing keyframes for users with vestibular sensitivities, falling back to a clean opacity fade.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Click the "DECRYPT NODE" button to activate the 3D-Flip deployment.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --cp-cyan: #00f3ff;       /* Primary highlight */
    --cp-pink: #ff003c;       /* Secondary accent/borders */
    --cp-yellow: #fcee0a;     /* Text glitch highlights */
    --cp-speed: 0.6s;         /* Speed of the 3D flip */
}
