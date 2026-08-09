# Barcode

### What does this do?

It shows a product barcode with the number printed below it, on a clean label card. The bars are individual elements whose widths come from a `--w` custom property, alternating dark bars and gaps, so the pattern looks like a scanned barcode.

### How is it used?

```html
<div class="barcode">
  <i class="bk" style="--w: 3px;"></i>
  <i class="wt" style="--w: 2px;"></i>
  <i class="bk" style="--w: 4px;"></i>
</div>
<div class="barcode-num"><span>5</span><span>901234</span><span>123457</span></div>
```

Each bar is an `i` element with `width: var(--w)`. The `bk` class paints a dark bar and `wt` leaves a gap, and the strip is a flexbox so the bars sit side by side at full height.

### Why is it useful?

Receipts, tickets, product labels, and loyalty cards show barcodes. This renders a barcode look purely from CSS sized bars, with no image or barcode font, ready to drive from encoded widths.
