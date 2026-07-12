# Credit Card Preview

### What does this do?

It shows a styled credit card preview with a gradient face, a gold chip, a brand mark, a network dots logo, the card number, the holder name, and the expiry. It reads like a real card.

### How is it used?

```html
<div class="card-preview" role="img" aria-label="Credit card preview">
  <div class="cc-top"><div class="cc-chip"></div><div class="cc-brand">EASE</div></div>
  <div class="cc-number">4921 8830 1276 5540</div>
  <div class="cc-bottom">
    <div><span class="cc-label">Card holder</span><span class="cc-value">Ada Lovelace</span></div>
    <div><span class="cc-label">Expires</span><span class="cc-value">08/28</span></div>
    <span class="cc-dots"><span></span><span></span></span>
  </div>
</div>
```

The card keeps a 1.586 aspect ratio like a real card. The chip, sheen, and network dots are drawn with CSS shapes and gradients, so there are no external images. A host app updates the number, name, and expiry as the user types.

### Why is it useful?

Checkout and wallet screens show a live preview of the card as it is entered. This renders a credit card face with a chip, number, and details from a gradient and CSS shapes, using only CSS with no external assets.
