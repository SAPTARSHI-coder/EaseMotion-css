# Particle Burst Button

A highly interactive and fun button that shoots out colorful CSS particles upon clicking, utilizing the `:focus` pseudo-class for a pure CSS interactive experience.

### Usage
```html
<button class="burst-btn">
  <span class="btn-text">Click Me</span>
  <span class="particles">
    <span class="particle p1"></span>
    <span class="particle p2"></span>
    <!-- ... more particles ... -->
  </span>
</button>
```

### Why is it useful?
Provides immediate, joyful feedback on user interactions. By utilizing CSS custom properties (`--tx`, `--ty`) for particle trajectories and triggering the animation on `:focus`, this component avoids the need for JavaScript event listeners while delivering a highly dynamic, premium micro-animation that delights the user.
