# Parallax Tilt Card Effect

## What does this do?
A card that tilts in 3D space toward the user's cursor as they move
their mouse over it, creating a parallax-like depth effect. When the
mouse leaves, the card smoothly snaps back to flat.

## How is it used?

```html
<div class="ease-tilt-wrapper">
  <div class="ease-tilt-card" id="tiltCard">
    <h3>Tilt Card</h3>
    <p>Card content...</p>
  </div>
</div>

<script>
  const card = document.getElementById('tiltCard');
  const maxTilt = 12;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxTilt;
    card.style.setProperty('--ease-tilt-x', `${rotateX}deg`);
    card.style.setProperty('--ease-tilt-y', `${rotateY}deg`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--ease-tilt-x', '0deg');
    card.style.setProperty('--ease-tilt-y', '0deg');
  });
</script>
```

## How it works
The card listens for `mousemove` events to calculate where the cursor is
relative to the card's center. The horizontal distance becomes `rotateY`
and the vertical distance becomes `rotateX`, applied together via
`transform`. When the mouse leaves, the card smoothly snaps back to flat
using a CSS transition. `perspective` on the wrapper controls how dramatic
the tilt feels.

## Why it fits EaseMotion
The CSS does all the heavy lifting — `perspective`,
`transform-style: preserve-3d`, and `transition` for the snap-back. The
tiny JavaScript is only needed to read mouse coordinates and set
`--ease-tilt-x` / `--ease-tilt-y` custom properties, not to drive the
animation itself. The result is a class like `.ease-tilt-card` that
works out of the box with no configuration, and respects
`prefers-reduced-motion`.