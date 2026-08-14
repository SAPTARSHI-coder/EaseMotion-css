# CSS Morph-Glow Drawer

An ultra-modern, premium side-drawer component designed for high-end Fintech and Web3 layouts. It incorporates a continuously morphing, softly blurred glowing background (the "Morph-Glow" effect) behind a sleek, glassmorphic UI, all powered entirely by pure CSS.

## Features

- **Pure CSS Checkbox Toggle:** Utilizes the robust `<input type="checkbox">` and `<label>` pattern for state management without requiring any JavaScript.
- **Morphing Glow Background:** A background blob seamlessly morphs its shape by animating `border-radius` and rotating via `@keyframes`, heavily blurred to create an ambient, organic glow inside the drawer.
- **Glassmorphism Aesthetics:** The drawer utilizes translucent backgrounds paired with `backdrop-filter: blur()` allowing the morphing glow and the underlying dashboard to bleed through beautifully.
- **Body Scroll Locking:** Employs the CSS `:has()` selector to natively lock scrolling on the main page while the drawer overlay is active.
- **Accessibility Integration:** Respects `@media (prefers-reduced-motion: reduce)` by immediately halting the continuous morphing and spinning keyframes, as well as disabling the sliding entrance animations.

## File Structure

- `demo.html` - The showcase page featuring a mock corporate card management interface and the drawer component.
- `style.css` - The pure CSS stylesheet driving the animations, layout grids, and premium dark-mode theme.

## Usage

1. Integrate the `demo.html` structure. The hidden `<input type="checkbox" id="drawer-toggle">` should be kept at a high level in the DOM tree.
2. Link interactive triggers to the checkbox using `<label for="drawer-toggle">`.
3. Load the `style.css` styles into your project.
4. *Note:* Body scroll locking relies on the `:has()` selector. If your target browsers do not fully support this, a standard JS-based class toggle on the `<body>` may be implemented as a fallback.

## CSS Custom Properties

Configure the glow colors and transition logic seamlessly via CSS variables:

```css
:root {
    /* Theme & Glow Colors */
    --primary-accent: #6366f1; /* Indigo 500 */
    --glow-color-1: #818cf8; /* Indigo 400 */
    --glow-color-2: #c084fc; /* Purple 400 */
    --glow-color-3: #38bdf8; /* Sky 400 */
    
    /* Animation Tokens */
    --transition-speed: 0.5s;
    --transition-timing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

## Customization

- **Glow Intensity:** To make the ambient glow more vibrant, increase the `opacity` of the `.morph-blob` class, or lower the `backdrop-filter: blur(20px)` value on `.drawer-panel`.
- **Morph Speed:** Adjust the `8s` and `12s` durations in the `animation: morph 8s ease-in-out infinite, spin 12s linear infinite;` declaration to speed up or slow down the organic movement.
