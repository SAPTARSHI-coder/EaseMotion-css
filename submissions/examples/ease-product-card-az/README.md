# Product Card Component

### What does this do?
Adds `ease-product-card-az` — a product card component with image, badge (sale/new/eco), category label, title, star rating, price (with discount/original strikethrough), and add-to-cart button. Includes out-of-stock, horizontal, and compact variants.

### How is it used?
The maintainer should copy `style.css` into `components/product-card.css` and import it.

```html
<div class="ease-product-card-az">
  <div class="ease-product-image-wrap-az">
    <span class="ease-product-badge-az">Sale</span>
    <img src="..." alt="Product name">
  </div>
  <div class="ease-product-body-az">
    <span class="ease-product-category-az">Category</span>
    <h3 class="ease-product-title-az"><a href="#">Product Title</a></h3>
    <div class="ease-product-rating-az">
      <span class="stars">
        <span class="star filled">&#9733;</span>
        <span class="star">&#9733;</span>
      </span>
      <span class="count">(99)</span>
    </div>
    <div class="ease-product-price-az">
      <span class="current">$49.99</span>
      <span class="original">$79.99</span>
      <span class="discount">-38%</span>
    </div>
    <button class="ease-product-btn-az">Add to Cart</button>
  </div>
</div>
```

Badge classes: default (red "Sale"), `.--new` (indigo), `.--eco` (green). Card variants: `.--oos` (out of stock overlay), `.horizontal` (row layout), `.compact` (smaller grid card). Button variant: `.--outline`.

### Why is it useful?
1. **E-commerce ready** — common product card pattern with image zoom, badge, rating, pricing
2. **Multiple states** — sale/new/eco badges, out-of-stock overlay, horizontal layout for wider contexts
3. **Compact variant** — smaller footprint for dense grids (categories, search results)
4. **Interactive** — card lift on hover, image zoom, button hover state, all via CSS



Submitted by: @zen-ash-dev

Date: 2026-06-08

Status: **Pending review**
