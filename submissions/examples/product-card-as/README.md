# Product Card

### What does this do?

It shows a shop product card with a gradient image area, a sale badge, a save button, a title, a star rating with a review count, a price next to a struck old price, and an add to cart button.

### How is it used?

```html
<article class="product">
  <div class="pr-media"><span class="pr-badge">-25%</span><button class="pr-fav"><svg>...</svg></button></div>
  <div class="pr-body">
    <h3>Wireless headphones</h3>
    <div class="pr-rate"><span class="pr-stars" style="--pct: 90%"></span><span class="pr-reviews">4.5 (218)</span></div>
    <div class="pr-foot"><div class="pr-price"><b>$59</b><s>$79</s></div><button class="pr-cart">Add to cart</button></div>
  </div>
</article>
```

The star rating draws a gray row and clips a gold copy to the `--pct` width, so any fractional rating shows. The media area is a gradient, so there are no external images.

### Why is it useful?

Store grids are made of product cards. This lays out a product card with a media area, a sale badge, a partial star rating, pricing, and an add to cart action, using only CSS with no images. The cart button has hover and focus styles removed of motion under reduced motion.
