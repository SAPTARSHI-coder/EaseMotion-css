# stagger-list-ak

Pure CSS staggered entrance list animation — no JavaScript required.

## How to use

Assign the `--i` CSS custom variable corresponding to the item index (1, 2, 3, etc.) to set delayed animation timing.

```html
<ul class="ease-stagger-list">
  <li class="ease-stagger-list__item" style="--i: 1">Item 1</li>
  <li class="ease-stagger-list__item" style="--i: 2">Item 2</li>
  <li class="ease-stagger-list__item" style="--i: 3">Item 3</li>
</ul>

<!-- Slide from left variant -->
<ul class="ease-stagger-list ease-stagger-list--slide-left">
  <li class="ease-stagger-list__item" style="--i: 1">Item 1</li>
  <li class="ease-stagger-list__item" style="--i: 2">Item 2</li>
</ul>