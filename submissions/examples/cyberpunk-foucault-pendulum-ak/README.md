# Cyberpunk Foucault Pendulum Swing UI

1. What does this do?
Creates a hardware-accelerated, pure CSS 3D Foucault Pendulum that simulates both a realistic gravity swing and Earth's rotational precession, wrapped in a neon cyberpunk aesthetic.

2. How is it used?
```html
<div class="cyberpunk-floor-grid-ak"></div>
<div class="cyberpunk-foucault-precession-ak">
  <div class="cyberpunk-pendulum-arm-ak">
    <div class="cyberpunk-pendulum-bob-ak"></div>
  </div>
</div>
```

3. Why is it useful?
It demonstrates the raw power of CSS 3D transforms (`rotateY` for precession + `rotateZ` for swing) working together to create complex, realistic physical simulations without JavaScript. The dark mode cyberpunk aesthetic fits beautifully as a futuristic loader, dashboard idle screen, or ambient background element while remaining fully accessible (respecting `prefers-reduced-motion`).
