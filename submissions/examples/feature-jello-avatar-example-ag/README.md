# Jello Avatar Exit Example (Standard)

## Description
This is a standard HTML, CSS, and JS implementation demonstrating a "Jello Exit" animation. When an avatar is clicked (e.g., dismissing or removing a user from a list), it performs a playful jello wobble before scaling down and fading out completely.

## Installation & Usage
1. Open `demo.html` in your browser.
2. Click on any of the avatar images to trigger the removal animation.
3. The JavaScript listens for the click, adds the `.ease-jello-exit-ag` class, and then listens for the `animationend` event to safely remove the element from the DOM.
4. Click "Reset Avatars" to restore the list and try again.

## How It Works
- **The Keyframes:** The `easeJelloExitAg` animation combines two concepts. The first ~60% of the animation is the standard "Jello" effect, which alternates decreasing `skewX` and `skewY` values to create a wobble.
- **The Exit:** The final 40% of the animation transitions from the wobble into a slight scale-up (`scale(1.1)`) followed by a rapid scale-down to `scale(0)` and `opacity: 0`. This creates a satisfying "pop" out of existence.
- **DOM Removal:** The CSS class uses `animation: ... both` to hold the element at 0 opacity and 0 scale when the animation finishes. The JavaScript then catches the `animationend` event to completely remove the element (`.remove()`) from the document flow, allowing adjacent elements to reflow smoothly.

## Accessibility Considerations
- **Semantic HTML & ARIA:** The avatars are wrapped in `<button>` elements because they represent clickable actions. They include `aria-label` attributes to communicate to screen readers exactly what clicking the button will do (e.g., "Remove Alice").
- **Keyboard Navigation:** The `button` elements naturally receive focus. A custom focus ring is applied so keyboard users can clearly see which avatar they are targeting.
- **Reduced Motion:** The `prefers-reduced-motion: reduce` media query in `style.css` disables the jello wobble and the scale-down effect. It falls back to a near-instant opacity transition (`0.01s`). This is a technical requirement: we cannot use `animation: none` completely, because the JavaScript logic depends on the `animationend` (or in this fallback case, `transitionend`) event to remove the element from the DOM. A 0.01s transition respects the user's desire for no motion while ensuring the functionality remains intact.
