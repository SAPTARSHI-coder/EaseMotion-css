# CSS Fade-In Navbar for Gaming Hub Layouts

Closes #56471

### What does this do?
A responsive navbar for gaming hub layouts where the brand, nav links, and CTA button fade and slide in with a staggered entrance animation on page load.

### How is it used?
```html
<nav class="gaming-navbar">
  <div class="gaming-navbar-brand">NEXUS<span>PLAY</span></div>
  <ul class="gaming-navbar-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Games</a></li>
    <li><a href="#">Tournaments</a></li>
  </ul>
  <button class="gaming-navbar-cta">Play Now</button>
</nav>
```

### Why is it useful?
It gives gaming hub landing pages a polished, energetic first impression using only pure CSS keyframe animations and staggered `animation-delay` — no JavaScript. It's fully responsive across desktop, tablet, and mobile, and falls back to a static, fully visible state for `prefers-reduced-motion` users.

### Notes
- Timing/delays and colors (currently a purple `#a855f7` accent) can be swapped for CSS custom properties during framework integration.
- Fully pure CSS/HTML, no external JS frameworks.
