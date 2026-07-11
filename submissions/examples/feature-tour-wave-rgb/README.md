# Feature Tour with Wave Animation

## 1. What does this do?
Creates an interactive feature tour component where each tour item displays a beautiful wave animation on the bottom border when hovered, with smooth staggered entrance animations and rotating number badges.

## 2. How is it used?
Apply `.tour-item` to each card element in your feature tour:

```html
<div class="tour-item">
  <div class="tour-number">1</div>
  <h3 class="tour-heading">Feature Name</h3>
  <p class="tour-text">Description</p>
  <div class="tour-wave"></div>
</div>