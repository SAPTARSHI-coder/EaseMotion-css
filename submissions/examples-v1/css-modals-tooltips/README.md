# CSS-Only Modals & Tooltips

**What does this do?**
This adds two highly requested UI components (from the v1.2 roadmap) completely built in CSS, requiring zero JavaScript:
1. **Modals**: A fully functional popup dialog with a backdrop blur and smooth entrance animation, using the CSS `:target` pseudo-class.
2. **Tooltips**: Sleek, animated hover text bubbles using data attributes and the `::after` pseudo-element.

**How is it used?**

**1. Tooltips**
```html
<button class="ease-tooltip-trigger" data-tooltip="This is a helpful tip!">Hover me</button>
```

**2. Modals**
```html
<!-- Link to open the modal -->
<a href="#demo-modal" class="ease-btn ease-btn-primary">Open Modal</a>

<!-- The Modal itself -->
<div id="demo-modal" class="ease-modal-overlay">
  <div class="ease-modal-content">
    <h3>Are you sure?</h3>
    <a href="#" class="ease-btn ease-btn-outline">Close</a>
  </div>
</div>
```

**Why is it useful?**
Both of these components typically rely heavily on JavaScript for event listeners (`click`, `mouseenter`, `mouseleave`). By implementing them purely in CSS, we stick true to the EaseMotion CSS philosophy of "zero-dependency, animation-first". They are extremely lightweight and incredibly fast.
