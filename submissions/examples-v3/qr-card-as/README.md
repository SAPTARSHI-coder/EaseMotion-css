# QR Code Card

### What does this do?

It shows a scan to pay card that frames a QR style code with corner finder patterns and scattered data modules drawn as inline SVG, along with a title, an amount, and a caption. There is no external image.

### How is it used?

```html
<div class="qr-card">
  <h2>Scan to pay</h2>
  <div class="qr">
    <svg viewBox="0 0 25 25" role="img" aria-label="QR code">
      <rect x="0" y="0" width="7" height="7" fill="#0b1121" />
      <!-- finder patterns and data modules -->
    </svg>
  </div>
  <div class="qr-amount">$42.00</div>
</div>
```

The QR sits on a white panel so the dark modules read clearly. The three finder patterns are drawn as nested squares and the data area is a grid of one by one module rects.

### Why is it useful?

Payment and ticket screens show a QR to scan. This frames a QR style graphic in a clean card with a title and amount, using only CSS and an inline SVG so there are no external assets. This is a decorative placeholder; swap in a real generated QR for production.
