# Ease Pricing Cards

## What does this do?
Animated pricing cards with a **cursor-tracking 3D tilt** hover effect and a
**monthly/yearly billing toggle** that morphs the price number smoothly
between values, instead of a flat hover-lift with static prices.

## How is it different from a typical pricing-cards utility?
- Cards tilt in 3D based on cursor position within the card (subtle
  perspective rotation), not just a uniform `translateY` lift.
- Includes a billing-period toggle that animates the displayed price from
  one value to another using an eased count-up/down, rather than instantly
  swapping text.
- Featured/popular plan uses a gradient background and elevated CTA styling
  to stand out, consistent with real SaaS pricing pages.
- Responsive: collapses to a single column on smaller viewports.

## How is it used?
\`\`\`html
<div class="ease-pricing__card" data-monthly="9" data-yearly="86">
  <h3>Basic</h3>
  <div class="price">
    <span class="currency">$</span>
    <span class="amount">9</span>
    <span class="period">/mo</span>
  </div>
  ...
</div>
\`\`\`

See `demo.html` for the small JS driving the tilt tracking and price
animation (all visual styling is in `style.css`).

## Why is this useful?
Pricing sections are one of the most common landing-page components, and a
tactile hover response plus a smooth billing toggle noticeably improves
perceived polish — a strong real-world showcase for EaseMotion CSS.