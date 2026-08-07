# Swing-Hover Accordion (E-Commerce Checkout)

A pure CSS accordion component with a playful swing-hover icon interaction, designed for e-commerce checkout layouts.

## Class: `ease-accordion-swinghover-lg`

### Features
- Pure CSS animation using the `grid-template-rows` trick for smooth expand/collapse
- Distinct "swing" keyframe animation that plays on hover, independent of the open/closed state
- Fully keyboard accessible (Enter / Space to toggle, focus-visible outline)
- Uses `aria-expanded` and `aria-controls` for screen reader support
- Respects `prefers-reduced-motion`
- Customizable via CSS custom properties, including swing angle

### Usage

```html
<div class="ease-accordion-swinghover-lg">
  <div class="ease-accordion-swinghover-lg__item">
    <button class="ease-accordion-swinghover-lg__header" aria-expanded="true" aria-controls="panel-1">
      Order Summary <span class="ease-accordion-swinghover-lg__price">$84.99</span>
      <svg class="ease-accordion-swinghover-lg__icon"></svg>
    </button>
    <div class="ease-accordion-swinghover-lg__panel" id="panel-1" data-open="true">
      <div class="ease-accordion-swinghover-lg__panel-inner">
        <div class="ease-accordion-swinghover-lg__content">Content here</div>
      </div>
    </div>
  </div>
</div>
```

### Customization

```css
.ease-accordion-swinghover-lg {
  --accordion-accent: #6366f1;
  --swing-angle: 12deg;
  --accordion-duration: 500ms;
}
```

### Author
Lakshay Gujjar ([@lakshaygujjar273-cys](https://github.com/lakshaygujjar273-cys))

Closes #32991
