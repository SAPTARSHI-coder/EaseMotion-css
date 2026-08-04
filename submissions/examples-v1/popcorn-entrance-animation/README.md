# Popcorn Entrance Animation

## Animation overview

This submission adds a playful entrance utility that makes content appear with a soft pop, subtle fade, and staggered sequence for landing pages, feature sections, dashboards, and marketing layouts.

## Features

- Pop-in scale animation
- Fade-in entrance
- Sequential staggered delays
- Smooth easing and polished timing
- Lightweight CSS-only implementation
- Responsive card layouts for multiple showcase sections
- Reduced-motion support for accessibility

## Available classes

- `.ease-popcorn` — base utility with sequential delay support
- `.ease-popcorn-fast` — faster motion and shorter delay
- `.ease-popcorn-slow` — slower motion for more relaxed reveals
- `.ease-popcorn-bounce` — slightly stronger easing and pop finish
- `.ease-popcorn-soft` — gentler scale and lower vertical movement

## Customization options

The utility is driven by CSS variables so it can be tuned without editing the animation keyframes:

```css
:root {
  --ease-popcorn-duration: 760ms;
  --ease-popcorn-delay: 120ms;
  --ease-popcorn-scale-start: 0.74;
  --ease-popcorn-scale-end: 1.04;
  --ease-popcorn-easing: cubic-bezier(0.2, 0.88, 0.24, 1);
}
```

## Example usage

```html
<article class="card ease-popcorn" style="--index: 0;">
  A playful entrance card
</article>

<article class="card ease-popcorn ease-popcorn-bounce" style="--index: 1;">
  A bouncier reveal
</article>
```

## Browser compatibility

The animation uses standard CSS transforms and opacity transitions, so it works well in current evergreen browsers. The reduced-motion fallback preserves visibility and avoids motion for users who prefer less animation.

## Accessibility considerations

The demo respects `prefers-reduced-motion` by disabling the entrance animation and leaving content visible immediately. This keeps the experience calm, readable, and non-disruptive for motion-sensitive users.
