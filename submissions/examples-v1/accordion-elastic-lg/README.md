# Elastic Bounce Accordion (Dashboard Analytics)

A pure CSS accordion component with a smooth elastic bounce transition, designed for dashboard analytics layouts.

## Class: `ease-accordion-elastic-lg`

### Features
- Pure CSS animation using the `grid-template-rows` trick (no max-height hacks)
- Elastic bounce easing via `cubic-bezier(0.68, -0.6, 0.32, 1.6)`
- Fully keyboard accessible (Enter / Space to toggle, focus-visible outline)
- Uses `aria-expanded` and `aria-controls` for screen reader support
- Respects `prefers-reduced-motion`
- Customizable via CSS custom properties

### Usage

```html
<div class="ease-accordion-elastic-lg">
  <div class="ease-accordion-elastic-lg__item">
    <button class="ease-accordion-elastic-lg__header" aria-expanded="true" aria-controls="panel-1">
      Title
      <svg class="ease-accordion-elastic-lg__icon"></svg>
    </button>
    <div class="ease-accordion-elastic-lg__panel" id="panel-1" data-open="true">
      <div class="ease-accordion-elastic-lg__panel-inner">
        <div class="ease-accordion-elastic-lg__content">Content here</div>
      </div>
    </div>
  </div>
</div>
```

### Customization

```css
.ease-accordion-elastic-lg {
  --accordion-accent: #f97316;
  --accordion-duration: 700ms;
}
```

### Author
Lakshay Gujjar ([@lakshaygujjar273-cys](https://github.com/lakshaygujjar273-cys))

Closes #32943
