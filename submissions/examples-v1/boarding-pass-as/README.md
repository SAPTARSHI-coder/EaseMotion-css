# Boarding Pass

### What does this do?

It shows a boarding pass card with a route from origin to destination, flight details, and a tear off stub separated by a perforated notch edge and a CSS barcode. There are no images.

### How is it used?

```html
<div class="pass">
  <div class="pass-main">
    <div class="route"><span class="code">DEL</span><div class="route-line"><svg>...</svg></div><span class="code">SFO</span></div>
    <div class="pass-info">...</div>
  </div>
  <div class="pass-stub">
    <div class="stub-seat"><b>22A</b><span>SEAT</span></div>
    <div class="barcode"></div>
  </div>
</div>
```

The stub is divided by a dashed border, and the two round notches are drawn with pseudo elements that match the page background. The barcode is a repeating linear gradient.

### Why is it useful?

Travel and event apps show tickets and passes. This builds a boarding pass with a perforated divider from notch pseudo elements and a striped CSS barcode, using only CSS with no images. It reflows spacing on very narrow screens.
