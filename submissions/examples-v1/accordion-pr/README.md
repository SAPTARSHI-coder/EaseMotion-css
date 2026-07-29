# Accordion Component

**What does this do?**
A sleek, smoothly animating accordion component that allows users to toggle content panels without requiring JavaScript, using modern CSS grid transitions.

**How is it used?**
```html
<div class="accordion">
  <div class="accordion-item">
    <!-- Checkbox controls the state -->
    <input type="checkbox" id="acc-1" class="accordion-toggle">
    
    <label for="acc-1" class="accordion-header">
      Accordion Title
      <svg class="accordion-icon">...</svg>
    </label>
    
    <div class="accordion-content">
      <div class="accordion-inner">
        <div class="accordion-body">
          Hidden content goes here.
        </div>
      </div>
    </div>
  </div>
</div>
```

**Why is it useful?**
Accordions are essential for condensing large amounts of information, like FAQs or settings panels. This CSS-only approach using grid transitions fits perfectly with EaseMotion's philosophy of smooth, performant, and lightweight animations without forcing JS dependencies on simple UI elements.
