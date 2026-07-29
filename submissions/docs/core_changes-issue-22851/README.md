# ease-rating — Star Rating Component

## What does this do?

Adds a CSS-only star rating component using a radio group with reversed flex order. Supports interactive hover preview, half-star precision, read-only display mode, and multiple size and colour variants.

## How is it used?

```html
<!-- Interactive rating (radio group) -->
<div class="ease-rating">
  <input type="radio" name="rating" id="s5" value="5" />
  <label for="s5"></label>
  <input type="radio" name="rating" id="s4" value="4" />
  <label for="s4"></label>
  <input type="radio" name="rating" id="s3" value="3" />
  <label for="s3"></label>
  <input type="radio" name="rating" id="s2" value="2" />
  <label for="s2"></label>
  <input type="radio" name="rating" id="s1" value="1" checked />
  <label for="s1"></label>
</div>

<!-- Read-only display -->
<div class="ease-rating ease-rating-readonly">
  <label class="ease-rating-filled"></label>
  <label class="ease-rating-filled"></label>
  <label class="ease-rating-filled"></label>
  <label></label>
  <label></label>
</div>
```

Variants:
```html
<!-- Sizes -->
<div class="ease-rating ease-rating-sm">...</div>
<div class="ease-rating ease-rating-lg">...</div>

<!-- Colors -->
<div class="ease-rating ease-rating-warning">...</div>
<div class="ease-rating ease-rating-success">...</div>
<div class="ease-rating ease-rating-danger">...</div>
<div class="ease-rating ease-rating-info">...</div>
```

Customise via CSS custom properties:
```css
.ease-rating {
  --ease-rating-color: #f59e0b;
  --ease-rating-size: 2rem;
}
```

## Why is it useful?

Star ratings are a fundamental UI pattern for product reviews, skill assessments, and feedback forms. This component is fully interactive with no JavaScript — the radio group handles selection, and `flex-direction: row-reverse` enables the hover preview effect. Supports dark mode, keyboard accessibility via `focus-visible`, and `prefers-reduced-motion`.

Fixes #22851
