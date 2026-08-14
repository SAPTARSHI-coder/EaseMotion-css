# CSS Card: Metallic Sheen

A polished **Metallic Sheen CSS Card** component built entirely with HTML and Vanilla CSS.

The component uses layered gradients, reflective highlights, animated sheen, depth, and smooth transitions to create a premium metallic card surface.

## ✨ Features

- Metallic gradient surface
- Animated reflective sheen
- Smooth hover interaction
- Keyboard focus support
- Subtle elevation effect
- Responsive card layout
- Dark-mode compatible
- Light-mode compatible
- Reduced-motion support
- No JavaScript
- No external dependencies

## 🎨 Metallic Effect

The metallic appearance is created using multiple gradient stops that alternate between light and dark tones.

A separate sheen layer travels across the card on interaction to simulate reflected light.

Example:

```css
.metal-card {
  background:
    linear-gradient(
      135deg,
      #20262c 0%,
      #929aa1 9%,
      #3b4249 20%,
      #151a1f 35%,
      #606970 49%,
      #171c21 64%,
      #9ea6ad 81%,
      #242a30 100%
    );
}