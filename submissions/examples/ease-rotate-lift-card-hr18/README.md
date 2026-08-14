# Rotate Lift Card Hover Utility

## 1. What does this do?

This is a self-contained animation submission (resolves [#55307](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55307)) that adds a hover effect for cards: on hover, a card lifts up, tilts a few degrees, and its shadow deepens to sell the sense of it rising off the page.

It includes:

- The **base `.rotate-lift-card` class**, matching the structure and values proposed in the issue.
- A **`--tilt-right` modifier** that flips the rotation direction, so a row of cards doesn't all lean the same way.
- A **pricing grid example** showing the effect applied to real cards with a featured/highlighted variant, confirming it doesn't conflict with existing card content or badges.
- A **`prefers-reduced-motion`** override that shortens the transition instead of removing the effect outright.

## 2. How is it used?

Open `demo.html` in a browser — no build step, no dependencies. Hover any card to see it lift and tilt.

The base pattern, matching the issue's proposed snippet:

```html
<div class="rotate-lift-card">
  <h3>Hover Me</h3>
  <p>Interactive card animation.</p>
</div>
```

```css
.rotate-lift-card {
  width: 280px;
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.rotate-lift-card:hover {
  transform: translateY(-8px) rotate(-3deg);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
}
```

To alternate the tilt direction — useful in a row of three or more cards — add the modifier class:

```html
<div class="rotate-lift-card rotate-lift-card--tilt-right">
  <h3>Tilts right instead</h3>
  <p>Same lift, opposite rotation.</p>
</div>
```

## 3. Why is it useful?

The issue's snippet already defines the whole effect correctly, so this submission keeps that CSS as-is and adds the one thing a real card grid usually needs next: a way to break up repetition when several of these cards sit next to each other. Without a direction modifier, three or four cards all rotating the same way on hover can look mechanical; alternating left and right tilts reads as more natural, and it costs nothing beyond flipping a sign on one property. The pricing-grid example demonstrates that the class layers cleanly onto cards that already have their own padding, badges, and typography, since `.rotate-lift-card` only touches `transform` and `box-shadow` and never resets or overrides anything else about the element it's applied to.
