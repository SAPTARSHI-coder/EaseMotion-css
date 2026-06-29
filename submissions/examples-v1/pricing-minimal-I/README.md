 
# Minimal Pricing Card (ease-card-pricing-minimal)

Minimal pricing card with plan name, price, feature list, CTA, and most-popular badge.

## Files

- demo.html - Interactive demo
- style.css - Pricing card styles
- README.md - Documentation

## Features

- 📝 Clean, minimal design
- ✅ Feature list with check icons
- 🔘 CTA button
- ✨ Hover highlight for recommended plan
- 🏷️ Most-popular badge variant
- 🌙 Dark and light theme variants

## Usage

```html
<div class="ease-card-pricing-minimal">
    <div class="pricing-header">
        <h3 class="plan-name">Pro</h3>
        <div class="plan-price">
            <span class="currency">$</span>
            <span class="price">29</span>
            <span class="period">/mo</span>
        </div>
    </div>
    <div class="pricing-features">
        <div class="feature">✓ Unlimited Projects</div>
        <div class="feature">✓ 100GB Storage</div>
    </div>
    <a href="#" class="pricing-cta primary">Get Started</a>
</div>

<!-- Recommended variant -->
<div class="ease-card-pricing-minimal recommended">
    <div class="most-popular">Most Popular</div>
    <!-- ... -->
</div>