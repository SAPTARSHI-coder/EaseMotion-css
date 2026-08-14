# zoom-hover-VR — Zoom-in / Zoom-out Hover

## 1. What does this do?

Adds subtle scale-transform hover effects to any element — either growing it (zoom in) or shrinking it (zoom out) — with smooth easing and a springy bounce variant, all in pure CSS.

## 2. How is it used?

Add one class to any HTML element. No JavaScript required.

```html
<!-- Zoom in — element grows on hover (cards, images, buttons) -->
<div class="zoom-hover-in">...</div>

<!-- Zoom out — element shrinks on hover (press / depress feedback) -->
<button class="zoom-hover-out">...</button>

<!-- Subtle zoom in — smaller delta, for chips, badges, nav links -->
<span class="zoom-hover-in-subtle">...</span>

<!-- Subtle zoom out -->
<span class="zoom-hover-out-subtle">...</span>

<!-- Bounce zoom in — springy easing, for avatars and CTAs -->
<div class="zoom-hover-in-bounce">...</div>
```

All classes are composable — pair them with existing EaseMotion utilities like `ease-card`, `ease-btn-primary`, or `ease-hover-glow`.

## 3. Why is it useful?

Scale feedback on hover is one of the most universally recognised interactive affordances on the web. It signals interactivity without relying on colour alone, which helps accessibility.

This submission fits EaseMotion CSS's philosophy in three ways:

- **One class, one behaviour** — each class does exactly one thing (grow *or* shrink), matching the framework's single-responsibility rule.
- **Token-driven** — timing and easing values are declared as CSS custom properties (`--zoom-speed`, `--zoom-easing`, `--zoom-easing-bounce`) so the maintainer can wire them up to `--ease-speed-medium` and `--ease-ease-bounce` trivially during integration.
- **Accessible by default** — a `prefers-reduced-motion: reduce` block disables all transforms for users who have opted out of motion, matching `core/animations.css` behaviour exactly.

The five variants (in, out, in-subtle, out-subtle, in-bounce) cover the full practical range from dense navigation UI to playful call-to-action buttons, making this a versatile addition to the hover animation set alongside the existing `ease-hover-grow`, `ease-hover-shrink`, and `ease-hover-lift` classes.
