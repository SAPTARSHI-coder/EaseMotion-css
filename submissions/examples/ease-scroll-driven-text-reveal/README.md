# ease-scroll-driven-text-reveal

A scroll-linked text reveal using the native CSS Scroll-Driven Animations API (`animation-timeline: view()`). Text is clipped from bottom and revealed as the element enters the viewport — no JavaScript, no IntersectionObserver. A second variant slides up from below while fading in.

## Usage

```html
<!-- Clip-mask reveal -->
<p class="scroll-reveal-text">Your headline text here.</p>

<!-- Slide-up + fade reveal -->
<p class="scroll-reveal-subtitle">Supporting text here.</p>
```

Wrap in a tall page so scrolling is required:

```html
<body>
  <div style="height: 60vh;"></div>
  <p class="scroll-reveal-text">Revealed on scroll</p>
  <div style="height: 60vh;"></div>
</body>
```

## How it works

- `animation-timeline: view()` ties the animation progress to the element's position in the viewport
- `animation-range: entry 10% cover 40%` defines when in the scroll timeline the animation plays (starts when 10% of the element enters, completes when it covers 40% of the viewport)
- `clip-path: inset(100% 0 0 0)` starts the text fully clipped from the bottom; `inset(0%)` is the fully visible state
- `@keyframes clip-reveal` transitions between these two states, driven entirely by scroll position
- `@supports not (animation-timeline: view())` falls back to always-visible text for unsupported browsers
- `prefers-reduced-motion` also skips the animation and renders text immediately

## Browser support

Native Scroll-Driven Animations are supported in Chrome 115+, Edge 115+, and Safari 18+. Firefox support is behind a flag as of writing. The `@supports` guard ensures graceful fallback.

## Customization

| Property | Description |
|----------|-------------|
| `animation-range` | Controls when in the scroll the reveal triggers |
| `clip-path` keyframe values | Change reveal direction (e.g., `inset(0 0 100% 0)` for top-to-bottom clip) |
| `animation-timeline` | `view()` for element-relative; `scroll()` for page-relative |
| Font size / color | Adjust on `.scroll-reveal-text` |

## Accessibility

Respects `prefers-reduced-motion`. Text renders immediately in its final visible state when reduced motion is preferred.
