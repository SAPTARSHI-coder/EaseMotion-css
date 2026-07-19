# Heron

### What does this do?

It shows a grey heron standing motionless in a marsh at sunset, then striking. It holds its poise, its wing flexes, and every six seconds the neck snaps down into the water; a fish comes up in its beak and rings spread where it broke the surface. Under reduced motion the heron simply stands.

### How is it used?

```html
<div class="heron">
  <span class="legH"></span>
  <div class="neckH">
    <span class="neckBar"></span>
    <span class="beakH2"></span>
  </div>
</div>
```

The strike is the whole point of the timing. The neck holds perfectly still for 55 percent of a six second cycle, then rotates 46 degrees in a fast `cubic-bezier` before easing back: the long stillness is what makes the sudden movement read as a strike rather than a sway. The fish and the ripple rings run their own keyframes on the same six second clock and stay invisible until 62 percent, just after the beak enters the water, so the catch always lands on the strike with no JavaScript coordinating them.

### Why is it useful?

Wetland, wildlife, and patience or timing themes use a heron. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
