# Hover Reveal Text Utility

## 1. What does this do?

This is a self-contained utility submission (resolves [#55309](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55309)) that swaps a primary line of text for a secondary one on hover, with the primary text sliding up and fading out while the secondary text slides in from below to take its place.

It includes:

- The **base `.hover-reveal-text` utility**, matching the structure proposed in the issue.
- **Three applied examples**: a button ("Add to Cart" → price), a card action ("View details" → stock status), and a nav link ("Pricing" → "See plans"), to confirm the utility drops onto real elements without extra wrapper markup.
- **Keyboard support** — the reveal also triggers on `:focus-within`, not only `:hover`, so it isn't mouse-only.
- A **`prefers-reduced-motion`** override that shortens the transition instead of removing the effect outright.

## 2. How is it used?

Open `demo.html` in a browser — no build step, no dependencies. Hover (or tab to, then focus) any of the labels to see the swap.

The base pattern, matching the issue's proposed snippet:

```html
<span class="hover-reveal-text">
  <span class="primary-text">Hover Me</span>
  <span class="secondary-text">Welcome!</span>
</span>
```

```css
.hover-reveal-text {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.primary-text,
.secondary-text {
  display: block;
  transition: all 0.35s ease;
}

.secondary-text {
  position: absolute;
  left: 0;
  top: 100%;
  opacity: 0;
}

.hover-reveal-text:hover .primary-text {
  transform: translateY(-100%);
  opacity: 0;
}

.hover-reveal-text:hover .secondary-text {
  top: 0;
  opacity: 1;
}
```

Because the wrapper only needs `overflow: hidden` and `position: relative`, it works the same way inside a `<button>`, a card, or an `<a>` tag — nothing about the surrounding element needs to change.

## 3. Why is it useful?

The issue's own snippet already describes the whole mechanism, so this submission keeps that CSS as-is and focuses on proving it out in context: `demo.html` shows the same `.hover-reveal-text` span unmodified inside a button, a product card, and a nav link, which is the fastest way to confirm it doesn't fight existing padding or alignment. The one addition beyond the original snippet is triggering the reveal on `:focus-within` as well as `:hover`, so keyboard users get the same secondary-text disclosure that mouse users do — a small addition that keeps the utility usable rather than purely decorative. It stays CSS-only, with a single shared transition doing both the fade and the slide.
