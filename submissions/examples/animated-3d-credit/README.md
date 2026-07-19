# Interactive 3D Credit Card Hover Animation

A realistic banking/credit card UI with a subtle 3D tilt and an animated lighting sheen that sweeps across the surface on hover. Pure HTML and CSS — no JavaScript required.

## Features

- 💳 Realistic card proportions (standard 1.586:1 aspect ratio) with chip, masked number, holder name, expiry, and brand mark
- 🎬 Smooth 3D tilt on hover using `perspective` + `rotateX`/`rotateY`, with card content lifted via `translateZ` for a layered depth effect
- ✨ Animated diagonal light sheen that sweeps across the card on hover, simulating light catching a glossy surface
- 📱 Responsive — scales down on narrow screens while keeping card proportions intact
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Include `style.css` and wrap the card in a perspective container:

```html
<div class="card-scene">
  <div class="credit-card">
    <div class="card-chip"></div>
    <p class="card-number">•••• •••• •••• 4821</p>

    <div class="card-footer">
      <div>
        <p class="card-label">Card Holder</p>
        <p class="card-holder">Alex Morgan</p>
      </div>
      <div>
        <p class="card-label">Expires</p>
        <p class="card-expiry">09/29</p>
      </div>
      <div class="card-brand">VISA</div>
    </div>
  </div>
</div>