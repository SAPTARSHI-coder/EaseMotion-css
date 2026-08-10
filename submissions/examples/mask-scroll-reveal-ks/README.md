# Mask Scroll Reveal

## What does this do?

Demonstrates cinematic text and image reveals using CSS `mask-image` animations driven by scroll position. Combines `@property` with `animation-timeline: view()` to animate mask gradients that gradually reveal content as the user scrolls — five distinct techniques, zero JavaScript.

## How is it used?

```html
<!-- A heading that reveals through a horizontal wipe mask on scroll -->
<h2 class="mask-wipe-title">
  Heading
  <span class="mask-wipe-em">Content</span>
</h2>
```

Each technique registers a typed custom property with `@property` that controls a `mask-image` gradient:

```css
@property --mask-progress {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 0%;
}

.mask-wipe-title {
  mask-image: linear-gradient(
    to right,
    black var(--mask-progress),
    transparent calc(var(--mask-progress) + 5%)
  );
  animation: mask-wipe 1s linear both;
  animation-timeline: view();
  animation-range: entry 10% cover 50%;
}

@keyframes mask-wipe {
  from { --mask-progress: 0%; }
  to   { --mask-progress: 100%; }
}
```

## Why is it useful?

This is the first EaseMotion submission to combine CSS `mask-image` with `animation-timeline` for scroll-driven reveals. While `mask-image` demos exist and scroll-driven animations are well-covered, the **intersection of both** — using `@property`-registered custom properties inside `mask-image` gradients driven by scroll position — is genuinely absent from 4,167+ submissions.

It fits EaseMotion's philosophy of **expressive, readable CSS** — class names describe the effect (`mask-wipe-title`, `mask-fade-title`), all values flow through custom properties, and all animations respect `prefers-reduced-motion`.

### Five techniques demonstrated

1. **Horizontal wipe** — `mask-image: linear-gradient(to right, ...)` expands from left to right
2. **Radial fade** — `mask-image: radial-gradient(...)` expands from a central dot to full reveal
3. **Diagonal stripe** — angled gradient sweep creates a curtain-like reveal
4. **Image blind** — vertical gradient mask unveils a decorative CSS gradient image
5. **Texture cards** — staggered card entrance with combined mask + transform + opacity

### Accessibility & fallbacks

- `prefers-reduced-motion`: disables all mask animations, shows content fully
- `forced-colors`: preserves readability in high-contrast modes
- `prefers-color-scheme`: full light mode theme
- Print stylesheet: removes all masking and animations
- Static fallback `mask-image: none` in all browsers without `animation-timeline` support
