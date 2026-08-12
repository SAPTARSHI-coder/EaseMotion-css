# Ease Corner Reveal Hover

## 1. What does this do?

This is a self-contained animation submission (resolves [#55744](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55744)) that adds a CSS-only hover effect: a colored gradient overlay expands diagonally out of one corner of an element until it covers the whole thing, then retracts back to that corner on mouse-out.

It includes:

- The **base `.ease-corner-reveal` class**, matching the snippet proposed in the issue.
- **Four corner modifiers** — `--tl` (top-left, the default), `--tr`, `--bl`, `--br` — so the reveal can originate from whichever corner suits the layout.
- **Three real-world applications**: a button, a pricing card, and a promo banner, showing the class drops onto existing elements without extra markup.
- A **`prefers-reduced-motion`** override that shortens the transition instead of removing the effect outright.

## 2. How is it used?

Open `demo.html` in a browser — no build step, no dependencies. Hover (or focus with the keyboard) any of the shapes to see the reveal.

The base pattern, straight from the proposed snippet:

```html
<div class="ease-corner-reveal">
  Hover Me
</div>
```

```css
.ease-corner-reveal {
  position: relative;
  display: inline-block;
  padding: 18px 36px;
  background: #1f2937;
  color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
}

.ease-corner-reveal::before {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  width: 220%;
  height: 220%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  transform: scale(0);
  transform-origin: top left;
  transition: transform 0.45s ease;
  z-index: -1;
}

.ease-corner-reveal:hover::before {
  transform: scale(1);
}
```

To reveal from a different corner, add one modifier class alongside the base:

```html
<div class="ease-corner-reveal ease-corner-reveal--br">
  Hover Me
</div>
```

Each modifier only repositions the pseudo-element's starting corner and `transform-origin` — the gradient, timing, and clipping stay identical, so all four read as the same component rather than four separate effects.

## 3. Why is it useful?

The issue's own snippet already nails the core technique — an oversized pseudo-element scaled to zero from a corner — so this submission keeps that mechanism exactly as proposed and extends it in the two directions a real user would actually need: **which corner it starts from**, and **what kind of element it's applied to**. Rather than one isolated demo box, `demo.html` shows the same class working unmodified on a button, a card, and a banner, which is the fastest way to confirm it doesn't fight existing padding, border-radius, or content layout. It stays fully CSS-only — `overflow: hidden` plus `transform: scale()` — so it costs nothing at runtime and never needs a JavaScript event listener.
