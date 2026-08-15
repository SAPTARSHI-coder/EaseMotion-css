# CSS Bank Statement Row

A responsive CSS-only bank statement transaction row with category
icons, transaction details, status, and income/expense styling.

## Features

- Pure HTML and CSS
- Bank transaction row layout
- Category icons with different visual states
- Income and expense amount styling
- Smooth hover interaction
- Responsive mobile layout
- Semantic transaction structure
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Component demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

A transaction can be structured using a semantic article:

```html
<article class="transaction">
  <div class="category category-green" aria-hidden="true">
    <span>↗</span>
  </div>

  <div class="transaction-info">
    <strong>Salary Deposit</strong>
    <span>Today · Direct deposit</span>
  </div>

  <div class="transaction-amount income">
    <strong>+$2,450.00</strong>
    <span>Completed</span>
  </div>
</article>