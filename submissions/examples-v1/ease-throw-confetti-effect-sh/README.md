# Ease Throw Confetti Effect

A celebratory confetti burst effect triggered by a button click — pure CSS/JS, no external libraries.

## What does this do?
Clicking the button spawns 60 small colored confetti pieces that burst outward from the button in random directions, arc under gravity, spin, and fade out — then automatically clean themselves up from the DOM.

## How is it used?
Open `demo.html` and click the "🎉 Celebrate" button to trigger the confetti burst. Can be repeated as many times as you like.

```html
<div class="ease-confetti-stage">
  <button class="ease-confetti-btn">🎉 Celebrate</button>
</div>
<script>
  // On click, dynamically creates .ease-confetti-piece elements
  // with randomized direction, distance, and rotation via CSS custom properties.
</script>
```

## Why is it useful?
A fun, lightweight, dependency-free celebration effect for success states, form submissions, achievements, or milestones — fits EaseMotion's animation-first philosophy with zero external libraries.
