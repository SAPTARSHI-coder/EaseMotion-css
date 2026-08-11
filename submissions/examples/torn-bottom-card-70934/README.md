# CSS Torn Bottom Card

Ticket pass and coupon voucher cards featuring pure CSS jagged torn bottom edges, perforated dividers, and hover tilt motion.

## 1. What does this do?
Displays a ticket or receipt voucher card with a CSS polygon `clip-path` jagged torn edge, side circle notches, perforated tear lines, and hover elevation.

## 2. How is it used?
Wrap ticket information inside `<article class="torn-card">` with `.tear-divider` and `.card-stub`:

```html
<article class="torn-card VIP-variant">
  <div class="card-main">
    <h2 class="event-title">Cyberpunk Symphony</h2>
  </div>

  <div class="tear-divider">
    <div class="circle-notch notch-left"></div>
    <div class="perforated-line"></div>
    <div class="circle-notch notch-right"></div>
  </div>

  <div class="card-stub">
    <div class="barcode-graphic"></div>
  </div>
</article>
```

## 3. Why is it useful?
Event ticketing platforms, coupon promotion sites, and booking apps need realistic physical ticket aesthetics. This pure CSS torn card pattern delivers realistic paper tear geometry without SVG image dependencies or heavy JavaScript scripts.
