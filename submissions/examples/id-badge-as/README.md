# ID Badge

### What does this do?

It shows an employee ID badge hanging from a lanyard. A strap and metal clip sit above a card with a punch hole, a company header, a photo tile, the name and role, ID and access level details, and a small barcode along the bottom. It is all drawn with CSS, no images.

### How is it used?

```html
<div class="lanyard">
  <span class="strap left"></span>
  <span class="strap right"></span>
  <span class="clip"></span>
  <div class="badge">...</div>
</div>
```

The two `strap` elements angle in from the top to the `clip`, and the `badge` card holds a photo tile, a details list, and a `badge-code` barcode whose bars are sized with a `--w` custom property.

### Why is it useful?

Event apps, HR tools, and access systems display staff or attendee badges. This provides a complete badge with lanyard, photo, details, and barcode, built entirely with CSS.
