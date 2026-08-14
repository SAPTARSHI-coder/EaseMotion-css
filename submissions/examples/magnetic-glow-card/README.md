# Magnetic Glow Card with Particle Trail

## What does this do?
A premium interactive card that on hover: lifts and tilts (magnetic effect), activates an animated multi-color gradient border glow, and emits blurred ambient particles that float upward.

## How is it used?

```html
<div class="card-scene">
  <div class="magnetic-card">
    <div class="card-inner">
      <div class="particles">
        <span class="particle"></span>
        <!-- repeat 5-6 times -->
      </div>
      <h2 class="card-title">Your Title</h2>
      <p class="card-desc">Your description here.</p>
    </div>
  </div>
</div>
```

## Why is it useful?
EaseMotion CSS is animation-first — this component demonstrates composite hover interactions (3D transform + gradient animation + particle keyframes) achievable with zero JavaScript, providing a drop-in premium UI element for landing pages, pricing sections, and feature cards.
