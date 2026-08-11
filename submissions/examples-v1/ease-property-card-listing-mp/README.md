# Property Card Listing (ease-property-card-listing-mp)

### What does this do?
A CSS-only property listing card that lifts on hover and zooms its image smoothly, giving real-estate style listings a polished, interactive feel.

### How is it used?
```html
<div class="property-card-listing-mp">
  <div class="property-image-wrap-mp">
    <img src="house.jpg" alt="House" class="property-image-mp">
    <span class="property-badge-mp">For Sale</span>
  </div>
  <div class="property-info-mp">
    <div class="property-price-mp">$450,000</div>
    <h3 class="property-title-mp">Modern Family Home</h3>
    <p class="property-location-mp">📍 Maple Street, Springfield</p>
    <div class="property-meta-mp">
      <span>🛏 4 Beds</span>
      <span>🛁 3 Baths</span>
      <span>📐 2,200 sqft</span>
    </div>
  </div>
</div>
```
Hovering over `.property-card-listing-mp` lifts the whole card and zooms the image inside `.property-image-wrap-mp` via a scaled `.property-image-mp`.

### Why is it useful?
Property/listing cards are a very common real-world UI pattern (real estate, rentals, marketplaces). The image-zoom-on-hover effect is a subtle, purposeful micro-interaction that fits EaseMotion CSS's animation-first philosophy without requiring any JavaScript.
