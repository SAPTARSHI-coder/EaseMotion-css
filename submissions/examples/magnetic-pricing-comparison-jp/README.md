# Magnetic Pricing Comparison Switcher

## What does this do?

This submission creates a responsive, pure-CSS pricing comparison component with a magnetic monthly/yearly selector, synchronized price transitions, savings text, and a clearly identified recommended plan.

## How is it used?

```html
<input
  class="billing-radio-jp"
  type="radio"
  name="billing"
  id="billing-monthly"
  checked
/>

<input
  class="billing-radio-jp"
  type="radio"
  name="billing"
  id="billing-yearly"
/>

<div class="billing-switch-jp">
  <span class="magnetic-indicator-jp" aria-hidden="true"></span>
  <label for="billing-monthly">Monthly</label>
  <label for="billing-yearly">Yearly · Save 20%</label>
</div>

<article class="pricing-card-jp">
  <span class="price-jp monthly-price-jp">29</span>
  <span class="price-jp yearly-price-jp">23</span>
</article>
```

Customize the component through CSS variables:

```css
:root {
  --pricing-duration-jp: 620ms;
  --pricing-easing-jp: cubic-bezier(0.34, 1.56, 0.64, 1);
  --pricing-accent-jp: #725fff;
  --pricing-success-jp: #24bc8f;
  --pricing-card-radius-jp: 1.4rem;
}
```

The two native radio inputs control the sliding selector and every plan's monthly/yearly price state without JavaScript.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Pricing comparison components are useful for SaaS products, memberships, creator platforms, subscription services, and landing pages.

This example fits EaseMotion CSS because it:

- coordinates selector, price, savings, and card motion;
- uses native radio controls for keyboard accessibility;
- displays readable monthly and yearly labels;
- communicates savings as text;
- identifies the recommended plan with a visible badge;
- includes hover and focus feedback;
- stacks plans on mobile screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
