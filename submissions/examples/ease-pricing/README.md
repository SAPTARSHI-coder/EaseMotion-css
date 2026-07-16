# Animated Pricing Tier Card

## What does this add?

A pricing tier card set with a lift + border-highlight hover state, a "Most Popular" badge with a subtle pulse and shine animation, and a visually prominent CTA button on the featured tier.

## How does a developer use it?

```html
<div class="tier-card">
  <div class="tier-name">Starter</div>
  <div class="tier-price"><span class="tier-currency">$</span>9<span class="tier-period">/mo</span></div>
  <ul class="tier-features">
    <li>5 projects</li>
  </ul>
  <button class="tier-cta" type="button">Get Started</button>
</div>

<!-- Featured / popular tier -->
<div class="tier-card tier-card--popular">
  <span class="tier-badge">★ Most Popular</span>
  <div class="tier-name">Pro</div>
  <div class="tier-price"><span class="tier-currency">$</span>29<span class="tier-period">/mo</span></div>
  <ul class="tier-features">
    <li>Unlimited projects</li>
  </ul>
  <button class="tier-cta tier-cta--primary" type="button">Get Started</button>
</div>
```

No JavaScript needed — every animation (hover lift, badge pulse, badge shine, CTA prominence) is pure CSS.

## Why does it fit EaseMotion CSS?

Pricing pages are one of the most common SaaS/product UI patterns, and a static set of boxes rarely communicates which plan to pick. This adds motion that does that work for you: hover feedback invites interaction, the badge's pulse/shine draws the eye to the recommended plan without being distracting, and the gradient CTA makes the primary action unmistakable — all through plain, copy-pasteable CSS in line with EaseMotion's animation-first philosophy.

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and hover over each card to see the lift + border highlight. The "Most Popular" badge on the middle card pulses and has a shine sweep continuously.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

The badge's pulse/shine animation respects `prefers-reduced-motion: reduce` and disables itself for users who've set that preference.
