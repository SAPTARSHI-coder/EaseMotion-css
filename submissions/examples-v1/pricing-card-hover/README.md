# Interactive Pricing Cards with Hover Animation

Three responsive pricing cards (Basic, Pro, Premium) with an elegant hover lift-and-glow effect and a highlighted featured plan. Pure HTML and CSS — no JavaScript required.

## Features

- 💳 Three-tier pricing layout: Basic, Pro (featured), Premium
- ⭐ Featured plan is visually highlighted — slightly scaled up with a "Most Popular" badge
- ✨ Hover lift + radial glow effect on every card
- 🎯 Gradient call-to-action button on the featured plan
- 📱 Fully responsive — stacks into a single column on mobile, with the featured plan shown first
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Include `style.css`, then build a `.pricing-grid` containing three `.pricing-card` elements. Add `pricing-card--featured` to the plan you want highlighted:

```html
<div class="pricing-grid">
  <div class="pricing-card">
    <p class="pricing-plan">Basic</p>
    <p class="pricing-price">$9<span>/month</span></p>
    <ul class="pricing-features">
      <li>1 project</li>
      <li>5GB storage</li>
    </ul>
    <button class="pricing-btn">Get Started</button>
  </div>

  <div class="pricing-card pricing-card--featured">
    <span class="pricing-badge">Most Popular</span>
    <p class="pricing-plan">Pro</p>
    <p class="pricing-price">$29<span>/month</span></p>
    <ul class="pricing-features">
      <li>10 projects</li>
      <li>50GB storage</li>
    </ul>
    <button class="pricing-btn">Get Started</button>
  </div>

  <div class="pricing-card">
    <p class="pricing-plan">Premium</p>
    <p class="pricing-price">$79<span>/month</span></p>
    <ul class="pricing-features">
      <li>Unlimited projects</li>
      <li>500GB storage</li>
    </ul>
    <button class="pricing-btn">Get Started</button>
  </div>
</div>