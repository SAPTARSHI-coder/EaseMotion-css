# CSS Frosted Neon Card

A reusable glassmorphism card with a frosted surface, neon accent border, soft glow effects, and CSS-only hover interactions.

## Features

- Pure HTML and CSS
- No JavaScript
- Frosted glass effect using `backdrop-filter`
- Neon accent border
- Layered glow effects
- Animated icon
- Interactive CTA
- Responsive layout
- Keyboard-accessible focus state
- `prefers-reduced-motion` support
- CSS custom properties for easy theming

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the card structure:

```html
<article class="neon-card">
  <div class="neon-card__content">
    <span class="neon-card__badge">
      CSS COMPONENT
    </span>

    <h2 class="neon-card__title">
      Frosted Neon
    </h2>

    <p class="neon-card__description">
      A glassmorphism card with a neon accent and glow.
    </p>

    <a class="neon-card__button" href="#">
      <span>Explore Component</span>
      <span aria-hidden="true">→</span>
    </a>
  </div>
</article>
```

## Customization

The main colors can be customized through CSS variables:

```css
:root {
  --page-bg: #070b18;
  --card-bg: rgba(17, 25, 48, 0.58);
  --neon-cyan: #4ef2ff;
  --neon-purple: #9b6cff;
  --neon-pink: #ff4fd8;
}
```

The card radius, transitions, borders, shadows, and other visual properties can also be adjusted in `style.css`.

## Accessibility

The component provides:

- Semantic heading structure
- Descriptive content
- Keyboard-visible focus state
- Decorative elements marked with `aria-hidden`
- Reduced-motion support for users who prefer less animation
- Sufficient contrast between primary content and the background

## Browser Support

The frosted effect uses `backdrop-filter` with the `-webkit-backdrop-filter` fallback for WebKit-based browsers.

If backdrop blur is unavailable, the translucent card background remains visible and usable.

## Why it fits EaseMotion CSS

This component demonstrates reusable CSS visual techniques including glassmorphism, neon borders, glow effects, transitions, hover interactions, and subtle motion.

It is dependency-free and requires no JavaScript.