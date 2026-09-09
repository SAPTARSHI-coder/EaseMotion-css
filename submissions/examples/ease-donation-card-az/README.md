# Donation Card

Fundraising card with preset amount chips, custom amount input, progress bar, and call-to-action button.

## Usage

```html
<div class="ease-donation-card-az">
  <div class="ease-donation-header-az">
    <h2 class="ease-donation-title-az">Support our cause</h2>
    <p class="ease-donation-desc-az">Your contribution helps us make a difference.</p>
  </div>

  <div class="ease-donation-progress-az">
    <div class="ease-donation-progress-bar-az">
      <div class="ease-donation-progress-fill-az" style="width:68%;"></div>
    </div>
    <div class="ease-donation-progress-stats-az">
      <span><span class="ease-donation-progress-raised-az">$12,400</span> raised</span>
      <span>Goal: $18,000</span>
    </div>
  </div>

  <div class="ease-donation-amounts-az">
    <button class="ease-donation-amount-az">$10</button>
    <button class="ease-donation-amount-az --active">$25</button>
    <button class="ease-donation-amount-az">$50</button>
    <button class="ease-donation-amount-az">$100</button>
  </div>

  <div class="ease-donation-custom-az">
    <span class="ease-donation-currency-az">$</span>
    <input class="ease-donation-input-az" type="number" placeholder="Custom amount" />
  </div>

  <button class="ease-donation-btn-az">Donate Now</button>

  <div class="ease-donation-footer-az">
    <span>&#x1f512; Secure payment</span>
    <span>&#x2764;&#xfe0f; 100% goes to cause</span>
  </div>
</div>
```

## Variants

- **Amount chips**: `.--active` class on `.ease-donation-amount-az` for selected state
- **Progress**: Set `style="width:X%;"` on `.ease-donation-progress-fill-az`

## CSS Variables

| Variable | Default |
|----------|---------|
| `--ease-space-*` | spacing |
| `--ease-radius-lg` | 12px |
| `--ease-radius-md` | 8px |
| `--ease-color-primary` | #6366f1 |
| `--ease-color-primary-dark` | #4f46e5 |
| `--ease-color-neutral-*` | grays |
| `--ease-font-sans` | system-ui |
