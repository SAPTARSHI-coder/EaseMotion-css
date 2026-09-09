# Advanced Component 128 - Glassmorphic Pricing Card with Animated Gradient Borders

**What does this do?**  
This component is a modern, premium pricing card featuring a frosted glass effect (`backdrop-filter: blur`), 3D lifting physics on hover, and a spectacularly complex animated rotating gradient border created entirely using CSS pseudo-elements and `@keyframes`.

**How is it used?**  

```html
<div class="ease-pricing-card">
    <div class="ease-pricing-plan">Pro Tier</div>
    <div class="ease-pricing-price">$49<span>/mo</span></div>
    <ul class="ease-pricing-features">
        <li>Unlimited Projects</li>
        <li>Priority Support</li>
    </ul>
    <button class="ease-pricing-btn">Get Started</button>
</div>
```

**Why is it useful?**  
Animated gradient borders typically require heavy SVG manipulation or JavaScript calculations. This component achieves a stunning, hardware-accelerated fluid rotating border strictly through CSS `conic-gradient` and layer masking (`::after`), adhering perfectly to EaseMotion's animation-first, zero-dependency philosophy.
