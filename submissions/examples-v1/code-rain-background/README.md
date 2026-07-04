# Code Rain Background

## Effect overview

This submission adds a reusable Matrix-inspired background effect that creates layered streams of falling code across a hero or UI surface using only CSS.

## Features

- Matrix-inspired falling character streams
- Infinite looping animation
- Multiple speed and density variants
- Responsive layout support
- Hero background and card overlay support
- Reduced-motion and high-contrast accessibility considerations

## Available classes

- `.ease-code-rain` — base background container
- `.ease-code-column` — vertical falling column of characters
- `.ease-code-rain-fast` — faster, more energetic motion
- `.ease-code-rain-slow` — slower, subtler motion
- `.ease-code-rain-dense` — more tightly packed columns
- `.ease-code-rain-subtle` — softer opacity and lighter color
- `.ease-code-rain-cyberpunk` — vivid magenta glow for cyber-themed layouts

## Animation controls

The effect is driven by CSS variables so timing, opacity, size, and glow can be tuned easily:

```css
:root {
  --ease-rain-speed: 12s;
  --ease-rain-delay: 0s;
  --ease-rain-opacity: 0.7;
  --ease-rain-color: #5eead4;
  --ease-rain-font-size: 1rem;
  --ease-rain-density: 1;
  --ease-rain-glow: 0 0 10px rgba(94, 234, 212, 0.45);
}
```

## Example usage

```html
<div class="ease-code-rain">
  <span class="ease-code-column" style="--ease-rain-delay: 0.2s; --ease-rain-speed: 12s;"></span>
</div>
```

## Browser compatibility

The effect uses standard CSS transforms and animation properties, so it works well in current evergreen browsers. Performance remains strong because the animation relies on lightweight transform-based motion.

## Accessibility considerations

The effect respects `prefers-reduced-motion` by disabling the continuous animation and preserving readable foreground content. The demo also avoids overly bright or flashing motion for comfort.
