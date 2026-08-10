# Bento Spotlight Hover Card (bento-spotlight-card-hd)

## What does this do?
A modern bento grid layout where each card reveals a glowing backdrop spotlight and an active, tracked glowing border following the user's cursor.

## How is it used?
Wrap cards in a grid and define the structural classes. A short event listener updates coordinate variables:
```html
<div class="bento-grid">
  <div class="bento-card spotlight-card">
    <div class="card-glow"></div>
    <div class="card-content">
      <div class="card-icon">⚡</div>
      <h2 class="card-title">Card Title</h2>
      <p class="card-text">Content goes here...</p>
    </div>
  </div>
</div>
```

## Why is it useful?
It creates an extremely premium, high-fidelity interactive grid layout inspired by Vercel and Apple's design systems using hardware-accelerated CSS radial-gradients and coordinate variables.
