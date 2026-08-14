# Slide-Right Accordion (Interactive Interface)

A pure CSS accordion component with a smooth slide-right transition, designed for interactive interface layouts.

## Class: `ease-accordion-slideright-lg`

### Features
- Pure CSS animation combining `max-height` (for the container) with `translateX` (for the content slide-in effect)
- Content slides in from the left with a fade, giving a directional "slide-right" reveal
- Fully keyboard accessible (Enter / Space to toggle, focus-visible outline)
- Uses `aria-expanded` and `aria-controls` for screen reader support
- Respects `prefers-reduced-motion`
- Customizable via CSS custom properties

### Usage

```html
<div class="ease-accordion-slideright-lg">
  <div class="ease-accordion-slideright-lg__item">
    <button class="ease-accordion-slideright-lg__header" aria-expanded="true" aria-controls="panel-1">
      Title
      <svg class="ease-accordion-slideright-lg__icon"></svg>
    </button>
    <div class="ease-accordion-slideright-lg__panel" id="panel-1" data-open="true">
      <div class="ease-accordion-slideright-lg__panel-inner">
        <div class="ease-accordion-slideright-lg__content">Content here</div>
      </div>
    </div>
  </div>
</div>
```

### Customization

```css
.ease-accordion-slideright-lg {
  --accordion-accent: #f97316;
  --accordion-duration: 600ms;
}
```

### Author
Lakshay Gujjar ([@lakshaygujjar273-cys](https://github.com/lakshaygujjar273-cys))

Closes #33062
