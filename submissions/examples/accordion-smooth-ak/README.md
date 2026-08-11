# accordion-smooth-ak

Pure CSS smooth opening accordion using CSS Grid row transitions — no JavaScript required.

## How to use

```html
<div class="ease-accordion">
  <div class="ease-accordion__item">
    <input type="checkbox" id="acc1" class="ease-accordion__checkbox" />
    <label for="acc1" class="ease-accordion__header">
      <span>Header Title</span>
      <span class="ease-accordion__icon">▼</span>
    </label>
    <div class="ease-accordion__content-wrapper">
      <div class="ease-accordion__content">
        Accordion body text content.
      </div>
    </div>
  </div>
</div>