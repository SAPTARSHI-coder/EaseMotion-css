# Feature Checklist

### What does this do?

It renders a feature checklist that shows what a plan includes with green check icons and what it excludes with muted dash icons and dimmer text. Included and excluded rows are set by a class.

### How is it used?

```html
<ul class="feature-list">
  <li class="has"><svg class="fl-icon">...</svg>Unlimited projects</li>
  <li class="no"><svg class="fl-icon">...</svg>Priority support</li>
</ul>
```

Use the `has` class for an included feature with a check icon and the `no` class for an excluded feature with a dash icon. The `no` rows dim automatically.

### Why is it useful?

Pricing and landing pages list plan features as a checklist of yes and no items. This renders an included and excluded feature list with matching icons and muted styling for excluded rows, using only CSS and inline SVG so there are no external assets.
