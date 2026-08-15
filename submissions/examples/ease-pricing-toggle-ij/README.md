# Pricing Toggle

A three-tier pricing table whose prices flip with a 3D rotation when you switch between monthly and yearly billing.

## How is it used?

Keep the numbers in `data-monthly` / `data-yearly` attributes and toggle `.yearly` on the switch:

```html
<button class="switch" id="billingSwitch"><span class="knob"></span></button>
<span class="amount" data-monthly="12" data-yearly="9">12</span>
```

When the switch gets `.yearly`, the knob slides with a spring curve and each `.amount` re-runs the `flipPrice` keyframe as its value swaps.

## Why is it useful?

Billing toggles are a classic pricing-page interaction. This component packages the whole interaction — spring knob, bobbing "popular" ribbon, staggered card entrances, and a price flip — behind readable state classes, demonstrating the kind of reusable micro-interaction EaseMotion CSS wants to offer as first-class utilities.
