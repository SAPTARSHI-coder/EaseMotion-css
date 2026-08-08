# pricing-table-pr

A **responsive pricing table** with highlighted popular plan, feature checkmarks, and hover effects.

## Preview

Open `demo.html` in your browser. No build step required.

## Components

| Component | Class | Purpose |
|-----------|-------|---------|
| Grid | `.pricing-pr` | Responsive card grid |
| Card | `.pricing-card-pr` | Individual pricing card |
| Popular | `.pricing-popular-pr` | Highlighted plan |
| Badge | `.pricing-badge-pr` | "Most Popular" label |
| Name | `.pricing-name-pr` | Plan name |
| Price | `.pricing-price-pr` | Price container |
| Currency | `.pricing-currency-pr` | $ symbol |
| Amount | `.pricing-amount-pr` | Price number |
| Period | `.pricing-period-pr` | /month text |
| Features | `.pricing-features-pr` | Feature list |
| Feature | `.pricing-feature-pr` | Individual feature |
| Missing | `.pricing-feature-pr.is-missing-pr` | Crossed-out feature |
| CTA | `.pricing-cta-pr` | Call-to-action button |
| Table | `.pricing-table-pr` | Comparison table |

## Usage

```html
&lt;div class="pricing-pr"&gt;
  &lt;div class="pricing-card-pr"&gt;
    &lt;h3 class="pricing-name-pr"&gt;Basic&lt;/h3&gt;
    &lt;p class="pricing-desc-pr"&gt;Description here&lt;/p&gt;
    &lt;div class="pricing-price-pr"&gt;
      &lt;span class="pricing-currency-pr"&gt;$&lt;/span&gt;
      &lt;span class="pricing-amount-pr"&gt;29&lt;/span&gt;
      &lt;span class="pricing-period-pr"&gt;/month&lt;/span&gt;
    &lt;/div&gt;
    &lt;ul class="pricing-features-pr"&gt;
      &lt;li class="pricing-feature-pr"&gt;Included feature&lt;/li&gt;
      &lt;li class="pricing-feature-pr is-missing-pr"&gt;Not included&lt;/li&gt;
    &lt;/ul&gt;
    &lt;a href="#" class="pricing-cta-pr pricing-cta-primary-pr"&gt;Get Started&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;