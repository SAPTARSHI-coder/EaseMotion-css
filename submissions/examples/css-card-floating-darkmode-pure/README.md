# Floating Card (Dark Mode)

A premium, highly interactive pure CSS card component designed specifically for dark mode interfaces. It features continuous floating physics, 3D hover states, and ambient glow effects.

## Features
- **Continuous Floating Physics**: The card naturally hovers up and down using an infinite CSS `@keyframes` animation, establishing a dynamic, breathing environment.
- **3D Hover Interaction**: When hovered, the floating animation is paused (`animation-play-state: paused`), and the card elevates and tilts slightly (`rotateX`, `rotateY`) using a `cubic-bezier` spring transition, giving it a tangible, physical presence.
- **Ambient Glow Engine**: Features a hidden `.card-glow` div (a heavily blurred color orb using `filter: blur(60px)`) that fades in gracefully on hover, casting a subtle neon reflection across the card's dark background.
- **Micro-interactions**: The internal elements respond to the card hover state:
  - The primary icon box scales up and absorbs the accent color.
  - The call-to-action arrow button scales up, translates to the right, and glows.
- **Premium Dark Aesthetics**: Built with deep contrast (`#111111` background, `#222222` borders), utilizing `inset` box shadows for a crisp inner top-edge highlight.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Inter` font family is loaded via your `<head>`. This card is highly versatile and can be used for pricing tiers, feature highlights, or dashboard widgets.
