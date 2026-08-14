# Cyberpunk Bento Foucault Pendulum Grid

1. What does this do?
Creates a hardware-accelerated, pure CSS Bento Grid where each card hangs from a virtual wire and physically swings and twists in 3D space like a Foucault Pendulum.

2. How is it used?
```html
<div class="cyberpunk-bento-grid-ak">
  <div class="bento-precession-ak">
    <div class="bento-swing-ak">
      <div class="bento-card-ak">
        <h3>System.IO</h3>
        <p>Data streaming activated.</p>
      </div>
    </div>
  </div>
  <!-- Add more nested pendulum cards -->
</div>
```

3. Why is it useful?
It brings a highly dynamic, physical dimension to the popular Bento Grid layout pattern. By utilizing nested 3D CSS animations (`rotateZ` for swinging, `rotateY`/`rotateX` for twisting) and pausing them on hover, the layout acts as an ambient cyberpunk data dashboard that becomes fully usable and readable when interacted with. Supports reduced motion natively.
