# Basic Delivery Option Row

## What it does

This submission adds a simple CSS-only delivery option row for checkout pages,
shipping selectors, pickup flows, and ecommerce order forms.

It presents a delivery method icon, method name, arrival estimate, price, and
availability state in one compact reusable row.

## How to use it

Add the base row class with an icon, copy area, price label, and state pill:

```html
<article class="basic-delivery-option-row is-selected">
  <span class="delivery-icon" aria-hidden="true">ST</span>
  <div class="delivery-copy">
    <strong>Standard delivery</strong>
    <p>Arrives in 3-5 business days</p>
  </div>
  <span class="delivery-price">Free</span>
  <span class="delivery-state is-selected">Selected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
checkout interfaces. The row can be reused in shipping selectors, order forms,
cart pages, and pickup panels while staying lightweight and CSS-only.

## Included features

- Standard, express, and pickup delivery examples
- Selected, available, and pickup state pills
- Delivery price metadata
- Long text truncation for delivery details
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the delivery option row
- `README.md` - usage and contribution context
