# Gift Card Unwrap (#36685)

Gift card with a peel-reveal animation. Click the card to unwrap; the right half peels back to reveal the inner content.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--card-bg` | `#2d1b69` | Background color of the gift card |
| `--ribbon-color` | `#ffd700` | Color of the ribbon and amount text |
| `--peel-color` | `#e0c3fc` | Color of the peel layer |
| `--unwrap-duration` | `0.8s` | Duration of the peel animation |

## Usage

```html
<div class="gift-card" id="giftCard">
  <div class="gift-card__face">…</div>
  <div class="gift-card__peel"></div>
</div>
```

Add class `unwrap` to trigger the peel animation.
