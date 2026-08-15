# Foucault Pendulum Swing Background (`ease-foucault-pendulum-bg-ksk`)

1. What does this do?  
An animated background layout component featuring Foucault Pendulum Swing styling. It renders a heavy gravity pendulum bob swinging continuously (`transform: rotate(-24deg)` → `rotate(24deg)`) using a smooth ease-in-out timeline, hanging over a slowly rotating compass dial that represents Earth's rotation.

2. How is it used?  
Define a fixed full-screen viewport `.pendulum-viewport` to act as the background canvas. Main page content blocks float on top inside normal layout flows:

```html
<div class="pendulum-viewport">
  <div class="pendulum-wire">
    <div class="pendulum-bob"></div>
  </div>
  <div class="pendulum-dial"></div>
</div>

<main class="demo-page">
  <!-- Content -->
</main>
```

Configure parameters using CSS variables:
```css
:root {
  --ease-pendulum-duration: 4.8s;          /* swing time period */
  --ease-pendulum-accent:   #f43f5e;       /* Rose core glow */
  --ease-pendulum-bg:       #08090e;
}
```

3. Why is it useful?  
Provides a slow, calming scientific visual animation for background layers. Offloads all calculations directly to the GPU using CSS composition layers (`transform` rotation matrices), keeping CPU cycle load at 0%, while maintaining full mobile viewport responsiveness, prefers-reduced-motion safety overrides, and Dark/Light theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #73786.*
