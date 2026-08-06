# Accordion Vertical Tabs

A pure CSS, zero-JavaScript vertical accordion built with modern CSS Grid. Features buttery-smooth height transitions, rotating chevron indicators, and an elegant, light-themed premium design.

### Usage
```html
<div class="accordion">
  <div class="tab">
    <input type="radio" id="tab-1" name="accordion-group" checked>
    <label for="tab-1" class="tab-label">...</label>
    <div class="tab-content">
      <div class="tab-inner">...</div>
    </div>
  </div>
</div>
```

### Why is it useful?
Achieving perfectly smooth height transitions (animating to `height: auto`) used to require JavaScript calculations or hacky max-height solutions. This component utilizes the modern `grid-template-rows: 0fr` to `1fr` technique, delivering perfectly fluid, native-feeling animations using pure CSS. It's fully accessible and lightweight.
