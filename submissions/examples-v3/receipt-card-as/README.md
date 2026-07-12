# Receipt Card

### What does this do?

It shows an order receipt with a header, itemized lines with quantities and prices, a subtotal and tax, a bold total, and a zigzag torn bottom edge.

### How is it used?

```html
<div class="receipt">
  <div class="rc-head"><h3>Corner Coffee</h3><span>Order #10842</span></div>
  <ul class="rc-items">
    <li><span>Flat white<small>x2</small></span><b>$7.00</b></li>
  </ul>
  <div class="rc-sums">
    <div><span>Subtotal</span><span>$22.50</span></div>
    <div class="rc-total"><span>Total</span><b>$24.50</b></div>
  </div>
</div>
```

Line items use flex with `justify-content: space-between` so labels and prices align. The torn bottom edge is drawn with two diagonal gradients on a pseudo element.

### Why is it useful?

Checkout and order confirmation screens show a receipt summary. This lays out a receipt with aligned line items, a totals block, and a torn paper edge from a CSS gradient, using only CSS with no images.
