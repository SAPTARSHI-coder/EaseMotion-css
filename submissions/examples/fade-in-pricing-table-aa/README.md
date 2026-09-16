# fade-in-pricing-table-aa

**What does this do?**
A pure CSS pricing table for gaming hub layouts — three plan cards fade in and slide up on page load with a staggered delay, with the featured tier scaled and highlighted, no JavaScript required.

**How is it used?**
```html
<div class="fpt-grid">
  <div class="fpt-card">
    <h3 class="fpt-tier">Starter</h3>
    <p class="fpt-price">$0<span>/mo</span></p>
    <ul class="fpt-features">
      <li>5 game servers</li>
    </ul>
    <button class="fpt-cta">Get Started</button>
  </div>

  <div class="fpt-card fpt-card--featured">
    <span class="fpt-badge">Most Popular</span>
    <h3 class="fpt-tier">Pro Gamer</h3>
    <p class="fpt-price">$19<span>/mo</span></p>
    <ul class="fpt-features">
      <li>Unlimited servers</li>
    </ul>
    <button class="fpt-cta">Get Started</button>
  </div>
</div>
```

**Why is it useful?**
Pure CSS/HTML — no JS frameworks — using `@keyframes` with per-card `animation-delay` for a staggered fade-in-up entrance, and a `fpt-card--featured` modifier for a scaled, highlighted plan card with a glow shadow. Fully responsive (collapses to a single column below 820px, with the featured scale reset to avoid overflow), and includes a `prefers-reduced-motion` fallback that disables the animation and shows cards in their final state immediately — matching EaseMotion's animation-first, accessible philosophy.
