# Basic Invoice Tax Row

## What it does

This submission adds a simple CSS-only invoice tax row for checkout summaries,
invoice breakdowns, billing panels, and payment review screens.

It presents a tax type icon, tax label, helper text, rate metadata, and amount
in one compact reusable row.

## How to use it

Add the base row class with a tax icon, copy area, rate label, and amount pill:

```html
<article class="basic-invoice-tax-row">
  <span class="tax-icon is-gst" aria-hidden="true">GST</span>
  <div class="tax-copy">
    <strong>Goods and Services Tax</strong>
    <p>Applied according to the billing address region.</p>
  </div>
  <span class="tax-rate">18%</span>
  <span class="tax-amount is-gst">$24.30</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
billing interfaces. The row can be reused inside invoices, checkout summaries,
subscription billing cards, and payment review panels while staying lightweight
and CSS-only.

## Included features

- GST, VAT, and processing fee examples
- Rate metadata and amount pill
- Region/helper copy for tax context
- Long text truncation for tax descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the invoice tax row
- `README.md` - usage and contribution context
