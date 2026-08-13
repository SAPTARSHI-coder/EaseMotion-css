# Basic Refund Status Row

## What it does

This submission adds a simple CSS-only refund status row for billing history,
payment support panels, checkout admin screens, and subscription dashboards.

It presents a refund state icon, refund reason, helper text, amount metadata,
and processing state in one compact reusable row.

## How to use it

Add the base row class with a refund icon, copy area, amount label, and state
pill:

```html
<article class="basic-refund-status-row">
  <span class="refund-icon is-processed" aria-hidden="true">OK</span>
  <div class="refund-copy">
    <strong>Duplicate payment refund</strong>
    <p>Refund was processed back to the original payment method.</p>
  </div>
  <span class="refund-amount">$49.00</span>
  <span class="refund-state is-processed">Processed</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
billing and support interfaces. The row can be reused inside payment history,
refund dashboards, subscription support panels, and checkout admin screens
while staying lightweight and CSS-only.

## Included features

- Processed, pending, and review refund examples
- Refund amount metadata
- Refund processing state pills
- Long text truncation for refund descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the refund status row
- `README.md` - usage and contribution context
