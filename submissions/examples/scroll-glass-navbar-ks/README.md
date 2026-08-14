# Scroll-Driven Glass Navbar

## What does this do?

A sticky navbar where `backdrop-filter: blur()`, background opacity, and border visibility all transition fluidly based on scroll position. Uses `@property`-registered custom properties driven by `animation-timeline: scroll(root)` — the glass effect intensifies continuously as you scroll, not in a binary on/off step.

## How is it used?

```html
<!-- Sticky navbar with scroll-driven glass effect -->
<nav class="site-nav">...</nav>
```

The scroll-driven animation is attached once:

```css
@property --nav-blur {
  syntax: '<length>';
  inherits: true;
  initial-value: 0px;
}

.site-nav {
  position: sticky;
  top: 0;
  backdrop-filter: blur(var(--nav-blur));
  background: rgba(9, 9, 11, var(--nav-bg-opacity));
  animation: glassify 1s linear both;
  animation-timeline: scroll(root);
  animation-range: 0px 300px;
}

@keyframes glassify {
  0%   { --nav-blur: 0px; --nav-bg-opacity: 0; }
  100% { --nav-blur: 20px; --nav-bg-opacity: 0.8; }
}
```

## Why is it useful?

This is the first EaseMotion submission to combine `@property` + `animation-timeline: scroll()` specifically for a **sticky glass navbar**. While glassmorphism navbars exist (primarily as static styles or JS-toggled classes), nobody has used scroll-driven animations to create **progressive, continuous** backdrop-filter blur that intensifies with scroll distance.

Traditional approaches toggle a CSS class after crossing a scroll threshold — creating jarring binary transitions. This scroll-driven approach produces a truly fluid experience where every pixel of scroll translates directly into the glass effect intensity.

### Key features

- Progressive backdrop-filter blur (0px → 20px) driven by scroll
- Fluid background opacity transition
- Subtle border-bottom reveal
- `prefers-reduced-motion`: static glass effect applied
- `forced-colors`: full support without glass effect
- `prefers-color-scheme`: complete light/dark themes
- Print stylesheet with static navbar
- Semantic HTML nav with ARIA labels
- Keyboard accessible links with focus-visible
- Responsive mobile layout
