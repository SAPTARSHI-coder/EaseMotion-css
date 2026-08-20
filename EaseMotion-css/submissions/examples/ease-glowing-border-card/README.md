# Glowing Gradient Border Card

A highly requested, premium pricing card component featuring a continuously spinning, glowing gradient border. This effect draws user attention to specific tiers or featured products, commonly seen on modern SaaS landing pages like Vercel or Stripe.

### Usage
```html
<div class="ease-glowing-card">
    <div class="ease-glowing-card-inner">
        <!-- Your content goes here -->
        <h3 class="ease-glow-title">Pro Tier</h3>
        <div class="ease-glow-price">$29</div>
    </div>
</div>
```

### Why is it useful?
Creating animated gradient borders used to require complex JavaScript or SVG manipulation. This component leverages modern CSS `conic-gradient` combined with a simple `@keyframes` spin animation. By placing the rotating gradient on a pseudo-element behind a masked inner container, we achieve a flawless, hardware-accelerated animated border using zero external dependencies.
