# Octopus

### What does this do?

It shows a cheerful octopus drifting underwater. Its eight tentacles curl and sway in a wave that travels from one side to the other, the body bobs up and down, it blinks, and bubbles rise past it. Under reduced motion the octopus rests and the bubbles are hidden.

### How is it used?

```html
<div class="octo">
  <div class="tents"><span class="tent tn1"></span>...</div>
  <div class="head"><span class="eye el"></span><span class="mouth"></span></div>
</div>
```

Each tentacle fans out from the body at its own angle, stored in a `--tr` custom property, and the shared `curl` animation exaggerates that angle and skews the limb, so every tentacle curls around its own resting position rather than snapping to a common one. Staggering the delays across the eight makes the motion ripple along the row.

### Why is it useful?

Ocean, aquarium, and playful mascot themes use an octopus. This builds a drifting octopus with pure CSS shapes, custom properties, and animation, no images, with a reduced motion fallback.
