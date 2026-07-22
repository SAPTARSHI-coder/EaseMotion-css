# Ease Refresh Button Animation (Contributor Submission: prerna)

## What does this do?
This component provides four pure CSS-animated variants of a refresh button (Spin & Pulse, Progress Glow, Particle Success Checkmark Morph, and Retro Cyberpunk Glitch) that transition smoothly through hover, active, loading, and completion states without requiring complex JavaScript logic.

## How is it used?
Add the base class `.refresh-btn` along with one of the variant modifiers, and optionally toggle the state classes (`.is-refreshing` or `.is-complete`) to control the lifecycle lifecycle animations:

```html
<!-- Spin & Pulse Variant -->
<button class="refresh-btn refresh-btn--spin">
  <svg class="refresh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
  </svg>
  <span>Refresh Feed</span>
</button>

<!-- Progress Glow Variant -->
<button class="refresh-btn refresh-btn--glow">
  <div class="refresh-glow-track"></div>
  <svg class="refresh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
  </svg>
  <span>Sync Data</span>
</button>

<!-- Success Particle Burst Variant -->
<button class="refresh-btn refresh-btn--particles">
  <svg class="refresh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
  </svg>
  <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
  <span>Fetch Records</span>
  <span class="particle p1"></span>
  <span class="particle p2"></span>
  <span class="particle p3"></span>
  <span class="particle p4"></span>
  <span class="particle p5"></span>
  <span class="particle p6"></span>
  <span class="particle p7"></span>
  <span class="particle p8"></span>
</button>

<!-- Cyberpunk Glitch Variant -->
<button class="refresh-btn refresh-btn--cyberpunk" data-text="RE-INITIALIZE">
  <svg class="refresh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
  </svg>
  <span>RE-INITIALIZE</span>
</button>
```

## Why is it useful?
It provides standard, modern web-app micro-interactions for reloading content using hardware-accelerated animations, supporting light/dark modes natively, and respecting the `prefers-reduced-motion` media feature. This complies with the EaseMotion CSS philosophy of modular, high-fidelity micro-interactions with zero JavaScript styling dependencies.

## Tech Stack
- HTML5
- CSS3 (Vanilla CSS variables, keyframes, transitions)
- Zero external dependencies or frameworks
