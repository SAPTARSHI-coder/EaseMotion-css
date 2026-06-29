# Glassmorphism Card Component with Animated Borders

This submission adds an ultra-modern UI component: the Frosted Glass card featuring a rotating, glowing border.

## Bug / Feature Description
Glassmorphism combined with animated gradient borders is a staple of premium, dark-mode landing pages (often seen in Web3, AI, and developer tools). It requires a delicate balance of `backdrop-filter`, `conic-gradient`, and pseudo-element z-indexing to achieve without hiding the glass effect.

## Fix / Implementation Details
- **`.ease-glass-card-wrapper`**: Serves as the overflow container. It uses a `::before` pseudo-element with a `conic-gradient` that is animated infinitely using `transform: rotate()`.
- **`.ease-glass-card`**: Placed inside the wrapper, providing the `backdrop-filter: blur()` effect and inner padding. The gap between the wrapper and the card creates the illusion of a glowing border.
- **Modifiers**: Added `.ease-border-glow-blue` and `.ease-border-glow-purple` to customize the gradient colors.

## How to Test
1. Open `demo.html` in your browser.
2. Observe the colorful, blurred orbs floating in the background, proving the `backdrop-filter` is working correctly on the cards.
3. Observe the smooth, rotating glowing border tracing the edges of the cards.
