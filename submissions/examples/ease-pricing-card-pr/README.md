# ease-pricing-card-pr

Pricing plan card with feature list, popular badge, and CTA button.

## Features

- 3-column grid layout with centered popular plan
- Popular plan badge and scale highlight
- Price display with currency and period
- Feature list with included/excluded states
- Primary and secondary CTA buttons
- Hover lift effect with shadow
- Responsive: stacks on mobile

## Files

- `style.css` — the pricing card styles
- `demo.html` — working demo with Basic, Pro, Enterprise
- `README.md` — usage documentation

## Usage

```html
&lt;div class="pricing-pr-grid"&gt;
  &lt;div class="pricing-pr-card"&gt;
    &lt;div class="pricing-pr-header"&gt;
      &lt;div class="pricing-pr-name"&gt;Plan&lt;/div&gt;
      &lt;div class="pricing-pr-price"&gt;
        &lt;span class="pricing-pr-currency"&gt;$&lt;/span&gt;
        &lt;span class="pricing-pr-amount"&gt;29&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="pricing-pr-period"&gt;per month&lt;/div&gt;
    &lt;/div&gt;
    &lt;ul class="pricing-pr-features"&gt;
      &lt;li class="pricing-pr-feature pricing-pr-feature-included"&gt;Feature&lt;/li&gt;
    &lt;/ul&gt;
    &lt;a href="#" class="pricing-pr-cta pricing-pr-cta-primary"&gt;Get Started&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;