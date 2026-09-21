# Neon Text Flicker Sign

A neon-sign inspired text animation that creates a subtle, irregular flickering effect using CSS keyframes.

## 1. What does this do?

The Neon Text Flicker Sign animation simulates the intermittent glow of a physical neon sign by briefly reducing the text opacity and slightly adjusting its scale at irregular intervals.

The animation is designed to remain lightweight by using compositor-friendly `opacity` and `transform` properties.

## 2. How is it used?

Apply the animation to an inline or block-level text element:

<span class="neon-text">OPEN</span>

The animation can be configured using CSS custom properties:

.neon-text {
  --neon-duration: 2.8s;
  --neon-timing: ease-in-out;

  animation:
    neon-text-flicker-sign
    var(--neon-duration)
    var(--neon-timing)
    infinite;
}

## 3. Why is it useful?

The effect is useful for signage, landing pages, promotional interfaces, gaming interfaces, creative portfolios, and other UI elements that need a retro neon aesthetic.

It provides visual personality while keeping the motion implementation lightweight and configurable.

## Accessibility

The animation respects the user's reduced-motion preference.

@media (prefers-reduced-motion: reduce) {
  .neon-text {
    animation: none;
  }
}

When reduced motion is enabled, the text remains visible without continuous animation.

## Features

- Neon-sign inspired flicker
- Configurable animation duration
- Configurable timing function
- Uses opacity and transform
- Infinite looping animation
- Responsive demo
- prefers-reduced-motion support
- No external dependencies

## Files

| File | Description |
|------|-------------|
| demo.html | Standalone demonstration |
| style.css | Animation and demo styling |
| README.md | Documentation and usage examples |

## License

This contribution is part of EaseMotion CSS and follows the repository's existing license and contribution guidelines.