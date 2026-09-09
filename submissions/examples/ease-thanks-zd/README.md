# Ease Thanks Zd

## What does this do?
An animated order confirmation / thank you component with SVG checkmark animation, order details, and action buttons — pure HTML and CSS.

## How is it used?
```html
<div class="tk-card">
  <div class="tk-check-wrap">
    <svg viewBox="0 0 100 100" width="72" height="72">
      <circle class="tk-check-circle" cx="50" cy="50" r="45"/>
      <polyline class="tk-check-path" points="30,50 45,66 72,36"/>
    </svg>
  </div>
  <div class="tk-title">Payment Confirmed!</div>
  <div class="tk-desc">Thank you for your purchase.</div>
  <div class="tk-details">
    <div class="tk-row"><span class="tk-row-label">Plan</span><span class="tk-row-value">Pro</span></div>
    <hr class="tk-divider">
    <div class="tk-row tk-total"><span class="tk-row-label">Total</span><span class="tk-row-value">$299</span></div>
  </div>
  <div class="tk-actions">
    <a class="tk-btn tk-btn-primary" href="#">Continue</a>
  </div>
</div>
```

Button variants: tk-btn-primary, tk-btn-secondary

## Why is it useful?
Order confirmation pages are a critical step in e-commerce and SaaS checkout flows. This component provides a polished, animated confirmation with SVG checkmark draw animation, order summary details, and clear next steps.
