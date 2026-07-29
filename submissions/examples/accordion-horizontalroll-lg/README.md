# Horizontal Roll Accordion (Dashboard Analytics)

A pure CSS accordion component with a horizontal roll-out transition, designed for dashboard analytics layouts.

## Class: `ease-accordion-horizontalroll-lg`

### Features
- Pure CSS animation combining `grid-template-rows` (container expand) with `scaleX` from `transform-origin: left` (horizontal roll-out effect)
- Content unrolls left-to-right like a scroll or blind opening
- Fully keyboard accessible (Enter / Space to toggle, focus-visible outline)
- Uses `aria-expanded` and `aria-controls` for screen reader support
- Respects `prefers-reduced-motion`
- Customizable via CSS custom properties

### Usage

```html
<div class="ease-accordion-horizontalroll-lg">
  <div class="ease-accordion-horizontalroll-lg__item">
    <button class="ease-accordion-horizontalroll-lg__header" aria-expanded="true" aria-controls="panel-1">
      Title
      <svg class="ease-accordion-horizontalroll-lg__icon"></svg>
    </button>
    <div class="ease-accordion-horizontalroll-lg__panel" id="panel-1" data-open="true">
      <div class="ease-accordion-horizontalroll-lg__panel-inner">
        <div class="ease-accordion-horizontalroll-lg__roll">
          <div class="ease-accordion-horizontalroll-lg__content">Content here</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Customization

```css
.ease-accordion-horizontalroll-lg {
  --accordion-accent: #f97316;
  --accordion-duration: 700ms;
}
```

### Author
Lakshay Gujjar ([@lakshaygujjar273-cys](https://github.com/lakshaygujjar273-cys))

Closes #33092
